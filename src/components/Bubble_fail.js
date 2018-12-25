import React from 'react';

export default class Bubble_fail extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // setTimeout(()=>{document.getElementsByClassName("lamp")[0].setAttribute("src", "img/lamp_fail.png");}, 250);                
    }

    render() {
        return (
            <div className="bubble_fail">변환 실패!</div>
        );
    }
}

//export default Bubble_fail