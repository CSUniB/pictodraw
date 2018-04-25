import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actions/actions';

const mapStateToProps = (store) => {
    return {
        drawer: store.drawer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        
    }
}

class Palette extends Component {
    constructor(props) {
        super();
    }


    render() {
        return (
            <div className='pen-palette'>
            </div>
        )
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Palette);