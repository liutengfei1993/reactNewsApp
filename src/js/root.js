/*
* @Author: liutengfei
* @Date:   2017-05-15 14:54:08
* @Last Modified by:   liutengfei
* @Last Modified time: 2017-05-16 11:00:00
*/

import React from "react";
import ReactDom from "react-dom";
import MediaQuery from "react-responsive";
import { render } from 'react-dom';
import { Router,Route,hashHistory } from 'react-router';
import { Button } from 'antd';
import Pcindex from "./compents/pc_index";
import Mobileindex from "./compents/mobile_index";
import PcNewsDetails from "./compents/pc_news_detail";
import MobileNewsDetails from "./compents/mobile_news_detail";
import PcUsercenter from "./compents/pc_usercenter";
import MobileUsercenter from "./compents/mobile_usercenter";

import 'antd/dist/antd.css';
render((
  <div>
    <MediaQuery query='(min-device-width: 1224px)'>
      <Router history={hashHistory}>
        <Route path="/" component={Pcindex}></Route>
        <Route path="/details/:uniquekey" component={PcNewsDetails}></Route>
        <Route path="/usercenter" component={PcUsercenter}></Route>
      </Router>
    </MediaQuery>
    <MediaQuery query='(max-device-width: 1224px)'>
      <Router history={hashHistory}>
        <Route path="/" component={Mobileindex}></Route>
        <Route path="/details/:uniquekey" component={MobileNewsDetails}></Route>
        <Route path="/usercenter" component={MobileUsercenter}></Route>
      </Router>
    </MediaQuery>
  </div>
), document.getElementById('mainContainer'))
