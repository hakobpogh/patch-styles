import React, { PropsWithChildren, ReactNode } from 'react';
import { ChildPropsType, ClassNamesMap } from './utils';

const splitClassName = (className: string): string[] => {
  return className.split(/\s+/g);
};

const mapAndMergeClassNames = (className: string | string[], namesMap: ClassNamesMap): string => {
  const namesArray = Array.isArray(className) ? className : [className];
  const splitNamesArr = namesArray.flatMap((name) => splitClassName(name));

  return splitNamesArr.map((name) => namesMap[name] ?? name).join(' ');
};

const getMappedProps = <T>(props: T, extraProps: string[], namesMap: ClassNamesMap): Partial<T> => {
  const mappedProps: T = <T>{};
  const propsToMap = Object.keys(props).filter((key) => key === 'className' || extraProps.includes(key));

  propsToMap.forEach((key) => {
    mappedProps[key] = mapAndMergeClassNames(props[key], namesMap);
  });

  return mappedProps;
};

const patchClassNamesOfChildren = (namesMap: ClassNamesMap, extraProps: string[], children: ReactNode): ReactNode => {
  return React.Children.map<ReactNode, ReactNode>(children, (child: ReactNode) => {
    if (!React.isValidElement<PropsWithChildren<ChildPropsType>>(child)) {
      return child;
    }

    const mappedProps = getMappedProps(child.props, extraProps, namesMap);

    const patchedChildren = patchClassNamesOfChildren(namesMap, extraProps, child.props.children);

    return React.cloneElement(child, mappedProps, patchedChildren);
  });
};

export default patchClassNamesOfChildren;
