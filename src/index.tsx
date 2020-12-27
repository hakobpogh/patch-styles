import React, { FC, PropsWithChildren } from 'react';
import { ClassNamesMap } from './utils';
import patchClassNamesOfChildren from './patch-class-names';

export interface Props {
  classNames: ClassNamesMap;
}

const PatchStyles: FC<PropsWithChildren<Props>> = ({ classNames, children }) => {
  if (!children) {
    throw new Error('ApplyStyles should always have children to apply styles too');
  }

  return (
    <React.Fragment>
      {patchClassNamesOfChildren(classNames, children)}
    </React.Fragment>
  );
};

export default PatchStyles;

