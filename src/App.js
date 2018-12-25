import React, { Component, Fragment } from 'react';
import Topnavbar from './components/Topnavbar';
import Fileframe from './components/Fileframe';
import Urlfile from './components/Urlfile';
import Funcframe from './components/Funcframe';
import Canvas from './components/Canvas';
import Popup from './components/Popup';
import Credit from './components/Credit';
import Popup_favorite from './components/Popup_favorite';
import 'whatwg-fetch';
import Tutorial from './components/Tutorial';

class App extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      recentlists: [],
    };
    this.alertOptions = {
      offset: 14,
      position: 'top right',
      theme: 'dark',
      time: 5000,
      transition: 'scale'
    };
  
  }
  componentDidMount(){
    this.recentlist()
  }
  handleClick = () => {
    
    
    const dataText = document.getElementsByClassName("pop_body_li_click")[0].textContent;
    // eslint-disable-next-line
    const dataUrl = $(".pop_body_li_click").attr("data-url");
    if (!dataUrl) {
        // 데이터 선택 안 됐을 때
        return;
    }
    const recentList = [...this.state.recentlists];
    const datatotal={'url': dataUrl, "text": dataText}
    recentList.push(datatotal);
    let data = JSON.stringify(recentList);
    localStorage.setItem(1,data);

    this.setState({
      recentlists: recentList,
    });
    
    // console.log(dataUrl);
}
  recentlist() {
    let recent = localStorage.getItem(1);
    if (!recent){
      return
    }
    this.setState({recentlists:JSON.parse(recent)});

    // console.log(this.state.recentlists);
   
  }
  deletelist = (val) => {
    const recentList = [...this.state.recentlists];
    const idx = recentList.findIndex(u => u === val);

    recentList.splice(idx, 1); // 삭제

    localStorage.setItem(1, JSON.stringify(recentList)); // 로컬 스토리지 저장

    this.setState({
      recentlists: recentList,
    });
  }
  render() {  
      return (        
        <Fragment>
          <Canvas />          
          
          <div id="popup_youtube"><span>PDFasT 사용법 영상</span><span>▶</span></div>
          <Popup recentlists ={this.state.recentlists} handleClick={this.handleClick}/> 
          <Popup_favorite />           
          <div className="col-md-12 mainframe" id="mainFrame">
            <div id="tutorial_back"></div>
            <Tutorial />
            <img src="img/question.png" id="question" 
            onClick={()=>{
              document.getElementById('tutorial_back').style.display = 'block';
              document.getElementById('tutorial').style.display = 'block';
            }}
            />
            <img src="img/home.png" id="home" />      
            <img src="img/pdfast6.png" id="logo" />     
            <div className="col-md-12 topnav"><Topnavbar /></div>
            <div className="col-md-12 fileframe" id="fileFrame"><Fileframe /></div>
            <div className="col-md-12 urlfileframe"><Urlfile recentlists ={this.state.recentlists}/></div>
            <Funcframe recentlists ={this.state.recentlists} deletelist={this.deletelist} />
          </div>

          <footer>
            <span
            id="footer_str"
            onClick={() => {
              document.getElementsByClassName("credit_back")[0].style.display = "block";
            }}
            >Credit</span> 
          </footer>

          <Credit />
        </Fragment>        
                
      );
  }
}

export default App;