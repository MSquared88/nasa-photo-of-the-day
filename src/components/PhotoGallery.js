import React,{useState, useEffect} from 'react';
import axios from 'axios'
import { conditionalExpression } from '@babel/types';
// import PhotoImg from './PhotoImg'

export default function PhotoGallery() {


    const d = new Date();

    const dates = [
        `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate() -1}`,
        `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate() -2}`,
        `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate() -3}`,
        `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate() -4}`,
        `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate() -5}`,
        `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate() -6}`,
    ]

    const imgInfo = {
        imgUrls: [],
        imgTitles: []
    }

    useEffect(() => {
        dates.forEach((date) => {
            axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=70RsLTRueVyts0FPjdGIT8uYemieZOOBShWPnb7G&date=${date}`)
            .then(res =>{
                imgInfo.imgUrls.push(res.data.url)
                imgInfo.imgTitles.push(res.data.title)
            })
        })
    }, [])
    console.log(imgInfo)
    return (
        <div>
            {/* <PhotoImg /> */}
        </div>
    );
};   

