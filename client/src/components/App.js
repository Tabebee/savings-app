import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Navbar from './Navbar';
import TopBar from './TopBar';

import HomePage from './HomePage';
import SavingsPlans from './SavingsPlans';
import MyPlans from './MyPlans';

const SurveryNew = () => <h2>SurveryNew</h2>;
const Landing = () => <h2>Landing</h2>;
const Two = () => <h2>Page Two</h2>
const Three = () => <h2>Page Three</h2>
const Four = () => <h2>Page Four</h2>
const Five = () => <h2>Page Five</h2>

class App extends Component {

    componentDidMount() {
        this.props.fetchUser();
    }


    render() {
        return (
            <div className=''>
                <BrowserRouter> {/* BrowserRouter can ONLY have 1 child so we need div inside here*/}
                    <div>
                        <TopBar />
                        <Route exact path='/' component={HomePage} />
                        <Route exact path='/landing' component={Landing} />
                        <Route exact path='/surveys/new' component={SurveryNew} />
                        <Route exact path='/savings' component={SavingsPlans} />
                        <Route exact path='/plans' component={MyPlans} />
                        <Route exact path='/wishlist' component={Four} />
                        <Route exact path='/profile' component={Five} />
                        <Navbar />

                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default connect(null, actions)(App);
