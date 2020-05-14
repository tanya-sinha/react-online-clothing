import React from 'react';
import { Route } from 'react-router-dom';
import {connect} from 'react-redux'
import {updateCollections} from '../../redux/shop/shop.actions'
import CollectionOverview from '../../components/collection-overview/collection-overview.component'
import CollectionPage from '../collection/collection.component'
import { firestore,convertCollectionsSnapshotMap } from '../../firebase/firebase.utils';

class ShopPage extends React.Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const {updateCollections} = this.props;
    const collectionRef = firestore.collection('collections');
    collectionRef.onSnapshot(async snapshop => {
      const collectionMap = convertCollectionsSnapshotMap(snapshop);
      updateCollections(collectionMap);
    })
  }

  render(){
    const {match} = this.props;
    return(
      <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
      </div>
    )
  }
};

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionMap => dispatch(updateCollections(collectionMap))
})

export default connect(null,mapDispatchToProps)(ShopPage);