import React from 'react';
import { shallow } from 'enzyme';
import Blog from './blog';

describe('<Blog />', () => {
  test('renders', () => {
    const wrapper = shallow(<Blog />);
    expect(wrapper).toMatchSnapshot();
  });
});
