import React from 'react';
import { shallow } from 'enzyme';
import Courses from './Courses';

describe('<Courses />', () => {
  test('renders', () => {
    const wrapper = shallow(<Courses />);
    expect(wrapper).toMatchSnapshot();
  });
});
