import React, { Component } from 'react'

export default class RefsTest extends Component {
    
    constructor() {
        super();
        this.myRef= React.createRef();
    }

    render() {
        return <div ref={this.myRef}>
        </div>
    }
}