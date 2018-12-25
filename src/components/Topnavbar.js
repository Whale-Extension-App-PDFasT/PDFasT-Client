import React from 'react';
import {Navbar, NavbarBrand } from 'reactstrap';
import Loading from './Loading';
import Bubble_success from './Bubble_success';
import Bubble_fail from './Bubble_fail';
import HoverLamp from './HoverLamp';

// import * as $ from 'jquery';

// window.jQuery = window.$ = $;

export default class Topnavbar extends React.Component {
  constructor(){
    super();
  }

  render() {
    var moment = require('moment');
    moment.lang('ko', {
      
      monthsShort:["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],
      weekdays: ["일요일","월요일","화요일","수요일","목요일","금요일","토요일"],
      weekdaysShort: ["일","월","화","수","목","금","토"],
  });
    var time=moment();
    var time2=time.format();    

    return (
      <div id="topNavDiv" width="100%">
        <Loading />
        <Bubble_success />
        <Bubble_fail />
        <HoverLamp />
              
        {/* <a id="title"><img src="img/pdfast.png" id="logo" /> PDFasT</a> */}
        <a id="title">PDFasT</a>

        <span id="lamp_light" className="lamp_light"></span>
        <span id="lamp_back" className="lamp_back_off"></span>
        <img className="lamp" src="img/lamp_on.png" />        
     </div>
    );
  }
}