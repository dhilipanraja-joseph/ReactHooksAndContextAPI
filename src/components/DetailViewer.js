import React from 'react'

const DetailViewer =(props)=> {
    let { name, order, sprites}= props.item;
    let front_default= '';
    if (sprites) front_default= sprites.front_default; 
    
    return <div>
        <h3>{name}</h3>
        <p>Order: {order}</p>
        <div>
            <img src={front_default} alt="no_img"/>
        </div>
    </div>
}

export default DetailViewer;