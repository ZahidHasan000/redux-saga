import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyB8UZNzkmRp0ZTPLcQ2PoC8A5m5uXZJBEg",
  authDomain: "crown-db-392e7.firebaseapp.com",
  projectId: "crown-db-392e7",
  storageBucket: "crown-db-392e7.appspot.com",
  messagingSenderId: "462779139692",
  appId: "1:462779139692:web:a18d140f0e8a90101e3a49",
  measurementId: "G-7F09R6T0RR"
};

firebase.initializeApp(config);


export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
  // console.log(snapShot);
};

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {

  // Moving our shop data to firebase
  // export const addCollectionAndDocuments = (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    // console.log(newDocRef);
    batch.set(newDocRef, obj);
  });
  // Moving our shop data to firebase 2
  return await batch.commit();
}

// reason for Bringing shop data to our app
export const convertCollectionsSnapshotToMap = (collections) => {
  // .docs querySnapshot k map krbe
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  });
  // console.log(transformedCollection);

  // Adding shop data to redux
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

//Recreating persistence
export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unSubscribe = auth.onAuthStateChanged(userAuth => {
      unSubscribe();
      resolve(userAuth);
    }, reject)
  })
};

// const firebase = initializeApp(config)
// const analytics = getAnalytics(firebase);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// export const auth = auth();
// export const firestore = firestore();

// google authentication utility
// const provider = new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({ prompt: 'select_account' });
// export const signInWithGoogle = () => auth.signInWithPopup(provider); //reason for Google Sign in into Sagas

// Google Sign in into Sagas
export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
// export default analytics;