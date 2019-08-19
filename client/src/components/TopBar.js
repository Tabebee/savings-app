import  React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Dropdown } from 'materialize-css';


class TopBar extends Component {

    renderLoginContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return (
                    <li><a href='/auth/google' >Login</a></li>
                );
            default:
                return (
                    <span>
                        <li>
                            <img className='iconimg' src={this.props.auth.photo}/>
                        </li>
                        <li key="2"><a href='/api/logout'> Logout </a></li>
                        {/* Need Drop Down to work here with image*/}
                        {/*<li>*/}
                            {/*<Dropdown*/}
                                {/*trigger={<img className='iconimg' src={this.props.auth.photo}/>} >*/}
                                {/*<Link to='/settings'>Settings</Link>*/}
                                {/*<Link to='/api/logout'>Logout</Link>*/}
                            {/*</Dropdown>*/}
                        {/*</li>*/}
                    </span>
                )
        }
    }




    render() {
        return (
            <nav>
                <div className='left brand-logo'>
                    My Savings App
                </div>
                <ul className='right'>
                    { this.renderLoginContent() }
                </ul>
            </nav>
        )
    }
}

function mapStateToProps({ auth }) {
    return{ auth }; // auth: auth
}

export default connect(mapStateToProps)(TopBar);

