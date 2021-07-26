import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from './App';

configure({adapter: new Adapter()});

describe('<App />', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<App/>)
    });

    it('should render disabled button at the start because there is no goal', () => {

        expect(wrapper.find('.disabled')).toHaveLength(1)
    })

    it('')
})

