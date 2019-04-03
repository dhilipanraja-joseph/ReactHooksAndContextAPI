import React from 'react';
import { shallow, mount } from 'enzyme';
import ReactDOM from 'react-dom';
import ListViewer from './ListViewer';

const listData= [
    { name: 'test1'},
    { name: 'test2'},
]

const onListClick= jest.fn();

const ls= listData.map((e,i)=> <div key={i}>
    <p onClick={onListClick} className="listItem">{e.name}</p>
</div>);


test('renders list', ()=> {
    const wrapper= shallow(<ListViewer list={listData} onListClick={onListClick}/>);
    expect(wrapper).toContainReact(<div>{ls}</div>);
}); 

test('onListClick Event', ()=> {
    const component= mount(<ListViewer list={listData} onListClick={onListClick}/>);
    component.find(".listItem").at(1).simulate('click');
    component.unmount();
})