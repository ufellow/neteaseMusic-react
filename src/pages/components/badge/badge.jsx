import React from 'react'
class Badge extends React.Component{
   
    render() {
        const style = {
            background: '#d43b33',
            position: 'absolute',
            top: '-0.2rem',
            right:'-0.01rem',
            color: '#fff',   
            padding: '0.05rem 0.1rem', 
            borderRadius: '0.5rem',   
        }
        return(
            <div className='badge-container' style={style}>
              {this.props.number}
            </div>
        )
    }
}
export default Badge;