import React, {Component} from 'react'
import './register.scss'
import Utils from './../../utils'
class Register extends Component{
    constructor(props){
        super(props);
        this.state = {
            username:''
            ,phone:''
            ,password:''
            ,passconfirm:''
            ,code:''
        }
        this.handleChange = this.handleChange.bind(this);
    }
    render() {
        const screenParam = Utils.getScreen();
        const style = {
            height: screenParam.height,
            width: screenParam.width
        }
        return(
            <div className='register-container' style={style}>
                <div className='register-content'>
                    <div className='input-box'>
                        <i className='iconfont icon-user icons'></i>
                        <input type='text' placeholder='输入昵称' name='username'
                        onChange={this.handleChange}></input>
                    </div>
                    <div className='input-box'>
                        <i className='iconfont icon-yanzhengma icons'></i>
                        <input type='number' placeholder='输入手机号' name='phone'
                        onChange={this.handleChange} ></input>
                    </div>
                
                    <div className='input-box'>
                        <i className='iconfont icon-mima icons'></i>
                        <input type='password' placeholder='输入密码' name='password' 
                        onChange={this.handleChange} ></input>
                    </div>
                    <div className='input-box'>
                        <i className='iconfont icon-mima icons'></i>
                        <input type='password' placeholder='确认密码' name='passconfirm'
                        onChange={this.handleChange} ></input>
                    </div>
                    <div className='input-box yanzhengcode'>
                        <input type='number' placeholder='   填写验证码' name='code'   onChange={this.handleChange}
                        ></input>
                        <button>发送验证码</button>
                    </div>
                    <div className='submit-box'>
                        <button>注册</button>
                    </div>
                </div>
            </div>
        );
    }
    handleChange(e){
        let name = e.target.name;
        let value = e.target.value;
        this.setState({
            [name]: value
        })
    }
    beforeSubmit(){
    console.log(    this.state.phone)
    }
   
    componentDidMount(){
    }
}
export default Register;