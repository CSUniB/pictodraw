import React from 'react';

const PaletteDisplay = (props) => {
    const sizeTo3 = () => { props.changeStrokeWidth(3) }; 
    const sizeTo5 = () => { props.changeStrokeWidth(5) }; 
    const sizeTo7 = () => { props.changeStrokeWidth(7) }; 
    const sizeTo10 = () => { props.changeStrokeWidth(10) }; 

    const colorToBlk = () => { props.changeColor('black') };
    const colorToBlu = () => { props.changeColor('blue') };
    const colorToGrn = () => { props.changeColor('green') };
    const colorToYlw = () => { props.changeColor('yellow') }; 

    return (
        <div>
            <div className='pen-palette'>
                <h4>Pen Color</h4>
                <button className='width-palette' onClick={colorToBlk}>
                    <svg height="25px" width="20px">
                        <circle cx="10" cy="15" r="10" fill="black" />
                        Sorry, your browser does not support inline SVG.
                    </svg>
                </button>
                <button className='width-palette' onClick={colorToBlu}>
                    <svg height="25px" width="20px">
                        <circle cx="10" cy="15" r="10" fill="blue" />
                        Sorry, your browser does not support inline SVG.
                    </svg>
                </button>
                <button className='width-palette' onClick={colorToGrn}>
                    <svg height="25px" width="20px">
                        <circle cx="10" cy="15" r="10" fill="green" />
                        Sorry, your browser does not support inline SVG.
                    </svg>
                </button>
                <button className='width-palette' onClick={colorToYlw}>
                    <svg height="25px" width="20px">
                        <circle cx="10" cy="15" r="10" fill="yellow" />
                        Sorry, your browser does not support inline SVG.
                    </svg>
                </button>
            </div>
            <div className='pen-palette'>
                <h4>Pen Size</h4>
                <button className='width-palette' onClick={sizeTo3}>
                    <svg height="25px" width="20px">
                        <circle cx="10" cy="15" r="3" fill="black" />
                        Sorry, your browser does not support inline SVG.
                    </svg>
                </button>
                <button className='width-palette' onClick={sizeTo5}>
                    <svg height="25px" width="20px">
                        <circle cx="10" cy="15" r="5" fill="black" />
                        Sorry, your browser does not support inline SVG.
                    </svg>
                </button>
                <button className='width-palette' onClick={sizeTo7}>
                    <svg height="25px" width="20px">
                        <circle cx="10" cy="15" r="7" fill="black" />
                        Sorry, your browser does not support inline SVG.
                    </svg>
                </button>
                <button className='width-palette' onClick={sizeTo10}>
                    <svg height="25px" width="20px">
                        <circle cx="10" cy="15" r="10" fill="black" />
                        Sorry, your browser does not support inline SVG.
                    </svg>
                </button>
            </div>
        </div>

    )
}

export default PaletteDisplay;