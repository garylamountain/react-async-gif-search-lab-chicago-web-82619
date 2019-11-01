import React from 'react'

import NavBar from './NavBar'
import GifListContainer from '../containers/GifListContainer'
import GifSearch from './GifSearch'

// the App component should render out the GifListContainer component 

class App extends React.Component {

  handleClick = (search) => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(res => res.json())
    .then(data => console.log(data.data.slice(0,2)))
  }
  
  render(){
  return (
    <div>
        < NavBar color='black' title="Giphy Search" />
        <GifSearch handleClick={this.handleClick}/>
        <GifListContainer />
    </div>
  )
  }
}

export default App
