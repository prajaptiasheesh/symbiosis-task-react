import React, { Component } from 'react'

export default class Option extends Component {


    render() {
        const { option, handleChange } = this.props;
        return (
                <div className="custom-control custom-checkbox">
                    <input onChange={(event)=>handleChange(event, option.id)} id={option.id} checked={option.selected} type="checkbox" className="custom-control-input" />
                    <label className="custom-control-label" htmlFor={option.id}>{ option.name }</label>
                </div>
        )
    }
}
