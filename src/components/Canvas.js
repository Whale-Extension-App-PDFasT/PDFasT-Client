import React from 'react';

export default class Canvas extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const canvas = this.refs.canvas;
        const ctx = canvas.getContext("2d");
        this.setState({ ctx : ctx});
        //requestAnimationFrame( () => {this.update()});
    }
    
    update(){
        const ctx = this.state.ctx;
        
        //animation

        requestAnimationFrame( () => {this.update()});
    }

    render() {
        return (
            <canvas ref="canvas" className="backCanvas" />            
        );
    }
}

//export default Canvas