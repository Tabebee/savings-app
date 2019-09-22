import  React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Dropdown, Button, Navbar, NavItem } from 'react-materialize';


class TopBar extends Component {

    renderLoginContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return (
                    <NavItem className='left' href='/auth/google' >Login</NavItem>
                );
            default:
                return (
                    <span>
                        <NavItem>
                            <img className='iconimg left' src={this.props.auth.photo}/>
                            <NavItem href='/api/logout'> Logout </NavItem>
                        </NavItem>
                    </span>
                )
        }
    }

    brandLoginGenerate() {
        var renderLogin;

        if (this.props.auth) {
            renderLogin = this.props.auth.firstName;
        } else {
            renderLogin = 'Login'
        }
        return (
            <div style={{ float: 'right !important' }}>{renderLogin}</div>
        )


    }



    render() {
        console.log('props', this.props.auth);
        return (
            <div>

                <nav>
                    <Navbar
                        alignLinks="left"
                        brand={<div>
                            Savings App
                            {/*<span style={{ position: 'fixed', right: '0'}}>*/}
                                {/*{this.brandLoginGenerate()}*/}
                            {/*</span>*/}
                        </div>}
                        // sidenav={
                        //     <li><Link to='/Home'>Home</Link></li>
                        // }
                    >
                        <NavItem href="">
                            Getting started
                        </NavItem>
                        <NavItem>
                            <a href="components.html">Components</a>
                        </NavItem>
                        <NavItem className='left'>
                            { this.renderLoginContent() }
                        </NavItem>
                    </Navbar>
                </nav>


                {/*<nav>*/}
                    {/*<div className='left brand-logo'>*/}
                        {/*My Savings App*/}
                    {/*</div>*/}
                    {/*<ul className='right'>*/}
                        {/*{ this.renderLoginContent() }*/}
                    {/*</ul>*/}
                {/*</nav>*/}
            </div>
        )
    }
}

function mapStateToProps({ auth }) {
    return{ auth }; // auth: auth
}

export default connect(mapStateToProps)(TopBar);

