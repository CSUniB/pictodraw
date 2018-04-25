import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actions/actions';

const mapStateToProps = store => {
  return {
    
  }
}
const mapDispatchToProps = dispatch => {
  return {
    
    clear: () => dispatch(actions.clear())
  }
};

class Eraser extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   default: {
    //     color: "black",
    //     join: "round",
    //     width: 5
    //   }, 
    //   paint: false,
    // }
    // this.redraw = this.redraw.bind(this);
    // this.startDraw = this.startDraw.bind(this);
    // this.draw = this.draw.bind(this);
    // this.stopDraw = this.stopDraw.bind(this);
    //this.changeToEraser = this.changeToEraser.bind(this);
  }

  componentDidMount() {
    // let initContext = this.refs.canvas.getContext('2d');
    // this.props.initializeContext(initContext);
    // this.setState({context: this.refs.canvas.getContext('2d')});
  }

  // invoke redraw when we get props from store (updated state)
  componentDidUpdate() {
    //this.redraw();
  }

  // changeToEraser() {
  //   this.props.setEraser()
  // }
  

  render() {


    
      return(
        <div id='eraser'>
          <button onClick={()=> this.props.clear()}>clear</button>
        </div>
      );
  
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Eraser);
