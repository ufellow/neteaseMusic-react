import React, {Component} from 'react';
import { Carousel } from 'antd';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {GetBannerList, HomeReducer} from './homeStore/homeReducer';
import SongSheet from './../components/songBox/songbox.jsx'
import './home.scss'
class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            show:false,
            appName: '',
            tabList:['我的', '发现', '朋友','视频'],
            currentTabIndex: 0,
            banner:[{
                url:'#'
                ,imgUrl:'https://ss0.baidu.com/73x1bjeh1BF3odCf/it/u=3709279915,3626795933&fm=85&s=02A2752256CE1AE42600C7A7030030A3'
            },{
                url:'#'
                ,imgUrl:'https://ss0.baidu.com/73x1bjeh1BF3odCf/it/u=3709279915,3626795933&fm=85&s=02A2752256CE1AE42600C7A7030030A3'
            },{
                url:'#'
                ,imgUrl:'https://ss0.baidu.com/73x1bjeh1BF3odCf/it/u=3709279915,3626795933&fm=85&s=02A2752256CE1AE42600C7A7030030A3'
            }],
            bannerList:[]
        }
    }
    
    render() {   
        return(
            <div className='home-container'>        
                <div className='home-content'>
                    <div className='swiper-container'>
                    <Carousel autoplay dots>  
                            {this.state.banner.map((item ,index) => {
                                return(
                                    <div key={index}><a href={item.url}>
                                    <img src={item.imgUrl}></img>
                                    </a></div>
                                )
                            })}                      
                    </Carousel>
                    </div>
                    {/* swiper end */}               

                    <ul className="home-top-bottom">
                        <li >
                            <Link to='/recommend'>
                                <div className='back'><i className='iconfont icon-rili'></i></div>
                                <span>每日推荐</span>
                            </Link>
                        </li> 
                        <li >
                            <Link to='/recommend'>
                                <div className='back'><i className='iconfont icon-gedan'></i></div>
                                <span>歌单</span>
                            </Link>
                        </li> 
                        <li >
                            <Link to='/recommend'>
                                <div className='back'><i className='iconfont icon-paihangbang'></i></div>
                                <span>排行榜</span>
                            </Link>
                        </li> 
                        <li >
                            <Link to='/recommend'>
                                <div className='back'><i className='iconfont icon-diantai'></i></div>
                                <span>电台</span>
                                </Link>
                        </li> 
                        <li >
                            <Link to='/recommend'>
                                <div className='back'><i className='iconfont icon-center'></i></div>
                                <span>直播</span>
                            </Link>
                        </li>                   
                    </ul>
                    {/* top end */}

                    <div className='recom-list'>
                        <div className='recom-top'>
                            <span className='recom-top-left'>推荐歌单</span>
                            <div className='recom-top-right'>歌单广场</div>
                        </div>
                       <div className='recom-list-content'>
                          <SongSheet></SongSheet> 
                       </div>
                    </div>
                </div>
                
            </div>
        );
       
    }
   
    tabChange(e){
        console.log(e)
        this.setState({
            currentTabIndex: e
        })
    };
    componentDidMount(){
        this.getBannerList();
        

    };
    // 获取轮播图
    getBannerList(){
        this.props.getBannerList();
    }   
}
const mapStateToProps = (state) => {
    return{
        bannerList: state.HomeReducer.bannerList
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getBannerList() {
            dispatch(GetBannerList())
        }
    }
}
export default  connect(mapStateToProps, mapDispatchToProps)(Home);