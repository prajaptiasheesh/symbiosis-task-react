import React, { Component } from 'react'

export default class ListOption extends Component {


    render() {
        const { option, deleteOption } = this.props;
        return (
            <>
                <li className="list-group-item">{option.name} 
                <button type="button" onClick={()=>deleteOption()} className="close" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button></li>
                
            </>
            )
    }
}
