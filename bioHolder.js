import React from 'react';
import ReactDOM  from 'react-dom';

class BioHolder extends React.Component {
  constructor(props){
      super(props)
      this.state ={
        bio: this.props.bio
      }
    }
  render(){
    var style={
      backgroundColor: '#E8E8EE',
      borderRadius: '20px',
      height: '150px',
      padding: '20px',
      margin: 'auto',
      marginTop: '10px',
      marginBottom: '10px',
      width: '85%'
    }
    return (
      <div>
        <div className='row'>
          <h5 style={style}>{this.props.bio}</h5>
        </div>
      </div>      
    )
  }
}

export default BioHolder;
