import React from 'react';
export default class Urlfile extends React.Component {
  openmodal = () =>{
    window.open("https://pdfast.run.goorm.io/build/generic/web/local_viewer.html", '_blank');
       
  }
  render() {
    return (
        <div className="urlfileframe">               
            <button type="button" id="webButton" className="btn btn-default" 
            onClick={() => {    
              document.getElementsByClassName("popup_back")[0].style.display = "block";

              document.getElementById("innerfileframe").classList.toggle('innerfileframe', false);
              document.getElementById("innerfileframe").classList.toggle('innerfileframe_folder', false);              
              document.getElementById("innerfileframe").classList.toggle('innerfileframe_web', true);
                                          
              document.getElementById("fileFrame").classList.toggle('fileframe_folder', false);   
              document.getElementById("fileFrame").classList.toggle('fileframe',false);              
              document.getElementById("fileFrame").classList.toggle('fileframe_web', true);   

              if(document.getElementById("webButton").classList.contains('webButton_anim')){
                document.getElementById("webButton").classList.toggle('webButton_anim', false);
                document.getElementById("webButton").classList.toggle('webButton_anim2', true);
              }else{
                document.getElementById("webButton").classList.toggle('webButton_anim2', false);
                document.getElementById("webButton").classList.toggle('webButton_anim', true);
              }
              //전구켜기
              // if(document.getElementsByClassName("lamp")[0].getAttribute("src") ==  "img/lamp_off2.png"){
              //   document.getElementsByClassName("lamp")[0].setAttribute("src", "img/lamp_on.png");
    
              //   document.getElementById("lamp_back").classList.toggle("lamp_back_off", false);
              //   document.getElementById("lamp_back").classList.toggle("lamp_back", true);         
              // }
              // ========

              document.getElementById("file_title").textContent = "웹 PDF 변환 중...";
            }}> </button>     
            <button type="button" id="localButton" className="btn btn-default" onClick={() => {      
              {this.openmodal()}        
              document.getElementById("innerfileframe").classList.toggle('innerfileframe', false);
              document.getElementById("innerfileframe").classList.toggle('innerfileframe_web', false);            
              document.getElementById("innerfileframe").classList.toggle('innerfileframe_folder', true);
                            
              document.getElementById("fileFrame").classList.toggle('fileframe', false);
              document.getElementById("fileFrame").classList.toggle('fileframe_web', false);              
              document.getElementById("fileFrame").classList.toggle('fileframe_folder', true);

              if(document.getElementById("localButton").classList.contains('localButton_anim')){
                document.getElementById("localButton").classList.toggle('localButton_anim', false);
                document.getElementById("localButton").classList.toggle('localButton_anim2', true);
              }else{
                document.getElementById("localButton").classList.toggle('localButton_anim2', false);
                document.getElementById("localButton").classList.toggle('localButton_anim', true);
              }
              //전구켜기
              // if(document.getElementsByClassName("lamp")[0].getAttribute("src") ==  "img/lamp_off2.png"){
              //   document.getElementsByClassName("lamp")[0].setAttribute("src", "img/lamp_on.png");
    
              //   document.getElementById("lamp_back").classList.toggle("lamp_back_off", false);
              //   document.getElementById("lamp_back").classList.toggle("lamp_back", true);         
              // }

                document.getElementById("file_title").textContent = "로컬 PDF 변환 중...";
            }}>
            </button>
        </div>
    );
  }
}

