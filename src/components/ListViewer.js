import React, { Component } from 'react';

class ListViewer extends Component {
    render() {
        let { list, onListClick }= this.props

        let lists= list.length ? list.map((e,i)=> <div key={i}>
            <p className="listItem" onClick={()=> onListClick(e.name)}>{e.name}</p>
        </div>): <div>
            <p className="listItem" onClick={()=> onListClick('noResults')}>NoResults</p>
        </div>

        return <div>
            {lists}
        </div>
    }
} 

export default ListViewer;