import React from 'react';


 const PhotoImg = props => {
    
    return (
    <div classname = 'img-container'>
        <h2>{props.title}</h2>
        <img className = 'gallery-img' src = {props.imgUrl}/>
    </div>
    )
}

export default PhotoImg