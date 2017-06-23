import React from "react";
import ReactDOM from "react-dom";
import { Form, Icon, Input, Button, Checkbox,message } from 'antd';
const FormItem = Form.Item;

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      action: "login",
      userNickName: "",
    }
  }
  handleSubmit(e) {
    e.preventDefault();
    // var formData = this.props.form.getFieldValue();
    // console.info("formData",formData);return false;
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        var myFetchOptions = {
          method: "GET"
        };
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=register&username="
        + values.userName
        + "&r_password=" + values.password
        + "&r_confirmPassword=" + values.confirmPassword,myFetchOptions)
        .then(response=>response.json())
        .then(json=>{
          console.info("json",json)
          let userInfo =  JSON.stringify(values)
          // this.setState({userid:json.UserId});
          message.success("注册成功！");
          localStorage.setItem('userInfo',userInfo);
          localStorage.userId = json.UserId;
          this.props.setSet({
            hasLogined: true,
            userNickName:JSON.parse(userInfo).userName
          });
          this.props.setModalVisible(false);
          this.props.form.resetFields();
        });

      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit.bind(this)} className="login-form">
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('confirmPassword', {
            rules: [{ required: true, message: 'Please input your confirmPassword!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="confirmPassword" />
          )}
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Register
          </Button>
        </FormItem>
      </Form>
    );
  }
}

export default Register = Form.create({})(Register);
