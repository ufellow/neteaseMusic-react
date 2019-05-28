import React, {Component} from 'react'
import './daliyRecom.scss'
import SongList from './../components/songList/songlist.jsx'
import TopNavigate from './../components/topNavigate/topNavigate.jsx'
class DaliyRecom extends Component{
    constructor(props) {
        super(props);
        this.state = {
            title: '每日推荐',
            listBoxStyle:{},
            songListStyle:{}
        }
        this.handleScroll = this.handleScroll.bind(this)
    }
    render() {
       
        return(
            <div className='recommend-container'>
                <TopNavigate title={this.state.title} back={this.props}></TopNavigate>
                <div className='recommend-top' onClick={()=>{
                     this.setState({
                        listBoxStyle: {},
                        songListStyle: {}
                    })                                      
                }}>

                </div>
                <div className='recommend-list' style={this.state.listBoxStyle} >
                    <div className='songlist-header' >
                        <div className='songlist-header-left'>
                            <i className='iconfont icon-bofang2 bofang-icon'></i>
                            <span>播放全部</span>
                        </div>
                        <div className='songlist-header-right'>
                        <i className='iconfont icon-liebiaoxuanze- duoxuan-icon'></i>
                            <span>多选</span>
                        </div>
                    </div>
                    <SongList songListStyle={this.state.songListStyle}></SongList>
                </div>
            </div>
        );
    }
  
   handleScroll(event){
    const marginTop = document.getElementsByClassName('recommend-list')[0].offsetTop
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    // console.log(scrollTop)
    const listBoxStyle = {
        position:'fixed',
        top: '2rem',
        boxShadow:'0 -1rem 3rem #fff'
    }
    const songListStyle = {
        height: '12rem',
        overflow: 'scroll'
    }
    if(scrollTop > (marginTop-120)){
        this.setState({
            listBoxStyle: listBoxStyle,
            songListStyle: songListStyle
        })
    }
    else{
       
    }
   }
   componentDidMount() {
      window.addEventListener('scroll',this.handleScroll)
    }
    componentWillUnmount(){
        window.removeEventListener('scroll',this.handleScroll)
    }
}
export default DaliyRecom;