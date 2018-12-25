import React from 'react';

export default class Popup_favorite extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="popup_favorite_back modal show">
                <div className="popup_favorite">
                    <div className="pop_favorite_header">
                        <span>즐겨찾기</span> 추가할 탭 목록
                        <img src="img/refresh.png" id="favorite_refresh" />
                    </div>

                    <div className="pop_favorite_body">
                        <ul>
                            <li>PDF를 불러오지 못했습니다.</li>                  
                        </ul>
                    </div>

                    <div className="pop_favorite_footer">
                        <button type="button" id="pop_favoriteConvert" className="btn btn-default">추가</button>
                        <button type="button" id="pop_favoriteCancel" className="btn btn-default"
                        onClick={() => {
                            document.getElementsByClassName("popup_favorite_back")[0].style.display = "none";
                        }}
                        >취소</button>
                    </div>
                </div>                
            </div>
        );
    }
}

// export default Popup_favorite