import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCDQc9YKQMoXd6oQowJmx2ZPOUiwngC6kE",
    authDomain: "wallet-bb7bf.firebaseapp.com",
    projectId: "wallet-bb7bf",
    storageBucket: "wallet-bb7bf.appspot.com",
    messagingSenderId: "507362381744",
    appId: "1:507362381744:web:2af5c77272415669cb5075",
    measurementId: "G-6MCZSGDR0H"
};

const fire = firebase.initializeApp(firebaseConfig)

export default fire;
