import React from 'react';
import ReactDOM  from 'react-dom';

class ButtonHolder extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    var style={
      backgroundColor: '#E8E8EE',
      borderRadius: '40px',
      padding: '20px'
    }

    var Pictures = ['https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/13615282_1377935798889818_2051125881338448336_n.jpg?oh=dbff50dee5fd6f856c9d2555326671e7&oe=583BB7DD', 'https://scontent-sea1-1.xx.fbcdn.net/t31.0-8/13131696_1316468051703260_667967433047815511_o.jpg', 'https://scontent-sea1-1.xx.fbcdn.net/t31.0-8/13122943_1316467998369932_3011075775307024363_o.jpg', 'https://scontent-sea1-1.xx.fbcdn.net/t31.0-8/13116016_1316467991703266_2077323541905741590_o.jpg']
    return (
      <div>
          <button style={style} onClick={this.props.func} className='btn btn-lg col-md-offset-2 col-md-3'>Go Away!</button>
          <button style={style} onClick={this.props.func} className='btn btn-lg col-md-offset-2 col-md-3'>Yes Please!</button>     
      </div> 
    )
  }
}

export default ButtonHolder;
