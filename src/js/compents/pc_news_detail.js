import React from "react";
import { Row,Col,BackTop } from 'antd';
import Pcheader from "./pc_header";
import Pcfooter from "./pc_footer";
import PcNewsImageBlock from "./pc_news_image_block";
import CommonComments from "./common_comments";

export default class PcNewsDetails extends React.Component{
  constructor() {
    super();
    this.state = {
      newsItem: ""
    }
  }
  createMarkUp() {
    return {__html:this.state.newsItem.pagecontent}
  }
  componentDidMount() {
    var myFetchOptions = {
      method:"GET"
    };
    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey="+this.props.params.uniquekey,myFetchOptions)
    .then(response=>response.json())
    .then(json=>{
      this.setState({newsItem: json});
      document.title = this.state.newsItem.title + "-React 驱动的新闻平台"
    });
  }
  render() {
    return (
      <div>
        <Pcheader></Pcheader>
        <Row>
          <Col span={2}></Col>
          <Col span={14} class="container">
            <div class="articleContainer" dangerouslySetInnerHTML={this.createMarkUp()}>

            </div>
            <CommonComments uniquekey={this.props.params.uniquekey}/>
          </Col>
          <Col span={6}>
            <PcNewsImageBlock count={40} type="yule" width="100%" cardTitle="娱乐新闻" imageWidth="136px"/>
          </Col>
          <Col span={2}></Col>
        </Row>
        <Pcfooter></Pcfooter>
        <BackTop></BackTop>
      </div>
    )
  }

}
