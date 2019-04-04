import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import SimpleComp from '../components/SimpleComp';

it('renders without crash', ()=> {
    const div= document.createElement('div');
    ReactDOM.render(<SimpleComp />, div);
    ReactDOM.unmountComponentAtNode(div);
})

it('change state on list item clicked', ()=> {
    const component= mount(<SimpleComp />);
    component.find('.listItem').simulate('click');
    component.unmount();
});