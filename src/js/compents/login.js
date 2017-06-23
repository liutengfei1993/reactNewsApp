import React from "react";
import ReactDOM from "react-dom";
import { Form, Icon, Input, Button, Checkbox,message } from 'antd';
const FormItem = Form.Item;

class Login extends React.Component {

  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        var myFetchOptions = {
          method: "GET"
        };
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=login&r_username="
        +values.userName+"&r_passWord="+values.password
        ,myFetchOptions)
        // .then(function(res){
        //   console.info("res",res)
        // })
        .then(response=>response.json())
        .then(json=>{
          let userInfo =  JSON.stringify(values)
          localStorage.setItem('userInfo',userInfo);

          this.props.setSet({
            hasLogined: true,
            userNickName:JSON.parse(userInfo).userName
          });
          localStorage.userId = json.UserId;
          this.props.setModalVisible(false);
          this.props.form.resetFields();
        })
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
          <Button type="primary" htmlType="submit" className="login-form-button">
            Login
          </Button>
        </FormItem>
      </Form>
    );
  }
}

export default Login = Form.create({})(Login);
