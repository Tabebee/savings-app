import  React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Dropdown } from 'materialize-css';




class HomePage extends Component {




    render() {
        return(

        )
    }
}



function mapStateToProps({ auth }) {
    return{ auth }; // auth: auth
}

export default connect(mapStateToProps)(HomePage);