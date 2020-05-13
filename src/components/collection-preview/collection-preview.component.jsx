import React from 'react';
import './collection-preview.style.scss';
import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({title,items}) => (
   <div className='collection-preview'>
    <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {items
            .filter((items,i) => i < 4)
            .map((item) => (
                <CollectionItem key={item.id} item={item} />
            ))}
        </div>
   </div> 
)

export default CollectionPreview;