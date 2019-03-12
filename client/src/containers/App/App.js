import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Navigator from '../../components/Navigator/Navigator';
import List from '../../components/SearchPage/List/List';
import Chart from '../../components/SearchPage/Chart/Chart';
import SearchPage from '../SearchPage/SearchPage';
import './App.css';

const UserLoginRouters = () => (
    <Switch>
        <Route path='/search/:id' component={ () =>
            <SearchPage>
                <Switch>
                    <Route path='/search/list' component={ List } />
                    <Route path='/search/chart' component={ Chart } />
                    <Route render={ () => <Redirect to="/search/list"/> }/>
                </Switch>
            </SearchPage>
        }/>
        <Route path="/about" render={ () => <h1>About</h1> }/>
        <Route path="/contact" render={ () => <h1>Contact</h1> }/>
        <Route render={ () => <Redirect to="/search/list"/> }/>
    </Switch>
);

class App extends Component {
  render () {
    return (
        <Router>
            <div className="App container">
                <Header/>
                <Navigator />
                <UserLoginRouters/>
                <Footer/>
            </div>
        </Router>
    );
  }
}

export default App;
