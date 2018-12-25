import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import ReactDOM from 'react-dom';
export default class Funframe extends React.Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1',
      attr:[],
      data: null
    };
  }
  opentab = (url) =>{
    var form = document.createElement("form");
    form.setAttribute("method","post");
    form.setAttribute("target","_blank");
    form.setAttribute("action","https://pdfast.run.goorm.io/web.php");
    document.body.appendChild(form);

    var insert = document.createElement("input");
    insert.setAttribute("type","hidden");
    insert.setAttribute("name","test");
    // console.log(url);
    insert.setAttribute("value", "https://cors-anywhere.herokuapp.com/" + url);
    form.appendChild(insert);

    form.submit();
       
  }
  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  componentDidMount() {
    const recent_li = this.refs.recent_li;
  }
  render() {

    let data = [...this.props.recentlists];
    if(!data){
      return ( <div  className="col-md-12 funcframe">
      {/* =====plus */}
      <img src="img/plus.png" 
      onClick={()=>{
        // console.log('Click');
        // document.getElementsByClassName("popup_favorite_back")[0].style.display = "block";      
      }}
      />
      {/* ===== */}
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: this.state.activeTab === '1' })}
            onClick={() =>{ 
              this.toggle('1'); 
              document.querySelector('img[src="img/plus.png"]').style.display = "none";
            }}
          >
            Recent
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: this.state.activeTab === '2' })}
            onClick={() => { 
              this.toggle('2'); 
              document.querySelector('img[src="img/plus.png"]').style.display = "block";
            }}
          >
            Favorite
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={this.state.activeTab}>
        <TabPane tabId="1" id="recent">
          <ul id="recent_ul">
  
         
          </ul>
        </TabPane>
        <TabPane tabId="2" id="favorite">
          <ul id="favorite_ul">
            <li 
              ref = {ref => {
                this.li = ref;
              }}>
              <span>
                <img class="li_bulb" src="img/li_bulb_on.png"
                  onClick={() => {
                    // if(document.getElementsByClassName("li_bulb")[0].getAttribute("src") ==  "img/li_bulb_on.png"){
                    //   document.getElementsByClassName("li_bulb")[0].setAttribute("src", "img/li_bulb.png");
                    // }else{
                    //   document.getElementsByClassName("li_bulb")[0].setAttribute("src", "img/li_bulb_on.png");
                    // }
                  }}
                />
                <a>PDF 이름2PDF 이름2PDF 이름2PDF 이름1PDF 이름1PDF 이름1PDF 이름1PDF 이름1PDF 이름1</a>
                <img                   
                onClick={() => {
                  // console.log( this.li.focus() );
                  this.li.remove();
                }}
                src="img/li_cancel.png"/>
              </span>
            </li>
            
          </ul>
        </TabPane>
      </TabContent>
    </div>);
    }
    else{
    return (
      
      <div  className="col-md-12 funcframe">
        {/* =====plus */}
        <img src="img/plus.png" 
        onClick={()=>{
          // document.getElementsByClassName("popup_favorite_back")[0].style.display = "block";
          
        }}
        />
        {/* ===== */}
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() =>{ 
                this.toggle('1'); 
                document.querySelector('img[src="img/plus.png"]').style.display = "none";
              }}
            >
              Recent
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { 
                this.toggle('2'); 
                document.querySelector('img[src="img/plus.png"]').style.display = "block";
              }}
            >
              Favorite
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1" id="recent">
            <ul>
    
              {data.map((val,idx) => {
                let table=[];
                let tempdata = val;                
                table.push( <li 
                  ref="recent_li"         
                  >
                    <span>
                      <img class="li_bulb" src="img/li_bulb_on.png"
                  onClick={() => {
                    // if(document.getElementsByClassName("li_bulb")[0].getAttribute("src") ==  "img/li_bulb_on.png"){
                    //   document.getElementsByClassName("li_bulb")[0].setAttribute("src", "img/li_bulb.png");
                    // }else{
                    //   document.getElementsByClassName("li_bulb")[0].setAttribute("src", "img/li_bulb_on.png");
                    // }
                  }}
                  />
                      <a >{val['text']}</a>
                      <img                   
                      onClick={() => {
                        this.props.deletelist(tempdata);
                        // console.log(this.refs.recent_li);     
                        // this.refs.recent_li.remove();                       
                      }}
                      src="img/li_cancel.png"/>
                    </span>
                  </li>);
                return table

    })}
            </ul>
          </TabPane>
          <TabPane tabId="2" id="favorite">
            <ul id="favorite_ul">
              <li 
                ref = {ref => {
                  this.li = ref;
                }}>
                <span>
                  <img class="li_bulb" src="img/li_bulb_on.png"
                    onClick={() => {
                      // if(document.getElementsByClassName("li_bulb")[0].getAttribute("src") ==  "img/li_bulb_on.png"){
                      //   document.getElementsByClassName("li_bulb")[0].setAttribute("src", "img/li_bulb.png");
                      // }else{
                      //   document.getElementsByClassName("li_bulb")[0].setAttribute("src", "img/li_bulb_on.png");
                      // }
                    }}
                  />
                  <a>PDF 이름2PDF 이름2PDF 이름2PDF 이름1PDF 이름1PDF 이름1PDF 이름1PDF 이름1PDF 이름1</a>
                  <img                   
                  onClick={() => {
                    // console.log( this.li.focus() );
                    this.li.remove();
                  }}
                  src="img/li_cancel.png"/>
                </span>
              </li>
              
            </ul>
          </TabPane>
        </TabContent>
      </div>
    );}
  }
}