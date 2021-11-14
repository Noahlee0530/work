import React, { useEffect, useState } from 'react';
import { Container } from '../styled/Pixabaycss';
import axios from 'axios';
import GlobalStyle from '../styled/Global';
import GalleySearch from './GalleySearch';
import GalleyList from './GalleyList';

const Galley = () => {

    const [data,setData] = useState([])
    const [isLoading,setIsLoading] = useState(true)
    const [error,setError] = useState()
    const [text,setText] = useState('')

    useEffect(()=>{

        const API_KEY = '24266032-3848bb98144e49e3f3b1a028f'
        const url = `https://pixabay.com/api/?key=${API_KEY}&q=${text}&image_type=photo`
        console.log(url)
        axios.get(url)
        .then(res=>{
            setData(res.data.hits)
            setIsLoading(false)
            setError('')
        })
        .catch(error=>{
            setData([])
            setIsLoading(true)
            setError('주소가 잘 못 되었습니다')
        })
    
    },[text])

    const searchText = (txt) =>{
        setText(txt)
    }

    

    return (
        <>
            <GlobalStyle/> 
            <Container>
                <GalleySearch searchText={searchText}/>
                {
                    isLoading && data.length===0 &&
                    (<h1>No Image Found</h1>)
                }
                {
                    data && !isLoading &&
                    <GalleyList data={data}/>
                }
                <p>
                    {error ? error : null}
                </p>
                
            </Container>  
        </>
    );
};

export default Galley;