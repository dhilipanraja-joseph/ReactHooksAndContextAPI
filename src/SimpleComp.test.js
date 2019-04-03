import React from 'react';
import ReactDOM from 'react-dom';
import SimpleComp from './SimpleComp';

it('renders without crash', ()=> {
    const div= document.createElement('div');
    ReactDOM.render(<SimpleComp />, div);
    ReactDOM.unmountComponentAtNode(div);
})