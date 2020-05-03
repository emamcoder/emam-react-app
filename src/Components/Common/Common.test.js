import React from 'react';
import { shallow } from 'enzyme';
import Common from './Common';

describe('<Common />', () => {
  test('renders', () => {
    const wrapper = shallow(<Common />);
    expect(wrapper).toMatchSnapshot();
  });
});
