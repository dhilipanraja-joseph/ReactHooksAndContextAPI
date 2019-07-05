import React from 'react';

const ListViewer= (props)=> {
    
    const itemStyle= {
       borderBottom: '.5px solid #e4e4e4',
       fontSize: '20px',
       cursor: 'pointer',
       textAlign: 'left',
       margin: '0',
       padding: '0px 60px',
    }

    let { list, onListClick }= props

    let lists= list.length? list.map((e,i)=> <div 
        key={i} 
        style={itemStyle} 
        onClick={()=> onListClick(e.name)}>
        <p>{e.name[0].toUpperCase()+e.name.slice(1)}</p>
    </div>): <div onClick={()=> onListClick('noResults')}>
        <p>NoResults</p>
    </div>

    return <div style={{
        maxHeight: '75vh',
        overflowY: 'auto',
        // padding: '0px 0px',
    }}>
        {lists}
    </div>
}


export default ListViewer;