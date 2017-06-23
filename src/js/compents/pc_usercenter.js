import React from "react";
import ReactDom from "react-dom";
import {Router, Route, Link, browserHistory} from 'react-router';
import Login from "./login";
import Register from "./register";
import Pcheader from "./pc_header";
import Pcfooter from "./pc_footer";
import {Row, Col,Card} from "antd";
import {
  Menu,
  Icon,
  Tabs,
  message,
  Form,
  Input,
  Modal,
  Button,
  CheckBox,
  notification
} from 'antd';
const SubMenu = Menu.SubMenu;
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;
const MenuItemGroup = Menu.ItemGroup;
class PcUsercenter extends React.Component {
    constructor() {
      super();
      this.state = {
          usercollection:"",
          usercomments:""
      };
    };
    componentDidMount() {
      var myFetchoptions = {
          method: 'GET'
      };
      fetch('http://newsapi.gugujiankong.com/Handler.ashx?action=getuc&userid=184', myFetchoptions)
      .then(response => response.json())
      .then(json => {
          this.setState({usercollection: json});
      })
      .catch(error => {
          console.log(error);
      });

      fetch('http://newsapi.gugujiankong.com/Handler.ashx?action=getusercomments&userid=184', myFetchoptions)
      .then(response => response.json())
      .then(json => {
          this.setState({usercomments: json});
      })
      .catch(error => {
          console.log(error);
      });
    }
    render() {
      const {usercollection} = this.state;
      const usercollectionList = usercollection.length ?
      usercollection.map((uc,index)=>(
        <Card key={index} title={uc.uniquekey} extra={<a href={`/#/details/${uc.uniquekey}`}>查看</a>}>
          <p>{uc.Title}</p>
        </Card>
      ))
      :
      '还没有收藏，去首页看看吧';
      return (
        <div>
          <Pcheader/>
          <Row>
            <Col span={2}></Col>
            <Col span={19}>
              <Tabs>
                <TabPane tab="我的收藏列表" key="1">
                  <div class="comment">
                    <Row>
                      <Col span={24}>
                        {usercollectionList}
                      </Col>
                    </Row>
                  </div>
                </TabPane>
                <TabPane tab="我的评论列表" key="2">
                </TabPane>
                <TabPane tab="头像设置" key="3">
                </TabPane>
              </Tabs>
            </Col>
            <Col span={2}></Col>
          </Row>
           <Pcfooter/>
          </div>
      )
    }
}

export default PcUsercenter = Form.create({})(PcUsercenter);
