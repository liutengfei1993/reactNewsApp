import React from "react";
import { Tabs,Radio,Row,Col,Carousel } from 'antd';
const TabPane = Tabs.TabPane;
import PcNewsBlock from "./pc_news_blocks";
import Pcproduct from "./pc_product";
import PcNewsImageBlock from "./pc_news_image_block";
export default class PcNewsHeader extends React.Component{
  render() {
    const settings = {
      dots: true,
      speed: 500,
      slidesToShow: 1,
      autoplay: true
    }
    return (
      <div>
        <Row>
          <Col span={2}></Col>
          <Col span={20} class="container">
            <div class="leftContainer">
                <div class="carousel">
                  <Carousel {...settings}>
                    <div><img src="./src/images/carousel_1.jpg"/></div>
                    <div><img src="./src/images/carousel_2.jpg"/></div>
                    <div><img src="./src/images/carousel_3.jpg"/></div>
                    <div><img src="./src/images/carousel_4.jpg"/></div>
                  </Carousel>
                </div>
                <PcNewsImageBlock count={6} type="guoji" width="400px" cardTitle="国际头条" imageWidth="112px"></PcNewsImageBlock>
            </div>
            <Tabs class="tabs_news">
              <TabPane tab="新闻" key="1">
                <PcNewsBlock count={22} type="top" width="100%" bordered="false"></PcNewsBlock>
              </TabPane>
              <TabPane tab="国际" key="2">
                <PcNewsBlock count={22} type="guoji" width="100%" bordered="false"></PcNewsBlock>
              </TabPane>
            </Tabs>
            <Tabs class="tabs_product">
              <TabPane tab="ReactNews 产品" key="1">
                <Pcproduct/>
              </TabPane>
            </Tabs>
            <div>
              <PcNewsImageBlock count={8} type="guonei" width="100%" cardTitle="国内新闻" imageWidth="132px"></PcNewsImageBlock>
              <PcNewsImageBlock count={16} type="yule" width="100%" cardTitle="娱乐新闻" imageWidth="142px"></PcNewsImageBlock>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}
