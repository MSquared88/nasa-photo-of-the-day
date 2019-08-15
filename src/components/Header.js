import React,{useState, useEffect} from 'react'
import { Header, Image } from 'semantic-ui-react'
import axios from 'axios'
import 'semantic-ui-css/semantic.min.css'

function HeaderComponent() {
    const [apodImg, setApodImg] = useState([])
    const [apodTitle, setApodTitle] = useState([])
    const [apodDesc, setApodDesc] = useState([])
    useEffect(() => {
        axios
        .get('https://api.nasa.gov/planetary/apod?api_key=70RsLTRueVyts0FPjdGIT8uYemieZOOBShWPnb7G&hd=true')
        .then(res =>{
            setApodImg(res.data.url)
            setApodTitle(res.data.title)
            setApodDesc(res.data.explanation)
        })
    }, [])
    return (
  <div>
    <Header as='h2' icon textAlign='center'>{apodTitle}<Header/>
    <Image centered size='massive' src={apodImg} />
    <Header.Content>{apodDesc}</Header.Content>
    </Header>
  </div>
  )
}

export default HeaderComponent

