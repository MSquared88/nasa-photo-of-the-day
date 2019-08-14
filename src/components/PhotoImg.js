import React from 'react';


export default function PhotImg(props) {
    <div classname = 'img-container'>
        <h2>{props.title}</h2>
        <img className = 'gallery-img' src = {props.imgUrl}/>
    </div>
}