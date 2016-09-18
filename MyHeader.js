import React from 'react'

class MyHeader extends React.Component{
  render(){
   var header1 ={
      backgroundColor: '#E8E8EE',
      padding: '7px',
      margin: 'auto',
      marginTop: '0px',
      marginBottom: '20px',
      color: 'red'
    }
    return(
      <h1 style={header1}>DatifyMe</h1>
    )
  }
}

export default MyHeader