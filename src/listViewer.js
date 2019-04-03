import React, { Component } from 'react';

class ListViewer extends Component {
    render() {
        let { list }= this.props

        let lists= list.map((e,i)=> <div key={i}>
            <p>{e.name}</p>
        </div>)

        return <div>
            {lists}
        </div>
    }
} 

export default ListViewer;