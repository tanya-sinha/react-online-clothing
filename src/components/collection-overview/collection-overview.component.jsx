import React from 'react';
import './collection-overview.style.scss';
import CollectionPreview from '../collection-preview/collection-preview.component'

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

const CollectionOverview = ({collections}) => (
    <div className="collections-overview">
        {collections.map(({ id, ...othercollectionprops }) => (
            <CollectionPreview key={id} {...othercollectionprops}/>
        ))}  
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionOverview);