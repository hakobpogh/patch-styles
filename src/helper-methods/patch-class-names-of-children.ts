import React, { PropsWithChildren, ReactElement, ReactNode } from 'react';
import { ChildPropsType, ClassNamesMap } from '../utils';
import getMappedClassNameProps from './get-mapped-class-name-props';

const patchClassNamesOfChildren = (namesMap: ClassNamesMap, extraProps: string[], children: ReactNode): ReactNode => {
  return React.Children.map<ReactNode, ReactNode>(children, (child: ReactNode) => {
    if (!React.isValidElement<PropsWithChildren<ChildPropsType>>(child)) {
      return child;
    }

    return patchClassNamesForReactNode(child, namesMap, extraProps);
  });
};

export default patchClassNamesOfChildren;

type ChildElement = ReactElement<PropsWithChildren<ChildPropsType>>;

const patchClassNamesForReactNode = (child: ChildElement, namesMap: ClassNamesMap, extraProps: string[]): ReactNode => {
  const allMappedOrPatchedProps = getAllMappedOrPatchedProps(child.props, extraProps, namesMap);
  const patchedChildren = patchClassNamesOfChildren(namesMap, extraProps, child.props.children);

  const hasValidChildren = React.Children.toArray(child.props.children).some((node) => React.isValidElement(node));

  if (!allMappedOrPatchedProps && !hasValidChildren) {
    return child;
  }

  return React.cloneElement(child, allMappedOrPatchedProps ?? {}, patchedChildren);
};

const getAllMappedOrPatchedProps = <T>(props: T, extraProps: string[], namesMap: ClassNamesMap): Partial<T> | null => {
  const mappedClassNameProps = getMappedClassNameProps(props, extraProps, namesMap);
  const patchedNodeProps = getPatchedNodeProps(props, extraProps, namesMap);

  if (!mappedClassNameProps && !patchedNodeProps) {
    return null;
  }

  return {
    ...mappedClassNameProps,
    ...patchedNodeProps,
  };
};

const getPatchedNodeProps = <T>(props: T, extraProps: string[], namesMap: ClassNamesMap): Partial<T> | null => {
  const patchedNodeProps: T = <T>{};
  const propsToMap = Object.keys(props).filter((key) => React.isValidElement(props[key]));

  propsToMap.forEach((key) => {
    patchedNodeProps[key] = patchClassNamesForReactNode(props[key], namesMap, extraProps);
  });

  return propsToMap.length ? patchedNodeProps : null;
};
