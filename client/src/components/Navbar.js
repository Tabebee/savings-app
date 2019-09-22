import  React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Navbar extends Component {

    render() {
        console.log(this.props);
        return (
            <nav className='keepBottom'>
                <div className='nav-wrapper'>
                    {/* Need this entire section centered */}
                    <ul className='center'>
                        <li><Link to='/' > Home </Link></li>
                        <li><Link to='/savings' > Saving Plans </Link></li>
                        <li><Link to='/plans' > My Plans </Link></li>
                        <li><Link to='/wishlist' > Wish List </Link></li>
                        <li><Link to='/profile' > Profile </Link></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

function mapStateToProps({ auth }) {
    return{ auth }; // auth: auth
}

export default connect(mapStateToProps)(Navbar);