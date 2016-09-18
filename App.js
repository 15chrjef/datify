import React from 'react';
import { render }  from 'react-dom';
import ProfileHolder from './profileHolder.js';
import PictureHolder from './pictureHolder.js';

var Profiles = [
      [
        'https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/13615282_1377935798889818_2051125881338448336_n.jpg?oh=dbff50dee5fd6f856c9d2555326671e7&oe=583BB7DD',
        'Nam in suscipit tellus, sed blandit arcu. Cras nec suscipit felis. Sed gravida pharetra libero, sed hendrerit nisl cursus eget. Cras euismod, turpis pulvinar eleifend lobortis, velit diam hendrerit enim, id dignissim diam dolor eget erat. Phasellus vitae risus eu justo sodales imperdiet vel sit amet magna. In ac justo eleifend augue dictum consequat in at dui. Nunc convallis semper fermentum. Vivamus in sem at dui maximus tempus ac at felis. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
        'Creepy Dude'
      ], 
      [
        'https://scontent-sea1-1.xx.fbcdn.net/t31.0-8/13131696_1316468051703260_667967433047815511_o.jpg',
        "Fusce dictum dignissim lobortis. Proin molestie sodales ultrices. Nunc lorem diam, sollicitudin vel tristique vitae, elementum tempus nulla. Nam elementum urna in purus dignissim mollis. Morbi semper nisl non orci aliquam, eu sodales augue sagittis. Duis sed leo ullamcorper, efficitur tortor nec, faucibus purus. Pellentesque consequat sit amet quam non bibendum. Fusce viverra ante at elit tincidunt ornare. Sed placerat felis in tellus tempus, eget mattis quam consectetur.",
        'Software Engineer'
      ], 
      [
        'https://scontent-sea1-1.xx.fbcdn.net/t31.0-8/13122943_1316467998369932_3011075775307024363_o.jpg',
        "Morbi varius augue nisi, non pellentesque metus pulvinar bibendum. Vivamus a metus auctor, malesuada neque eget, ornare lacus. Nullam nibh magna, convallis eu tempus nec, placerat eu mi. Pellentesque orci quam, iaculis non finibus vel, tempus dignissim nisi. Ut ullamcorper egestas velit, non dignissim nibh. Aenean pharetra aliquam lacus, in fermentum nunc condimentum id. Etiam ornare tincidunt fringilla. Cras vel commodo dolor.",
        "College Student"
      ], 
      [
        'https://scontent-sea1-1.xx.fbcdn.net/t31.0-8/13116016_1316467991703266_2077323541905741590_o.jpg',
        "Praesent aliquet volutpat hendrerit. Nunc sed ante tristique, rhoncus justo at, gravida justo. Morbi vestibulum elit at justo mollis hendrerit. Morbi velit felis, mollis quis interdum non, pulvinar nec odio. Phasellus consectetur tellus et risus sodales, at finibus eros rhoncus. Maecenas interdum mi magna, nec sollicitudin mauris commodo sit amet. Nam blandit ex a tellus posuere ultrices.",
        "Attractive Person"
      ]
    ]

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      profiles: Profiles,
      currentProfile: Profiles[0]
    }
  }
  SetProfile(e){
    var randomIndex = Math.floor(Math.random() * Profiles.length)
    this.setState({
      currentProfile: Profiles[randomIndex]
    })
  }

  render(){
    var divStyle = {
      textAlign : 'center',
      borderStyle: 'solid',
      borderColor: 'red',
      borderRadius: '40px',
      borderWidth: '10px',
      marginTop: '30px',
      width: '600px',
      overflowY: 'auto',
      overflowX: 'hidden',
      margin: 'auto'
    }

    var style={
      backgroundColor: '#E8E8EE',
      borderRadius: '20px',
      padding: '7px',
      width: '50%',
      margin: 'auto',
      marginTop: '10px'

    }

    return (
        <div style={divStyle}>
          <ProfileHolder profile={this.state.currentProfile} func={this.SetProfile.bind(this)} style={style}/>
        </div>
    )
  }
}

export default App;