import React, { Component, useState } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import renderFileInput from '../elements/renderFileInput'
import renderInput from '../elements/renderInput'
import renderSelect from '../elements/renderSelect'
import renderTextarea from '../elements/renderTextarea'
import { validate } from './validate'

const options = [
    {
        value: 'male',
        label: 'Male'
    },
    {
        value: 'female',
        label: 'Female'
    },
]

 function Index(props) {

    const [state, setstate] = useState()
    return (
        <div>
            <h3> Step one form </h3>
            <div className="row" >
                <div className="col-md-6" >
                    <Field
                        name={"firstName"}
                        type="text"
                        component={renderInput}
                        label={`First Name`}
                        placeholder={'Enter your first name'}
                    />

                </div>
                <div className="col-md-6" >
                    <Field
                        name={'lastName'}
                        type="text"
                        component={renderInput}
                        label={`Last Name`}
                        placeholder={'Enter your last name'}
                    />
                </div>
            </div>
            <div className="row" >
                <div className="col-md-12" >
                    <Field
                        name={"email"}
                        type="text"
                        component={renderInput}
                        label={`Email`}
                        placeholder={'Enter your email'}
                    />
                </div>
            </div>
            <div className="row" >
                <div className="col-md-6" >
                    <Field
                        name={'gender'}
                        type="text"
                        component={renderSelect}
                        label={`Select a gender`}
                        options={options}
                        placeholder={'Please select a gender'}
                    />

                </div>
                <div className="col-md-6" >
                    <Field
                        name={'description'}
                        type="text"
                        component={renderTextarea}
                        label={`Please describe yourself`}
                        placeholder={'Please describe yourself'}
                    />
                </div>
            </div>
            <div className="row" >
                <div className="col-md-2" >
                    <Field
                        name={'profileImg'}
                        component={renderFileInput}
                        label={`Please select an image`}
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
    form: 'step1',
    enableReinitialize: true,
    destroyOnUnmount: false,
    validate
  })(Index)

export default connect(mapStateToProps, mapDispatchToProps)(Index)
