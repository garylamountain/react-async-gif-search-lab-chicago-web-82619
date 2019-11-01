import React from 'react';

class GifSearch extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            input: ''
        }
    }

    handleChange = (event) => {
        this.setState({input:event.target.value})
    }

    render(){
        return (
            <div>
                <p>Enter a Search Term:</p>
                <input id='searchBar' type='text'value={this.state.input} onChange={this.handleChange}/>
                <button onClick={event=>this.props.handleClick(this.state.input)}>Find GIFs</button>
            </div>
        );
    }

}

export default GifSearch;