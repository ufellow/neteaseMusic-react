import React, {Component} from 'react'
import './player.scss'
import { Slider} from 'antd'
import TopNavigate from './../components/topNavigate/topNavigate.jsx'
class Player extends Component{
    state = {
        inputValue: 0,
        duration :2400
      };
    onChange = value => {
        if (Number.isNaN(value)) {
          return;
        }
        this.setState({
          inputValue: value,
        });
      };
    
    render() {
        const { inputValue, duration } = this.state;
       const style = {
            height: document.documentElement.clientHeight
        }
        return(
            <div className='player-container' style={style}>
                <TopNavigate back={this.props}></TopNavigate>
                <div className='player-content'>
                    <div className='player-song-post'>

                    </div>
                    <div className='player-controler-container'>
                        <div className='player-duration'>
                            <span>{inputValue}</span> 
                            <Slider
                                    min={0}
                                    max={4.31}
                                    onChange={this.onChange}
                                    value={typeof inputValue === 'number' ? inputValue : 0}
                                    step={0.01}
                                />
                            <span>04:50</span>
                        </div>
                        <div className='player-controler'>
                            <i className='iconfont icon-shuaxin'></i>
                            <i className='iconfont icon-pre'></i>
                            <i className='iconfont icon-bofang3 player-start'></i>
                            <i className='iconfont icon-next'></i>
                            <i className='iconfont icon-bofangliebiao'></i>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Player;