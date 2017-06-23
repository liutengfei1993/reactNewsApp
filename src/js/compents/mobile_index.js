import React from "react";
import Mobileheader from "./mobile_header";
import Mobilefooter from "./mobile_footer";
import MobileList from "./mobile_list";
import { Tabs, Radio,Carousel } from 'antd';
const TabPane = Tabs.TabPane;

export default class Mobileindex extends React.Component{
  render() {
    const settings = {
      dots: true,
      speed: 500,
      slidesToShow: 1,
      autoplay: true
    }
    return(
        <div>
          <Mobileheader></Mobileheader>
          <div class="">
            <Carousel {...settings}>
              <div><img src="./src/images/carousel_1.jpg" width="100%"/></div>
              <div><img src="./src/images/carousel_2.jpg" width="100%"/></div>
              <div><img src="./src/images/carousel_3.jpg" width="100%"/></div>
              <div><img src="./src/images/carousel_4.jpg" width="100%"/></div>
            </Carousel>
          </div>
          <Tabs>
            <TabPane tab="头条" key="1">
              <MobileList count={20} type="top"/>
            </TabPane>
            <TabPane tab="社会" key="2">
              <MobileList count={20} type="shehui"/>
            </TabPane>
            <TabPane tab="国内" key="3">
              <MobileList count={20} type="guonei"/>
            </TabPane>
            <TabPane tab="国际" key="4">
              <MobileList count={20} type="guoji"/>
            </TabPane>
            <TabPane tab="娱乐" key="5">
              <MobileList count={20} type="yule"/>
            </TabPane>
          </Tabs>
          <Mobilefooter></Mobilefooter>
        </div>
    )
  }
}
