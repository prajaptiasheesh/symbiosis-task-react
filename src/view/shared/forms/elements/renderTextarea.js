import React from 'react'

function renderTextarea({ input, label, options, meta: { touched, error } }) {
    return <div>
            <label>{label}</label>
            <div>
                <textarea {...input} ></textarea>
                {touched && error && <span>{error}</span>}
            </div>
        </div>
}

export default renderTextarea
