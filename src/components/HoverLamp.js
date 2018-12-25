import React from 'react';

export default class HoverLamp extends React.Component {
    constructor(props) {
        super(props);
    }
    closeAlltabs = () =>{
        // eslint-disable-next-line
        chrome.tabs.getAllInWindow(null, function(tabs){
            const str = "pdfast.run.goorm.io"; 
            
            for (var i = 0; i < tabs.length; i++) {
                const url = tabs[i].url;
                const id = tabs[i].id;
                const num = url.search(str);
                if(num != -1){
                    // eslint-disable-next-line
                    chrome.tabs.remove(id);
                }
                // console.log(tabs[i].id);
                // console.log(tabs);
                // console.log(tabs[i].url);                       
            }
        });
    }
    componentDidMount(){
        this.closeAlltabs;
    }
    render() {
        return (
            <div className="hoverLamp2_back" id="hoverLamp_back">
                <div className="hoverLamp2" id="hoverLamp"
                onClick={() => {
                   
                    // 꺼져있으면
                    if(document.getElementsByClassName("lamp")[0].getAttribute("src") ==  "img/lamp_off2.png"){
                    //   document.getElementsByClassName("lamp")[0].setAttribute("src", "img/lamp_on.png");
          
                    //   document.getElementById("lamp_back").classList.toggle("lamp_back_off", false);
                    //   document.getElementById("lamp_back").classList.toggle("lamp_back2_off", true);
                      
                    //   document.getElementById("hoverLamp").classList.toggle("hoverLamp2", true);
                    //   document.getElementById("hoverLamp").classList.toggle("hoverLamp", false);
                    //   document.getElementById("hoverLamp_back").classList.toggle("hoverLamp2_back", true);
                    //   document.getElementById("hoverLamp_back").classList.toggle("hoverLamp_back", false);
                      

                    }else{
                        {this.closeAlltabs();}
                    //   document.getElementsByClassName("lamp")[0].setAttribute("src", "img/lamp_off2.png");
          
                    //   document.getElementById("lamp_back").classList.toggle("lamp_back", false);
                    //   document.getElementById("lamp_back").classList.toggle("lamp_back_off", true);
          
                      //+
                    //   document.getElementById("hoverLamp").classList.toggle("hoverLamp2", false);
                    //   document.getElementById("hoverLamp").classList.toggle("hoverLamp", true);
                    //   document.getElementById("hoverLamp_back").classList.toggle("hoverLamp2_back", false);
                    //   document.getElementById("hoverLamp_back").classList.toggle("hoverLamp_back", true);
                      //end

                      document.getElementById("fileFrame").classList.toggle('fileframe_folder', false);
                      document.getElementById("fileFrame").classList.toggle('fileframe_web', false);
                      document.getElementById("fileFrame").classList.toggle('fileframe',true);                                    
                      document.getElementById("innerfileframe").classList.toggle('innerfileframe_folder', false);              
                      document.getElementById("innerfileframe").classList.toggle('innerfileframe_web', false);
                      document.getElementById("innerfileframe").classList.toggle('innerfileframe', true);
          
                      document.getElementById("file_title").textContent = "하단에 아이콘을 클릭해보세요!";
                    }
                  }}
                ></div>
                <span>변환된 모든탭<br/>종료</span>
            </div>
        );
    }
}

//export default HoverLamp