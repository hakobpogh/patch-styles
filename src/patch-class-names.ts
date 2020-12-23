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

const patchClassNamesOfChildren = (namesMap: ClassNamesMap, children: ReactNode): ReactNode => {
  return React.Children.map<ReactNode, ReactNode>(children, (child: ReactNode) => {
    if (!React.isValidElement<PropsWithChildren<ChildPropsType>>(child)) {
      return child;
    }

    const { className } = child.props;

    const patchedChildren = patchClassNamesOfChildren(namesMap, child.props.children);

    return React.cloneElement(child, className ? {
      className: mapAndMergeClassNames(className, namesMap)
    } : undefined, patchedChildren);
  });
};

export default patchClassNamesOfChildren;
