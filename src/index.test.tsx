import React, { FC, ReactNode } from 'react';
import patchClassNamesOfChildren from './helper-methods/patch-class-names-of-children';
import { ClassNamesMap } from './utils';

describe('patchClassNamesOfChildren()', () => {
  const namesMap: ClassNamesMap = {
    root: 'root-0001',
    'first-child': 'first-child-0002',
    'first-grand-child': 'first-grand-child-0003',
    'extra-class-name': 'extra-class-name-0004',
    active: 'active-0005',
  };
  // const extraProps = ['extraClassName', 'activeClassName'];
  const Component: FC<{ className: string; extraClassName: string; activeClassName: string; }> = () => <div />;

  const rootNode = (
    <div className="root">
      <div className="first-child">
        <span className="second-child" />
      </div>
      <Component className="second-child" extraClassName="extra-class-name" activeClassName="active" />
    </div>
  );

  it('patches className on root node and children', () => {
    const patchedNodes = patchClassNamesOfChildren(namesMap, [], rootNode);
  });
});

const isPatchedNode = (original: ReactNode, patched: ReactNode, namesMap: ClassNamesMap, extraProps: string[]): boolean => {
  return isPatchedNodeArrays(React.Children.toArray(original), React.Children.toArray(patched), namesMap, extraProps);
};

const isPatchedNodeArrays = (original: ReactNode[], patched: ReactNode[], namesMap: ClassNamesMap, extraProps: string[]): boolean => {
  for (const node of original) {
  }
};

const compareSingleNode = (original: ReactNode, patched: ReactNode, namesMap: ClassNamesMap, extraProps: string[]) => {
  if (!React.isValidElement(original)) {
    return;
  }
};
