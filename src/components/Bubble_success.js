import React from 'react';

export default class Bubble_success extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // document.getElementsByClassName("lamp")[0].setAttribute("src", "img/lamp_on.png");
    
        // document.getElementById("lamp_back").classList.toggle("lamp_back_off", false);
        // document.getElementById("lamp_back").classList.toggle("lamp_back", true);
    }

    render() {
        return (
            <div className="bubble_success">변환 성공!</div>
        );
    }
}

//export default Bubble_success