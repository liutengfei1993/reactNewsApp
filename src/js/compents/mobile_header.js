import React from "react";
import ReactDom from "react-dom";
import {Router, Route, Link, browserHistory} from 'react-router';
import Login from "./login";
import Register from "./register";
import {Row, Col} from "antd";
import {
  Menu,
  Icon,
  Tabs,
  message,
  Form,
  Input,
  Modal,
  Button,
  CheckBox
} from 'antd';
const SubMenu = Menu.SubMenu;
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;
const MenuItemGroup = Menu.ItemGroup;

class Mobileheader extends React.Component{
  constructor() {
    super();
    this.state = {
      current: 'top',
      modalVisible: false,
      action: "login",
      hasLogined: false,
      userNickName: "",
      userId: 0
    }
  }

  setModalVisible(value) {
    this.setState({modalVisible: value});
  }

  handleClick(e) {
    console.info("this",this.setState)
    if (e.key == 'register') {
      this.setState({current: 'register'});
      this.setModalVisible(true);
    } else {
      this.setState({current: e.key});
    }
  }

  handleSubmit(e) {
    //提交页面
    e.preventDefault();
    var myFetchOptions = {
      method: "GET"
    }

  }
  login() {
    this.setModalVisible(true)
  }
  render() {
    const  {getFieldProps} = this.props.form;
    const userShow = localStorage.userId?
    <Link to={`/usercenter`}>
      <Icon type="inbox"/>
    </Link>
    :
    <Icon type="setting" onClick={this.login.bind(this)} />
    return(
        <div id="mobileheader">
          <header>
            <img src="./src/images/logo.ico" alt="logo" />
            <span>ReactNews</span>
            {userShow}
          </header>
          <Modal title="用户中心" wrapClassName="vertical-center-modal"
            visible={this.state.modalVisible}
            onOk={()=>this.setModalVisible(false)}
            onCancel={()=>this.setModalVisible(false)} okText="关闭">
            <Tabs type="card">
              <TabPane tab="注册" key="1">
                <Login setModalVisible={this
                  .setModalVisible
                  .bind(this)}></Login>
              </TabPane>
              <TabPane tab="登录" key="2">
                <Register></Register>
              </TabPane>
            </Tabs>
          </Modal>
        </div>

    )
  }
}
export default Mobileheader = Form.create({})(Mobileheader);
