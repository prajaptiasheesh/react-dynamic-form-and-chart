import React, { Component } from 'react'
import Routes from './layout/Routes';
import {
  NavLink,
  withRouter
} from "react-router-dom";


class App extends Component {

  componentDidMount(){
  }

  render() {
    return (
      <div className="App">
      <header className="App-header">
        <nav className="navbar navbar-expand-lg navbar-light bg-info">

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/dynamic-form">Form</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <Routes />
    </div>
    )
  }
}

export default App = withRouter(App);