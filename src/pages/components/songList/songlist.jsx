import React from 'react'
import './songlist.scss'
import {Link} from 'react-router-dom'
import {CSSTransition} from 'react-transition-group'
import Mask from './../../components/mask/mask.jsx'
class SongList extends React.Component{
 constructor(props){
   super(props);
   this.state = {
    show: false
  }
  this.handleScrollUl = this.handleScrollUl.bind(this)
 }
    render() {
      const zheStyle = {
        position: 'fixed'
        ,top:0
        ,bottom:0,
        right: 0,
        left:0
        ,background:'#000'
        ,opacity: '0.8',
        zIndex:'10'
    }
        return(
            <div className='songlist-container' style={this.props.songListStyle}>
             
               <ul className='songlist-content'>
                      <li>
                            <Link to='/player'>
                              <img className='song-post' src='http://himg.bdimg.com/sys/portrait/item/3745756e6c75636b7966656c6c6f77f85a.jpg'></img>
                              <div className='song-info'>
                                    <div className='song-title'>
                                      <span className='song-main-title'>大鱼</span>
                                      <span className='song-sub-title'>(动画电影《大鱼海棠》哈哈啊哈</span>
                                    </div>
                                    <div className='song-description'>
                                      {/* <span className='song-type'>SQ</span> */}
                                      <span>周深-大鱼</span>
                                    </div>
                              </div>
                            </Link>
                            <div className='operation-moreinfo'>
                                <i className='iconfont icon-shipinbofangyingpian'></i>
                                <i className='iconfont icon-gengduo' onClick={ () => {
                                  this.setState({
                                    show: true
                                  })
                                }}></i>
                            </div>   
                               {/* 歌曲信息 */}
                                <div className='song-info-detail-container'>
                                <CSSTransition
                                        in={this.state.show}
                                        //动画时间
                                        timeout={1000}
                                        unmountOnExit
                                        // 前缀名注意S
                                        classNames='song-info-detail'>
                                       <div>
                                          <div className='song-info-detail-content'>
                                            <div classNam='detail-top'>

                                            </div>
                                          </div>
                                          <div className='smark' style={zheStyle} onClick={() =>{
                                            this.setState({
                                              show:false
                                            })
                                          }}></div>
                                       </div>                                         
                                        </CSSTransition>
                                </div>      
                                           
                     </li>
                     <li>
                            <Link to='/'>
                              <img className='song-post' src='http://himg.bdimg.com/sys/portrait/item/3745756e6c75636b7966656c6c6f77f85a.jpg'></img>
                              <div className='song-info'>
                                    <div className='song-title'>
                                      <span className='song-main-title'>大鱼</span>
                                      <span className='song-sub-title'>(动画电影《大鱼海棠》哈哈啊哈</span>
                                    </div>
                                    <div className='song-description'>
                                      {/* <span className='song-type'>SQ</span> */}
                                      <span>周深-大鱼</span>
                                    </div>
                              </div>
                            </Link>
                            <div className='operation-moreinfo'>
                                <i className='iconfont icon-shipinbofangyingpian'></i>
                                <i className='iconfont icon-gengduo' onClick={ () => {
                                  this.setState({
                                    show: true
                                  })
                                }}></i>
                            </div>   
                               {/* 歌曲信息 */}
                                <div className='song-info-detail-container'>
                                <CSSTransition
                                        in={this.state.show}
                                        //动画时间
                                        timeout={1000}
                                        unmountOnExit
                                        // 前缀名注意S
                                        classNames='song-info-detail'>
                                       <div>
                                          <div className='song-info-detail-content'>
                                            <div classNam='detail-top'>

                                            </div>
                                          </div>
                                          <div className='smark' style={zheStyle} onClick={() =>{
                                            this.setState({
                                              show:false
                                            })
                                          }}></div>
                                       </div>                                         
                                        </CSSTransition>
                                </div>      
                                           
                     </li>
                     <li>
                            <Link to='/'>
                              <img className='song-post' src='http://himg.bdimg.com/sys/portrait/item/3745756e6c75636b7966656c6c6f77f85a.jpg'></img>
                              <div className='song-info'>
                                    <div className='song-title'>
                                      <span className='song-main-title'>大鱼</span>
                                      <span className='song-sub-title'>(动画电影《大鱼海棠》哈哈啊哈</span>
                                    </div>
                                    <div className='song-description'>
                                      {/* <span className='song-type'>SQ</span> */}
                                      <span>周深-大鱼</span>
                                    </div>
                              </div>
                            </Link>
                            <div className='operation-moreinfo'>
                                <i className='iconfont icon-shipinbofangyingpian'></i>
                                <i className='iconfont icon-gengduo' onClick={ () => {
                                  this.setState({
                                    show: true
                                  })
                                }}></i>
                            </div>   
                               {/* 歌曲信息 */}
                                <div className='song-info-detail-container'>
                                <CSSTransition
                                        in={this.state.show}
                                        //动画时间
                                        timeout={1000}
                                        unmountOnExit
                                        // 前缀名注意S
                                        classNames='song-info-detail'>
                                       <div>
                                          <div className='song-info-detail-content'>
                                            <div classNam='detail-top'>

                                            </div>
                                          </div>
                                          <div className='smark' style={zheStyle} onClick={() =>{
                                            this.setState({
                                              show:false
                                            })
                                          }}></div>
                                       </div>                                         
                                        </CSSTransition>
                                </div>      
                                           
                     </li>
                     <li>
                            <Link to='/'>
                              <img className='song-post' src='http://himg.bdimg.com/sys/portrait/item/3745756e6c75636b7966656c6c6f77f85a.jpg'></img>
                              <div className='song-info'>
                                    <div className='song-title'>
                                      <span className='song-main-title'>大鱼</span>
                                      <span className='song-sub-title'>(动画电影《大鱼海棠》哈哈啊哈</span>
                                    </div>
                                    <div className='song-description'>
                                      {/* <span className='song-type'>SQ</span> */}
                                      <span>周深-大鱼</span>
                                    </div>
                              </div>
                            </Link>
                            <div className='operation-moreinfo'>
                                <i className='iconfont icon-shipinbofangyingpian'></i>
                                <i className='iconfont icon-gengduo' onClick={ () => {
                                  this.setState({
                                    show: true
                                  })
                                }}></i>
                            </div>   
                               {/* 歌曲信息 */}
                                <div className='song-info-detail-container'>
                                <CSSTransition
                                        in={this.state.show}
                                        //动画时间
                                        timeout={1000}
                                        unmountOnExit
                                        // 前缀名注意
                                        classNames='song-info-detail'>
                                       <div>
                                          <div className='song-info-detail-content'>
                                            <div classNam='detail-top'>

                                            </div>
                                          </div>
                                          <div className='smark' style={zheStyle} onClick={() =>{
                                            this.setState({
                                              show:false
                                            })
                                          }}></div>
                                       </div>                                         
                                        </CSSTransition>
                                </div>      
                                           
                     </li>
                     <li>
                            <Link to='/'>
                              <img className='song-post' src='http://himg.bdimg.com/sys/portrait/item/3745756e6c75636b7966656c6c6f77f85a.jpg'></img>
                              <div className='song-info'>
                                    <div className='song-title'>
                                      <span className='song-main-title'>大鱼</span>
                                      <span className='song-sub-title'>(动画电影《大鱼海棠》哈哈啊哈</span>
                                    </div>
                                    <div className='song-description'>
                                      {/* <span className='song-type'>SQ</span> */}
                                      <span>周深-大鱼</span>
                                    </div>
                              </div>
                            </Link>
                            <div className='operation-moreinfo'>
                                <i className='iconfont icon-shipinbofangyingpian'></i>
                                <i className='iconfont icon-gengduo' onClick={ () => {
                                  this.setState({
                                    show: true
                                  })
                                }}></i>
                            </div>   
                               {/* 歌曲信息 */}
                                <div className='song-info-detail-container'>
                                <CSSTransition
                                        in={this.state.show}
                                        //动画时间
                                        timeout={1000}
                                        unmountOnExit
                                        // 前缀名注意S
                                        classNames='song-info-detail'>
                                       <div>
                                          <div className='song-info-detail-content'>
                                            <div classNam='detail-top'>

                                            </div>
                                          </div>
                                          <div className='smark' style={zheStyle} onClick={() =>{
                                            this.setState({
                                              show:false
                                            })
                                          }}></div>
                                       </div>                                         
                                        </CSSTransition>
                                </div>      
                                           
                     </li>
               </ul>
            </div>
        );
    }
    componentDidMount() {
      window.addEventListener('scroll',this.handleScrollUl);

    }
    handleScrollUl(){
      const marginTop = document.getElementsByTagName('li')[0].offsetTop
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      console.log(marginTop)
      // if(marginTop )
    }
}
export default SongList;