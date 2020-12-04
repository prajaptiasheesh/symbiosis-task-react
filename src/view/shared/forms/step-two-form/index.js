import React, { Component, useState } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import renderInput from '../elements/renderInput'
import renderSelect from '../elements/renderSelect'

const options = [
    {
        value: 'private',
        label: 'Private'
    },
    {
        value: 'govt',
        label: 'Government'
    },
]

function Index(props) {

    const [state, setstate] = useState()
    return (
        <div>
        <h3> Step second form </h3>
        <div className="row" >
            <div className="col-md-6" >
                <Field
                    name={"companyName"}
                    type="text"
                    component={renderInput}
                    label={`Enter organisation name`}
                    placeholder={'Enter organisation name'}
                />

            </div>
            <div className="col-md-6" >
                <Field
                    name={'address'}
                    type="text"
                    component={renderInput}
                    label={`Address`}
                    placeholder={'Enter your address'}
                />
            </div>
        </div>
        <div className="row" >
            <div className="col-md-6" >
                <Field
                    name={'sector'}
                    type="text"
                    component={renderSelect}
                    label={`Sector`}
                    options={options}
                    placeholder={'Please select a gender'}
                />

            </div>
        </div>
    </div> 
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

Index = reduxForm({
    // a unique name for the form
    form: 'step2',
    enableReinitialize: true,
    destroyOnUnmount: false
  })(Index)

export default connect(mapStateToProps, mapDispatchToProps)(Index)
