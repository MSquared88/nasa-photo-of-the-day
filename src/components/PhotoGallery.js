// import React,{useState, useEffect} from 'react';
// import axios from 'axios';
// import PhotoImg from './PhotoImg';

// export default function PhotoGallery() {


//     const d = new Date();

//     const dates = [
//         `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate() -1}`,
//         `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate() -2}`,
//         `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate() -3}`,
//         `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate() -4}`,
//         `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate() -5}`,
//         `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate() -6}`,
//     ]

//     const [img1Url, setImg1Url] =useState([])
//     const [img2Url, setImg2Url] =useState([])
//     const [img3Url, setImg3Url] =useState([])

//     const [img1Title, setImg1Title] =useState([])
//     const [img2Title, setImg2Title] =useState([])
//     const [img3Title, setImg3Title] =useState([])



//     useEffect(() => {
             
//             axios.get(`https://api.nasa.gov/planetary/apod?api_key=70RsLTRueVyts0FPjdGIT8uYemieZOOBShWPnb7G&date=${dates[0]}`)
//             .then(res =>{    
//                 setImg1Url(res.data.url)
//                 setImg1Title(res.data.title)
//             })
            
//             axios.get(`https://api.nasa.gov/planetary/apod?api_key=70RsLTRueVyts0FPjdGIT8uYemieZOOBShWPnb7G&date=${dates[1]}`)
//             .then(res =>{    
//                 setImg2Url(res.data.url)
//                 setImg2Title(res.data.title)

//             })            
            
//             axios.get(`https://api.nasa.gov/planetary/apod?api_key=70RsLTRueVyts0FPjdGIT8uYemieZOOBShWPnb7G&date=${dates[2]}`)
//             .then(res =>{    
//                 setImg3Url(res.data.url)
//                 setImg3Title(res.data.title)

//             })            

//     }, [])
//     return (
//         <div className = 'gallery-container'>
//             <PhotoImg imgUrl ={img1Url} title = {img1Title}/>
//             <PhotoImg imgUrl ={img2Url} title = {img2Title}/>
//             <PhotoImg imgUrl ={img3Url} title = {img3Title}/>
//         </div>
//     );
// };   

import React,{useState, useEffect} from 'react'
import {  Card, Icon, Image} from 'semantic-ui-react'
import axios from 'axios';
// import PhotoImg from './PhotoImg';


function PhotoGallery() {
    
    const d = new Date();

    const dates = [
        `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate() -1}`,
        `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate() -2}`,
        `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate() -3}`,
    ]

    const [img1Url, setImg1Url] =useState([])
    const [img2Url, setImg2Url] =useState([])
    const [img3Url, setImg3Url] =useState([])

    const [img1Title, setImg1Title] =useState([])
    const [img2Title, setImg2Title] =useState([])
    const [img3Title, setImg3Title] =useState([])



    useEffect(() => {
             
            axios.get(`https://api.nasa.gov/planetary/apod?api_key=70RsLTRueVyts0FPjdGIT8uYemieZOOBShWPnb7G&date=${dates[0]}`)
            .then(res =>{    
                setImg1Url(res.data.url)
                setImg1Title(res.data.title)
            })
            
            axios.get(`https://api.nasa.gov/planetary/apod?api_key=70RsLTRueVyts0FPjdGIT8uYemieZOOBShWPnb7G&date=${dates[1]}`)
            .then(res =>{    
                setImg2Url(res.data.url)
                setImg2Title(res.data.title)

            })            
            
            axios.get(`https://api.nasa.gov/planetary/apod?api_key=70RsLTRueVyts0FPjdGIT8uYemieZOOBShWPnb7G&date=${dates[2]}`)
            .then(res =>{    
                setImg3Url(res.data.url)
                setImg3Title(res.data.title)

            })            

    }, [])
    
    return (
        <Card.Group centered itemsPerRow={3}>            
            <Card>
                <Card.Header>{img1Title}</Card.Header>
                <Image src={img1Url} wrapped ui={false} />
            </Card>

            <Card>
                <Card.Header>{img2Title}</Card.Header>
                <Image src={img2Url} wrapped ui={false} />
            </Card>            
            
            <Card>
                <Card.Header>{img3Title}</Card.Header>
                <Image src={img3Url} wrapped ui={false} />
            </Card>
        </Card.Group>
    )
}
export default PhotoGallery