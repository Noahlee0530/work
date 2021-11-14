import React, { useState } from 'react';
import { ImageForm } from '../styled/Pixabaycss';

const GalleySearch = ({searchText}) => {

    const [text,setText] = useState()

    const onSubmit = (evt) =>{
        evt.preventDefault()
        searchText(text)


    }
    
    return (
        <ImageForm onSubmit={onSubmit}>
            <input type='text' placeholder='검색어를 입력하세요'
            value={text} onChange={evt=>setText(evt.target.value)}/>
            <button type='submit'>검색</button>
        </ImageForm>
    );
};

export default GalleySearch;