import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import List from '../../components/SearchPage/List/List';
import SearchPage from '../SearchPage/SearchPage';
import AboutPage from '../AboutPage/AboutPage';
import TrandsPage from '../TrandsPage/TrandsPage';
import ContactPage from '../ContactPage/ContactPage';
import './App.css';

const UserLoginRouters = () => (
    <Switch>
        <Route path='/search/:id' component={ () =>
            <SearchPage>
                <Switch>
                    <Route path='/search/list' component={ List } />
                    <Route render={ () => <Redirect to="/search/list"/> }/>
                </Switch>
            </SearchPage>
        }/>
        <Route path="/about" component={ AboutPage }/>
        <Route path='/trands/language' component={ TrandsPage }/>
        <Route path="/contact" component={ ContactPage }/>
        <Route render={ () => <Redirect to="/search/list"/> }/>
    </Switch>
);

class App extends Component {
  render () {
    return (
        <Router>
            <div className="App">
                <Header/>
                <div className="container">
                    <UserLoginRouters/>
                </div>
                <Footer/>
            </div>
        </Router>
    );
  }
}

export default App;
