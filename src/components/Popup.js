import React from 'react';

export default class Popup extends React.Component {
    constructor(props) {
        super(props);
    }

    

    render() {
        return (
            <div className="popup_back modal show">
                <div className="popup" id="popuphide">
                    <div className="pop_header">
                        변환할 탭 목록
                        <img src="img/refresh.png" id="refresh" />
                    </div>

                    <div className="pop_body">
                        <ul>
                            <li>탭 이름1탭 이름1탭 이름1탭 이름1탭 이름1탭 이름1탭 이름1탭 이름1</li>
                            <li>탭 이름1</li>
                            <li>탭 이름1</li>
                            <li>탭 이름1</li>
                            <li>탭 이름1</li>
                            <li>탭 이름1</li>
                            <li>탭 이름1</li>
                            <li>탭 이름1</li>
                            <li>탭 이름1</li>
                            <li>탭 이름1</li>
                            <li>탭 이름124</li>                       
                        </ul>
                    </div>

                    <div className="pop_footer">
                        <button type="button" id="popConvert" className="btn btn-default" onClick={this.props.handleClick}>변환</button>
                        <button type="button" id="popCancel" className="btn btn-default"
                        onClick={() => {
                            document.getElementsByClassName("popup_back")[0].style.display = "none";
                        }}
                        >취소</button>
                    </div>
                </div>                
            </div>
        );
    }
}

// export default Popup