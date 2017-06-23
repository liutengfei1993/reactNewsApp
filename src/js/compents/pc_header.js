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
class Pcheader extends React.Component {
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

  componentWillMount() {
    const userInfo = localStorage.getItem('userInfo') || '';
    if (userInfo != '') {
      this.setState({
        hasLogined: true,
        userNickName: JSON.parse(userInfo).userName,
        userId: localStorage.userId
      });
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
    let myFetchOptions = {
      method: "GET"
    }
  }

  setSet(obj) {
    this.setState(obj);
  }

  logout() {
    localStorage.userInfo = '';
    this.setState({hasLogined: false});
  }

  render() {
    //用于接收页面的一些参数
      // const  {getFieldProps} = this.props.form;
      const userShow = this.state.hasLogined
      ? <Menu.Item key="logout" class="register" >
          <Button type="primary" htmlType="button">{this.state.userNickName}</Button>&nbsp;&nbsp;
          <Link target="_blank" to={`/usercenter`}>
            <Button type="dashed" htmlType="button">个人中心</Button>
          </Link>&nbsp;&nbsp;
          <Button type="dashed" htmlType="button" onClick={this.logout.bind(this)}>退出</Button>
        </Menu.Item>
      : <Menu.Item key="register" class="register">
        <Icon type="appstore"></Icon>注册/登录
      </Menu.Item>;
    return (
      <header class="pc_header">
        <Row>
          <Col span={2}></Col>
          <Col span={3}>
            <a href="/" class="logo">
              <img src="./src/images/logo.ico"/>
              <span>ReactNews</span>
            </a>
          </Col>
          <Col span={16}>
            <Menu mode="horizontal" selectedKeys={[this.state.current]}
              onClick={this.handleClick.bind(this)}>
              <Menu.Item key="top">
                <Icon type="appstore"/>头条
              </Menu.Item>
              <Menu.Item key="shehui">
                <Icon type="appstore"/>社会
              </Menu.Item>
              <Menu.Item key="guonei">
                <Icon type="appstore"/>国内
              </Menu.Item>
              <Menu.Item key="guoji">
                <Icon type="appstore"/>国际
              </Menu.Item>

              {userShow}
            </Menu>
            <Modal title="用户中心" wrapClassName="vertical-center-modal"
              visible={this.state.modalVisible}
              onOk={()=>this.setModalVisible(false)}
              onCancel={()=>this.setModalVisible(false)} okText="关闭">
              <Tabs type="card">
                <TabPane tab="登录" key="1">
                  <Login setModalVisible={this
                    .setModalVisible
                    .bind(this)}
                    setSet={this
                   .setSet
                   .bind(this)}></Login>
                </TabPane>
                <TabPane tab="注册" key="2">
                  <Register setModalVisible={this
                    .setModalVisible
                    .bind(this)}
                    setSet={this
                   .setSet
                   .bind(this)}></Register>
                </TabPane>
              </Tabs>
            </Modal>
          </Col>
          <Col span={2}></Col>
        </Row>
      </header>
    )
  }
}
export default Pcheader = Form.create({})(Pcheader);
