import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import Dashboard from './pages/Dashboard'

export default function Routes() {
    return (
        <HashRouter>
            <Switch>
                <Route path="/" component={Dashboard} />
            </Switch>
        </HashRouter>
    )
}