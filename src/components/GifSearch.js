import React from 'react';

class GifSearch extends React.Component {

    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
                <p>Enter a Search Term:</p>
                <input type='text'/>
                <button onClick={this.props.handleClick}>Find GIFs</button>
            </div>
        );
    }

}

export default GifSearch;