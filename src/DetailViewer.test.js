import React from 'react';
import { shallow, mount } from 'enzyme';
import ReactDOM from 'react-dom';
import DetailViewer from './DetailViewer';

const testData= {
    name: 'test-name',
    order: 1,
    sprites: {
        front_default: 'image url'
    }
}

test('render viewer', ()=> {
    const wrapper= shallow(<DetailViewer item={testData}/>);
    let { name, order, sprites }= testData;
    const viewer= <div>
        <h6>{name}</h6>
        <p>Order: {order}</p>
        <div>
            <img src={sprites.front_default} alt="no_img"/>
        </div>
    </div>
    expect(wrapper).toContainReact(viewer)
});