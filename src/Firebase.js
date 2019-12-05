import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: 'AIzaSyChWAl396E1upbgDHtVUedYyrVxYM8vWUg',
  authDomain: 'goversal-47791.firebaseapp.com',
  databaseURL: 'https://goversal-47791.firebaseio.com',
  projectId: 'goversal-47791',
  storageBucket: 'goversal-47791.appspot.com',
  messagingSenderId: '660185230531',
  appId: '1:660185230531:web:6e3c1f8b19fedd5dc84676'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
