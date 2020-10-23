import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Portal } from '../view/layout'

export default class Routes extends Component {
   

    render() {
        return (
            <Switch>
                <Route exact={true} path="/" component={Portal} />
                <Route path="*" render={() => <h1>Page not found</h1>} />
            </Switch>
        )
    }
}
