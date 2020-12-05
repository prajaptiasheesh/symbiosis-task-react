import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import StepForms from '../view/components/StepForm'
import { Portal } from '../view/layout'


export default class Routes extends Component {
   

    render() {
        return (
            <Switch>
                <Route exact={true} path="/" component={Portal} />
                <Route exact path="/step-forms" component={StepForms} />
                <Route path="*" render={() => <h1>Page not found</h1>} />
            </Switch>
        )
    }
}
