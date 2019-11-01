import React from 'react';
import GifList from '../components/GifList'

class GifListContainer extends React.Component {

    constructor(props){
        super(props)
    }

    render(){

        const allGifs = this.props.gifs.map(gif => {
            console.log(gif)
            return <GifList gif={gif} key={gif}/>
        })

        return (
            <div>{allGifs}</div>
        );
    }
}

export default GifListContainer;