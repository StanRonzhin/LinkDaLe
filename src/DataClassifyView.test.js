/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';
import DataClassifyView from './DataClassifyView';

describe('<DataCreation/>', () => {
  const baseSetURI = jest.fn();
  const baseSetClass = jest.fn();
  const baseSetBaseUri = jest.fn();
  const baseNextPage = jest.fn();
  const baseData =
    [{ columnName: 't0', exampleValue: 'b0', class: { name: 'Literal' }, uri: false },
      { columnName: 't1', exampleValue: 'b1', class: { name: 'Literal' }, uri: false },
      { columnName: 't2', exampleValue: 'b2', class: { name: 'Literal' }, uri: false },
      { columnName: 't3', exampleValue: 'b3', class: { name: 'Literal' }, uri: false },
      { columnName: 't4', exampleValue: 'b4', class: { name: 'Literal' }, uri: false }];

  it('renders without crashes', () => {
    shallow(<DataClassifyView
      setBaseUri={baseSetBaseUri}
      data={baseData}
      nextPage={baseNextPage}
      setClass={baseSetClass}
      setUri={baseSetURI}
    />);
  });

  it('getAmountOfClasses', () => {
    const wrapper = shallow(<DataClassifyView
      setBaseUri={baseSetBaseUri}
      data={baseData}
      nextPage={baseNextPage}
      setClass={baseSetClass}
      setUri={baseSetURI}
    />);

  });
});
