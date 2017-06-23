import React from "react";
import { Row,Col,BackTop } from 'antd';
import Mobileheader from "./mobile_header";
import Mobilefooter from "./mobile_footer";
import CommonComments from "./common_comments";

export default class MobileNewsDetails extends React.Component{
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
      <div id="mobileDetailsContainer">
        <Mobileheader></Mobileheader>
        <div class="ucmobilelist">
          <Row>
            <Col span={24} class="container">
              <div class="articleContainer" dangerouslySetInnerHTML={this.createMarkUp()}>

              </div>
              <CommonComments uniquekey={this.props.params.uniquekey}/>
            </Col>
          </Row>
          <Mobilefooter></Mobilefooter>
          <BackTop></BackTop>
        </div>
      </div>
    )
  }

}
