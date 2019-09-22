import  React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Dropdown, Button } from 'react-materialize';




class HomePage extends Component {




    render() {
        return(
            <div className='container'>
                <h3 className='center'>My Plans
                    <Button className='right'>
                        <Link to='/savings' className='snowColor'>Add More </Link>

                    </Button>
                </h3>
            </div>
        )
    }
}



function mapStateToProps({ auth }) {
    return{ auth }; // auth: auth
}

export default connect(mapStateToProps)(HomePage);