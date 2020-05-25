import {takeLatest, call,put,all} from 'redux-saga/effects';
import {ShopActionTypes} from './shop.types';
import { firestore,convertCollectionsSnapshotMap } from '../../firebase/firebase.utils';
import {fetchCollectionSuccess,fetchCollectionFailure} from './shop.actions';

export function* fetchCollectionsAsync() {
    try {
        const collectionRef = firestore.collection('collections');
        const snapshop = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionsSnapshotMap, snapshop);
        yield put(fetchCollectionSuccess(collectionsMap));
    }catch (error) {
        yield put(fetchCollectionFailure(error.message));
    }
}

export function* fetchCollectionsStart() {
    yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START,fetchCollectionsAsync)
}

export function* shopSagas() {
    yield all([call(fetchCollectionsStart)])
}