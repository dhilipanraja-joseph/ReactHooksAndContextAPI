import React from 'react';
import { shallow, mount } from 'enzyme';
import ListViewer from '../components/ListViewer';

const listData= [
    { name: 'test1'},
    { name: 'test2'},
]

const mockFunc= jest.fn();

const ls= listData.map((e,i)=> <div key={i}>
    <p onClick={()=> onListClick(e.name)} className="listItem">{e.name}</p>
</div>);


// it('renders list', ()=> {
//     const wrapper= shallow(<ListViewer list={listData} onListClick={mockFunc}/>);
//     expect(wrapper).toContainReact(<div>{ls}</div>);
// }); 

it('onListClick Event', ()=> {
    const component= mount(<ListViewer list={listData} onListClick={mockFunc}/>);
    component.find(".listItem").at(1).simulate('click');
    component.unmount();
});