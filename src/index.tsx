import React, { FC, PropsWithChildren } from 'react';
import { ClassNamesMap } from './utils';
import patchClassNamesOfChildren from './helper-methods/patch-class-names-of-children';

export interface Props {
  classNames: ClassNamesMap;
  extraProps?: string | string[] | null;
}

const PatchStyles: FC<PropsWithChildren<Props>> = ({ classNames, extraProps, children }) => {
  if (!children) {
    throw new Error('ApplyStyles should always have children to apply styles too');
  }

  const extraPropsArr = Array.isArray(extraProps) ? extraProps : [extraProps];
  const extraPropsSplit = extraPropsArr.flatMap((props) => (props ?? '').split(/\s*,\s*/g));

  return (
    <React.Fragment>
      {patchClassNamesOfChildren(classNames, extraPropsSplit, children)}
    </React.Fragment>
  );
};

export default PatchStyles;
