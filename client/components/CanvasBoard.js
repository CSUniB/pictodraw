import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actions/actions';
import PaletteContainer from './PaletteContainer';

const mapStateToProps = store => {
  return {
    drawer: store.drawer,
    context: store.context,
    clickX: store.canvas.clickX,
    clickY: store.canvas.clickY,
    clickDrag: store.canvas.clickDrag
  }
}
const mapDispatchToProps = dispatch => {
  return {
    addClick: (x, y, dragging) => dispatch(actions.addClick(x, y, dragging)),
    initializeContext: function(newContext) {
      console.log('in MapDtoP', newContext);
      return dispatch(actions.initializeContext(newContext))},
    resetContext: (strokeStyle, join, width) => dispatch(actions.resetContext(strokeStyle, join, width))
  }
};

class CanvasBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      default: {
        color: "black",
        join: "round",
        width: 5
      }, 
      paint: false,
    }
    this.redraw = this.redraw.bind(this);
    this.startDraw = this.startDraw.bind(this);
    this.draw = this.draw.bind(this);
    this.stopDraw = this.stopDraw.bind(this);
  }

  componentDidMount() {
    let initContext = this.refs.canvas.getContext('2d');
    this.props.initializeContext(initContext);
    const { color, join, width } = this.state.default;
    this.props.resetContext(color, join, width);
    // this.setState({context: this.refs.canvas.getContext('2d')});
  }

  // invoke redraw when we get props from store (updated state)
  componentDidUpdate() {
    this.redraw();
  }

  redraw(){
    this.props.context.clearRect(0, 0, this.props.context.canvas.width, this.props.context.canvas.height); // Clears the canvas

    this.props.resetContext();

    for(let i = 0; i < this.props.clickX.length; i++) {
      this.props.context.beginPath();
      if(this.props.clickDrag[i] && i) {
        this.props.context.moveTo(this.props.clickX[i-1], this.props.clickY[i-1]);
       } else {
         this.props.context.moveTo(this.props.clickX[i]-1, this.props.clickY[i]);
       }
       this.props.context.lineTo(this.props.clickX[i], this.props.clickY[i]);
       this.props.context.closePath();
       this.props.context.stroke();
    }
  }

  startDraw(e) {
    let mouseX = e.pageX - e.currentTarget.offsetLeft;
    let mouseY = e.pageY - e.currentTarget.offsetTop;

    this.setState({paint: true});

    // these need to dispatch to store action
    // redraw happens in component after redux state has been updated with click coordinates
    this.props.addClick(mouseX, mouseY);
  }

  draw(e) {
    if(this.state.paint){
      this.props.addClick(e.pageX - e.currentTarget.offsetLeft, e.pageY - e.currentTarget.offsetTop, true);
    }
  }

  stopDraw(e) {
    this.setState({paint: false});
  }

  render() {
    console.log(this.props.drawer);
    let canvas = (
      <canvas ref="canvas" width={750} height={450}/>
    )

    let palette = (<div></div>);

    if (this.props.drawer) {
      canvas = ( 
        <canvas onMouseDown={(e)=>this.startDraw(e)} onMouseMove={(e)=>this.draw(e)} onMouseUp={(e)=>this.stopDraw(e)} onMouseLeave={(e)=>this.stopDraw(e)} ref="canvas" width={750} height={450}/> );
      palette = <PaletteContainer />

    }
    return(
      <div id='canvasDiv'>
        {canvas}
        {palette}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CanvasBoard);
