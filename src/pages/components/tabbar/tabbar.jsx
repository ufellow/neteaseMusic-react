import React from 'react';
class Tabbar extends React.Component{
    constructor(props) {
        super(props)
        this. state = {
            tabList:['我的', '发现', '朋友','视频'],
            currentTabIndex: 0,
        }
    }
   
    render(){
        return(
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
        );
    }
}
export default Tabbar;