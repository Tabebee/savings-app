import  React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Dropdown, Button } from 'react-materialize';




class SavingsPlans extends Component {




    render() {
        return(
            <div className='container bottom65'>
                <h3 className='center ppll'> Saving Plans </h3>


                <div className='row'>
                    <div className='col s12 m6'>
                        <div className='card blue'>
                            <div className='card-content white-text'>
                                <span className='card-title'>52 Weak Plan</span>
                                <p>Every weak you save money by increasing the amount of money you put away based on which weak you are on.</p>
                            </div>
                            <div className='card-action center'>
                                <button className='btn light-green accent-4'> Add  </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row'>
                    <div className='col s12 m6'>
                        <div className='card blue'>
                            <div className='card-content white-text'>
                                <span className='card-title'>The 50-30-20 Plan</span>
                                <p> After calculating your after-tax income, you want to split your paycheck like this:</p>
                                <li> 50% = Needs</li>
                                <li> 30% = Wants</li>
                                <li> 20% = Savings</li>
                            </div>

                            <div className='card-action center'>
                                <button className='btn light-green accent-4'> Add  </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>





        )
    }
}



function mapStateToProps({ auth }) {
    return{ auth }; // auth: auth
}

export default connect(mapStateToProps)(SavingsPlans);






