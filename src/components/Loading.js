import React from 'react';

export default class Loading extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="loading_back">
                <div className="loading"></div>
                <span>변환 중...</span>
            </div>
        );
    }
}

//export default Loading