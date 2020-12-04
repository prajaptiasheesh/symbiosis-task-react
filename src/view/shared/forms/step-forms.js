import React, { useState } from 'react'
import StepOne from './step-one-form';
import StepTwo from './step-two-form';
import PrevNext from '../PrevNext';

const StepForms = () => {

    const [currentFormState, setFormState] = useState({})

    const setCurrentFormState = (inputData)=>{
        setFormState((prev)=>({ ...prev, ...inputData}))
    } 

    return (
        <div className="container" >
            <PrevNext
                formNames={['step1', 'step2']}
                onStepChange={setCurrentFormState}
            >
                    <StepOne 
                        initialValues={currentFormState}  
                    />
                    <StepTwo 
                        initialValues={currentFormState}   
                    />
            </PrevNext>
        </div>
    )
}

export default StepForms
