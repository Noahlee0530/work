import React from 'react';
import {ImageContainer} from '../styled/Pixabaycss'
import Masonry from 'react-masonry-css';
import GalleyItem from './GalleyItem';




const GalleyList = ({data}) => {
    return (
        <ImageContainer>
           <Masonry
                breakpointCols={3}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">
                {/* array of JSX items */}
                {
                    data.map(item=><GalleyItem key={item.id} item={item}/>)
                }


            </Masonry>
        </ImageContainer>
    );
};

export default GalleyList;