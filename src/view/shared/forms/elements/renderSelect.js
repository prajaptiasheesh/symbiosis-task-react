import React from 'react'

function renderSelect({ input, label, options, meta: { touched, error } }) {
    return <div>
            <label>{label}</label>
            <div>
                <select {...input} >
                    {options.map(item=><option value={item.value} >{item.label}</option>)}
                </select>
                {touched && error && <span>{error}</span>}
            </div>
        </div>
}

export default renderSelect
