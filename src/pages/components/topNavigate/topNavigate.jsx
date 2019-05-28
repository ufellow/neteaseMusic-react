import React from 'react'
import './topNavigate.scss'
class TopNavigate extends React.Component{
    render() {
        return(
            <div className='top-navigate-container'>
                <div className='navigate-left'>
                    <i className='iconfont icon-jiantou-left' onClick={() =>{
                        this.props.back.history.goBack()
                    }}></i>
                    <span>{this.props.title}</span>
                </div>
                <div className='navigate-right'></div>
            </div>
        )
    }
}
export default TopNavigate;