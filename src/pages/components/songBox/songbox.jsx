import React, {Component} from 'react'
import './songbox.scss'
class SongSheet extends Component{
    constructor( props ) {
        super(props)
    }
    render() {
        const item = {
            imgurl:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4136386361,230291469&fm=27&gp=0.jpg'
            , title: '哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈'
        }
        return(
            <div className='songsheet-container'>
               <div className='songsheet-line'>
                    <div className='songsheet-poster-container'>
                            <img src={item.imgurl} className='songsheet-poster'></img>
                            <div className='poster-mask'>
                                
                            </div>
                    </div>
                    <div className='title'>
                        {item.title}
                    </div>
               </div>
               <div className='songsheet-line'>
                    <div className='songsheet-poster-container'>
                            <img src={item.imgurl} className='songsheet-poster'></img>
                            <div className='poster-mask'>
                                
                            </div>
                    </div>
                    <div className='title'>
                        {item.title}
                    </div>
               </div>
               <div className='songsheet-line'>
                    <div className='songsheet-poster-container'>
                            <img src={item.imgurl} className='songsheet-poster'></img>
                            <div className='poster-mask'>
                                
                            </div>
                    </div>
                    <div className='title'>
                        {item.title}
                    </div>
               </div>
            </div>
        );
    }
}

export default SongSheet;