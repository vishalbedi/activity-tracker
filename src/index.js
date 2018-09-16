import React from 'react';
import {render} from 'react-dom';
import {App} from "./components/App";
import {NotFound} from "./components/NotFound";

import {HashRouter as Router, Route, Switch} from  'react-router-dom';
import {AddDayForm} from "./components/AddDayForm";

render(
    <Router>
        <Switch>
            <Route exact path="/"  component={App}/>
            <Route path="/list-days/:filter?" component={App}>
            </Route>
            <Route path="/add-day" component={App}/>
            <Route  component={NotFound} />
        </Switch>
    </Router>,
    document.getElementById('react-container')
);
