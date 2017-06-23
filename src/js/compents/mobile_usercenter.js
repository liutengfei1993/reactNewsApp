import React from "react";
import ReactDom from "react-dom";
import {Router, Route, Link, browserHistory} from 'react-router';
import Login from "./login";
import Register from "./register";
import Mobileheader from "./mobile_header";
import Mobilefooter from "./mobile_footer";
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
  notification,
  Upload
} from 'antd';
const SubMenu = Menu.SubMenu;
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;
const MenuItemGroup = Menu.ItemGroup;
class MobileUsercenter extends React.Component {
    constructor() {
      super();
      this.state = {
         previewVisible: false,
         previewImage: '',
         fileList: [{
           uid: -1,
           name: 'xxx.png',
           status: 'done',
           url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
         }],
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
        console.info("后台返回的评论",json)
          this.setState({usercomments: json});
      })
      .catch(error => {
          console.log(error);
      });
    }
    handleSubmit(e) {

    }
    addUserCollection() {

    }
    render() {
      const { previewVisible, previewImage, fileList } = this.state;
      const uploadButton = (
         <div>
           <Icon type="plus" />
           <div className="ant-upload-text">Upload</div>
         </div>
       );
       const {usercollection} = this.state;
       const usercollectionList = usercollection.length ?
       usercollection.map((uc,index)=>(
         <Card key={index} title={uc.uniquekey} extra={<a href={`/#/details/${uc.uniquekey}`}>查看</a>}>
           <p>{uc.Title}</p>
         </Card>
       ))
       :
       '还没有收藏，去首页看看吧';
       const {usercomments} = this.state;
       const usercommentsList = usercomments.length ?
       usercomments.map((uc,index)=>(
         <Card key={index} title={uc.uniquekey} extra={<a href={`/#/details/${uc.uniquekey}`}>查看</a>}>
           <p>{uc.Comments}</p>
         </Card>
       ))
       :
       '还没有收藏，去首页看看吧';
      return (
        <div>
          <Mobileheader/>
          <Row>
            <Col span={24}>
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
                  <div class="comment">
                    <Row>
                      <Col span={24}>
                        {usercommentsList}
                      </Col>
                    </Row>
                  </div>
                </TabPane>
                <TabPane tab="头像设置" key="3">
                  <div className="clearfix">
                   <Upload
                     action="//jsonplaceholder.typicode.com/posts/"
                     listType="picture-card"
                     fileList={fileList}
                     onPreview={this.handlePreview}
                     onChange={this.handleChange}
                   >
                     {fileList.length >= 3 ? null : uploadButton}
                   </Upload>
                   <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                     <img alt="example" style={{ width: '100%' }} src={previewImage} />
                   </Modal>
                 </div>
                </TabPane>
              </Tabs>
            </Col>
          </Row>

           <Mobilefooter/>
          </div>
      )
    }
}

export default MobileUsercenter = Form.create({})(MobileUsercenter);
