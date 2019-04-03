import React, { Component } from 'react'

class DetailViewer extends Component {
    render() {
        let { name, order, sprites}= this.props.item;
        return <div>
            <h6>{name}</h6>
            <p>Order: {order}</p>
            <div>
                <img src={sprites.front_default} alt="no_img"/>
            </div>
        </div>
    }
}

export default DetailViewer;