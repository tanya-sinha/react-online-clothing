import { ShopActionTypes } from './shop.types';
import { firestore,convertCollectionsSnapshotMap } from '../../firebase/firebase.utils';

export const fetchCollectionStart = (collectionMap) => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionSuccess = (collectionMap) => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload:collectionMap
});

export const fetchCollectionFailure = errorMessage => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload:errorMessage
});

export const fetchCollectionStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionStart());

        collectionRef.get().then(snapshop => {
            const collectionMap = convertCollectionsSnapshotMap(snapshop);
            dispatch(fetchCollectionSuccess(collectionMap));
          }).catch(error => dispatch(fetchCollectionFailure(error)))
    }
}