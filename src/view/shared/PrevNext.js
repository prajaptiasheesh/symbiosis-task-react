import React, { Component, useState } from 'react'
import { connect } from 'react-redux'
import { getFormValues, isInvalid } from 'redux-form';

export const PrevNext = ({ lastStep, children, onStepChange, formvalues, invalidForms }) => {

    const [step, setStep] = useState(lastStep || 0);

    const modules = React.Children.map(children, (item)=> item && item );

    const prev = ()=>{

        if(step > 0){
            setStep(step - 1);
            onStepChange(formvalues[step - 1])
        }
    } 

    const next = ()=>{

        if(step < modules.length - 1){
            setStep(step + 1);
            onStepChange(formvalues[step + 1])
        }
    } 

    return (
        <div >
            {modules[step]}

            <div className="row" >
                <div className="col-md-6" >
                    <button type='button' onClick={prev} > Previous</button>
                </div>
                <div className="col-md-6" >
                    <button type='button' disabled={invalidForms[step]} onClick={next} > Next </button>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) =>{
    const props = {
        formvalues: [],
        invalidForms: []
    };
    const { formNames } = ownProps; 
    for(let i=0;i< formNames.length; i++){
        props.formvalues[i]= getFormValues(formNames[i])(state);
        props.invalidForms[i] = isInvalid(formNames[i])(state)
    }
    return props;
} 


const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(PrevNext)
