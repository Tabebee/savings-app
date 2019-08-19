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
                        <li><Link to='/two' > Two </Link></li>
                        <li><Link to='/three' > three </Link></li>
                        <li><Link to='/four' > Four </Link></li>
                        <li><Link to='/five' > Five </Link></li>
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