import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBtNR6BrWtpi-ieYsKcqxFIg516GfOCBxw",
    authDomain: "online-shopping-react-db.firebaseapp.com",
    databaseURL: "https://online-shopping-react-db.firebaseio.com",
    projectId: "online-shopping-react-db",
    storageBucket: "online-shopping-react-db.appspot.com",
    messagingSenderId: "173181341949",
    appId: "1:173181341949:web:ad4e80afbe3abe8646ae94",
    measurementId: "G-3T828XD5BC"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch(error) {
            console.log('error creating user', error.message);
        }
    }
    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt : 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
