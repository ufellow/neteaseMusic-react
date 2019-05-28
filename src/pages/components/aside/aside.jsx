import React, {Component} from 'react'
// import Badge from './../badge/badge.jsx'
import {Badge} from 'antd'
import './aside.scss'
class Aside extends Component{
    state = {
         icons: [{
            name:'演出'
            ,icon:'icon-yanchu'
            ,extraContent:{}
        },{
            name:'音乐闹钟'
            ,icon:'icon-naozhong'
            ,extraContent:{}
        },{
            name:'扫一扫'
            ,icon:'icon-saoyisao'
            ,extraContent:{}
        },{
            name:'音乐云盘'
            ,icon:'icon-yun'
            ,extraContent:{}
        }],
        clientWidth:null,
        clientHeight: null
    }
    render() {
        const attarUrl = 'http://himg.bdimg.com/sys/portrait/item/3745756e6c75636b7966656c6c6f77f85a.jpg';
        const style = {
            height: this.state.clientHeight
        }
        const zheStyle = {
            // width: this.state.clientWidth
            height:this.state.clientHeight
            ,background:'#000'
            ,opacity: '0.8'
            // ,zIndex:'10'
        }
        return(
            <div className='aside-container'>
               <div className='aside-content'  style={style}>
                    <div className='attar-container'>   
                        <img src={attarUrl} className='attar-img'></img>
                        <div className='userinfo-container'>
                            <div className='name-level'>
                                <span className='username'>子静</span>
                                <span className='level'>lv.7</span>
                            </div>
                            <div className='signin'>
                                <i className='iconfont icon-qiandao'></i>签到
                            </div>
                        </div>
                    </div>
                    <div className='common-used'>
                        <div className='message common-list'>
                            <Badge count={110} overflowCount={99}>
                                <i className='iconfont icon-xiaoxi common-used-icons'></i>
                              </Badge>
                            <span className='common-used-name'>我的消息</span>
                        </div>
                        <div className=' common-list'>
                            <Badge count={0} overflowCount={10}>
                                <i className='iconfont icon-haoyou common-used-icons'></i>
                            </Badge>
                            <span className='common-used-name'>我的好友</span>
                        </div>
                        <div className=' common-list'>
                            <Badge count={0} overflowCount={10}>
                                 <i className='iconfont icon-pifu common-used-icons'></i>
                            </Badge>
                            <span className='common-used-name'>个性换肤</span>
                        </div>
                        <div className=' common-list'>
                             <Badge count={0} overflowCount={10}>
                                 <i className='iconfont icon-shiqu common-used-icons'></i>
                            </Badge>
                            <span className='common-used-name'>听歌识曲</span>
                        </div>
                    </div>
                    <div className='aside-module'>
                        {this.state.icons.map((iconItem, index) => {
                            return(
                                <div className='aside-module-list' key={index}>
                                    <div className='aside-left'>
                                        <i className={`iconfont ${iconItem.icon} aside-icons`}></i>
                                        <span>{iconItem.name}</span>
                                    </div>
                                    <div className='aside-right'></div>
                                </div>
                            )
                        })
                        }
                    </div>
                    <div className='aside-bottom'>
                        <div className='bottom-content'>
                            <i className='iconfont icon-yueliang'></i>
                            <span>夜间模式</span>
                        </div>
                        <div className='bottom-content'>
                            <i className='iconfont icon-shezhi'></i>
                            <span>设置</span>
                        </div>
                        <div className='bottom-content'>
                            <i className='iconfont icon-tuichu'></i>
                            <span>退出</span>
                        </div>
                    </div>
               </div>
               <div className='smark' style={zheStyle}></div>

            </div>
        );
    }
    componentWillMount(){
        this.setState({
            clientWidth: document.documentElement.clientWidth,
            clientHeight: document.documentElement.clientHeight
        })
    }
}
export default Aside;