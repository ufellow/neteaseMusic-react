import React from 'react'
import Utils from './../../../utils'
class Mask extends React.Component{
    render() {
        const style = {           
                background:' #000',
                opacity: 0.7,
                position:'fixed'
                ,top: 0
                ,right: 0
                ,width:'100%'
                ,height: '100%'
                ,zIndex:'99'
        }
        return(
            <div className='mask' style={style}></div>
        );
    }
}
export default Mask;