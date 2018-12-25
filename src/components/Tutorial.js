import React from 'react';

export default class Tutorial extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="tutorial" 
            onClick={()=>{
                document.getElementById('tutorial').style.display = 'none';
                document.getElementById('tutorial_back').style.display = 'none';
            }}
            >
                <div id="info_help">도움말</div>
                {/* <div id="info_home"></div> */}
                <img src="img/home_btn.png"/>
                <div id="info_home_txt">새로고침 & 도움말<br /> 버튼이에요</div>
                {/* <div id="info_bulb"></div> */}
                <img src="img/bulb_btn.png"/>
                <div id="info_bulb_txt">변환된 탭들을 모두<br />닫을 수 있는 버튼이에요</div>
                {/* <div id="info_title"></div> */}
                <img src="img/title_btn.png"/>
                <div id="info_title_txt">현재 보고 있는 PDF이름</div>
                {/* <div id="info_btn"></div> */}
                <img src="img/web_btn.png"/>
                <div id="info_btn_txt">WEB에 있는<br /> PDF를 번환하는 버튼</div>
                {/* <div id="info_btn2"></div> */}
                <img src="img/local_btn.png"/>
                <div id="info_btn2_txt">컴퓨터에 있는<br /> PDF를 번환하는 버튼</div>
                {/* <div id="info_tabs"></div> */}
                <img src="img/recent_btn.png"/>
                <div id="info_tabs_txt">최근에 변환된<br />PDF 리스트</div>
                {/* <div id="info_tabs2"></div> */}
                <img src="img/fav_btn.png"/>
                <div id="info_tabs2_txt">주로 찾는 <br />PDF 리스트</div>
                <div id="info_tabs3_txt">최근목록과 즐겨찾기 리스트는 WEB-PDF만 저장됩니다. <br />컴퓨터에 있는건 권한문제 때문에 할 수 없어요 ㅠ.ㅠ</div>
                {/* <div id="info_credit"></div> */}
                <img src="img/credit_btn.png"/>
                <div id="info_credit_txt">저작권</div>                
            </div>            
        );
    }
}

//export default Tutorial