import React from 'react';

const GifList = (props) => {
    return (
        <div>
        <ul>
        <li><img src={props.gif}/></li>
        </ul>
        </div>
    );
}

export default GifList;
