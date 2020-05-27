import React, {useEffect} from 'react';
import { Route } from 'react-router-dom';
import {connect} from 'react-redux';

import {fetchCollectionStart} from '../../redux/shop/shop.actions';

import CollectionsOverviewContainer from '../../components/collection-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';


// const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
// const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = ({fetchCollectionStart, match}) => {

  useEffect(() => {
    fetchCollectionStart();
  },[fetchCollectionStart])  

  return(
    <div className='shop-page'>
      <Route 
        exact 
        path={`${match.path}`} 
        component={CollectionsOverviewContainer} 
      />
      <Route 
      path={`${match.path}/:collectionId`} 
      component={CollectionPageContainer} />
    </div>
  )
}


// const mapStateToProps = createStructuredSelector({
//   isCollectionFetching : selectIsCollectionFetching,
//   isCollectionLoaded : selectIsCollectionLoaded
// })

const mapDispatchToProps = dispatch => ({
  fetchCollectionStart : () => dispatch(fetchCollectionStart())
})

export default connect(null,mapDispatchToProps)(ShopPage);