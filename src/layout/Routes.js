import React, { Component } from 'react'
import {
    Switch,
    Route,
  } from "react-router-dom";
import FormComponent from '../components/FormComponent';
import Statistics from '../components/Statistics';

export default class Routes extends Component {
  

    render() {
        return (
            <div>
              {/* A <Switch> looks through its children <Route>s and
                  renders the first one that matches the current URL. */}
              <Switch>
                <Route exact path="/dynamic-form">
                  <FormComponent />
                </Route>
                <Route exact path="/">
                  <Statistics />
                </Route>
              </Switch>
          </div>
        )
    }
}
