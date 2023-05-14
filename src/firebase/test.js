import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firestore = firebase.firestore();

firestore.collection('users').doc('C1c5vDMhvYBhSjt74sJ1').collection('cartItems').doc('ffQIwK7s4tNRW0kmD5if');
firestore.doc('/users/C1c5vDMhvYBhSjt74sJ1/cartItems/ffQIwK7s4tNRW0kmD5if');
firestore.collection('/users/C1c5vDMhvYBhSjt74sJ1/cartItems')