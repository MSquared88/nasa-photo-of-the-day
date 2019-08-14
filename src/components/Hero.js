import React,{useState, useEffect} from 'react';
import axios from 'axios'

export default function Hero() {

    const [apodImg, setApodImg] = useState([])
    const [apodTitle, setApodTitle] = useState([])
    const [apodDesc, setApodDesc] = useState([])

    
    useEffect(() => {
        axios
        .get('https://api.nasa.gov/planetary/apod?api_key=70RsLTRueVyts0FPjdGIT8uYemieZOOBShWPnb7G')
        .then(res =>{
            setApodImg(res.data.url)
            setApodTitle(res.data.title)
            setApodDesc(res.data.explanation)
        })
    }, [])
    return (
        <div className = 'hero'>
            <h1>{apodTitle}</h1>
            <p>{apodDesc}</p>
            <img src={apodImg}/>

        </div>
    );
};   
