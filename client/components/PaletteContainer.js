import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actions/actions';
import PaletteDisplay from './PaletteDisplay';

const mapStateToProps = (store) => {
    return {
        context: store.context
    }
}

const mapDispatchToProps = dispatch => {
    return {
        resetContext: function (strokeStyle, join, width) {
            console.log('in resetD', strokeStyle);
            return dispatch(actions.resetContext(strokeStyle, join, width));
        }
    }
}

class PaletteContainer extends Component {
    constructor(props) {
        super();
        this.changeColor = this.changeColor.bind(this);
        this.changeStrokeWidth = this.changeStrokeWidth.bind(this);
    }

    changeColor(newColor) {
        this.props.resetContext(newColor, null, null);
    }

    changeStrokeWidth(newWidth) {
        this.props.resetContext(null, null, newWidth);
    }

    render() {
        return (
            <PaletteDisplay changeColor={this.changeColor} changeStrokeWidth={this.changeStrokeWidth}/>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PaletteContainer);