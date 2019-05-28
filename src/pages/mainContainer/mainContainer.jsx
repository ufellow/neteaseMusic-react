import React from 'react';
import './mainContainer.scss'
import {TransitionGroup, CSSTransition } from 'react-transition-group'
import Aside from './../components/aside/aside.jsx'
import Home from './../home/home.jsx'
class MainContainer extends React.Component{
    constructor(props) {
        super(props)
        this. state = {
            show:false,
            tabList:['我的', '发现', '朋友','视频'],
            currentTabIndex: 0,
        }
    }
   
    render(){
        return(
            <div className='main-container'> 
                 <div className='home-top-container'>
                    <div className='side-bar-logo' onClick={()=>{
                        this.setState({
                            show:true
                        })
                    }}>
                    <i className='iconfont icon-cebianlan'></i>
                    <div className='message-num'>123</div>
                    </div>
                    <div className='tab'>
                        {this.state.tabList.map((item, index) => {
                            return(
                                <div className={`tablist ${this.state.currentTabIndex===index?'tab-active':""}`} key={index}
                                onClick={this.tabChange.bind(this,index)}>{item}</div>
                            )
                        })}
                    </div>
                    {/* tab end */}
                    <div className='search-icon' onClick={()=> {
                        this.props.history.push('/search')
                    }}>
                        <i className='iconfont icon-sousuo'></i>
                    </div>
                 </div>     

                 {/* 侧边栏 */}
                 <div className='asidebar' onClick={()=>{
                    let show = !this.state.show;
                    this.setState({
                        show: show
                    })
                     }}>
                    <CSSTransition
                    in={this.state.show}
                    //动画时间
                    timeout={1000}
                    unmountOnExit
                    // 前缀名注意S
                    classNames='sidebar'>
                        <Aside></Aside>
                    </CSSTransition>
                </div> 
               {this.state.currentTabIndex === 0 && <Home></Home>}

            </div>
        );
    }
    tabChange(e){
        console.log(e)
        this.setState({
            currentTabIndex: e
        })
    };
}
export default MainContainer;