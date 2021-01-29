import React from 'react';
import AppExample from './App';
import { shallow, ShallowWrapper } from "enzyme";
import PatchStyles from 'patch-styles';


describe('<AppExample />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<AppExample />);
  });

  it('uses PatchStyles', () => {
    expect(wrapper.exists(PatchStyles)).toBe(true);
  });

  it('passes classNames and extraProps to PatchStyles', () => {
    const patchStyles = wrapper.find(PatchStyles);

    expect(patchStyles.prop('classNames')).toBeDefined();
    expect(patchStyles.prop('extraProps')).toBeDefined();
  });
});
