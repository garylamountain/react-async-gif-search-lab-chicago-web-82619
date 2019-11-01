import React from 'react'

import NavBar from './NavBar'
import GifListContainer from '../containers/GifListContainer'
import GifSearch from './GifSearch'

// the App component should render out the GifListContainer component 

class App extends React.Component {

  state = {
    gifs: []
  }

  handleClick = (search) => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(res => res.json())
    .then(data => {
      let fetchedGifs = [];
      fetchedGifs[0] = `http://giphygifs.s3.amazonaws.com/media/${data.data[0].id}/giphy.gif`;
      fetchedGifs[1] = `http://giphygifs.s3.amazonaws.com/media/${data.data[1].id}/giphy.gif`;
      fetchedGifs[2] = `http://giphygifs.s3.amazonaws.com/media/${data.data[2].id}/giphy.gif`;
      this.setState({gifs:fetchedGifs})
    })
  }
  
  render(){
  return (
    <div>
        < NavBar color='black' title="Giphy Search" />
        <GifSearch handleClick={this.handleClick}/>
        <GifListContainer gifs={this.state.gifs}/>
    </div>
  )
  }
}

export default App
