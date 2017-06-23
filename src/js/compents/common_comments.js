import React from "react";
import ReactDom from "react-dom";
import {Router, Route, Link, browserHistory} from 'react-router';
import Login from "./login";
import Register from "./register";
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
class CommonComments extends React.Component {
    constructor() {
      super();
      this.state = {
          comments:""
      };
    };
    componentDidMount() {
        var myFetchOptions = {
          method:"GET"
        };
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getcomments&uniquekey="+this.props.uniquekey,myFetchOptions)
        .then(response=>response.json())
        .then(json=>{
          this.setState({comments: json});
        });
      }
    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
          if (!err) {
            var formdata = values;
            console.info("formdata.remark",formdata.remark)
            var myFetchOptions = {
              method:"GET"
            };
            fetch('http://newsapi.gugujiankong.com/Handler.ashx?action=comment&userid=184&uniquekey=' + this.props.uniquekey + '&commnet=' + formdata.remark,myFetchOptions)
            .then(response=>response.json())
            .then(json=>{
              this.componentDidMount();
              this.props.form.resetFields();
            });
          }
        })
    }
    addUserCollection() {
      var myFetchOptions = {
        method:"GET"
      };
      fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=uc&userid=184&uniquekey="+this.props.uniquekey,myFetchOptions)
      .then(response=>response.json())
      .then(json=>{
          notification["success"]({message:"React提醒",description:"收藏成功"})
      });
    }
    render() {
      let {getFieldDecorator} = this.props.form;
      const {comments} = this.state;
      const commentList = comments.length?
      comments.map((comment,index)=>(
        <Card key={index} title={comment.UserName} extra={<a href="#">发表于{comment.datetime}</a>}>
          <p>{comment.Comments}</p>
        </Card>
      ))
      :
      "没有加载到任何评论"
      return (
        <div class="comment">
            <Row>
              <Col span={24}>
                {commentList}
                  <Form onSubmit={this.handleSubmit.bind(this)}>
                      <FormItem label="您的评论">
                        {getFieldDecorator('remark', {
                           rules: [
                             {
                               required: true,
                               message: '内容不能为空！',
                               whitespace: true
                             }
                           ]
                         })(<Input type='textarea' placeholder='随便写'/>)}
                      </FormItem>
                      <Button type="primary" htmlType="submit">提交评论</Button>
                      <Button type="primary" htmlType="button" onClick={this.addUserCollection.bind(this)}>收藏此篇</Button>
                  </Form>
              </Col>
            </Row>
        </div>
      )
    }
}

export default CommonComments = Form.create({})(CommonComments);
