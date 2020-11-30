  import firebase from 'firebase';
  import 'firebase/firestore';
  
  const firebaseConfig = {
    apiKey: "AIzaSyAewImp7p-TIASDpbTWwql931homyPG7WM",
    authDomain: "colecionaveisfb-dc267.firebaseapp.com",
    databaseURL: "https://colecionaveisfb-dc267.firebaseio.com",
    projectId: "colecionaveisfb-dc267",
    storageBucket: "colecionaveisfb-dc267.appspot.com",
    messagingSenderId: "1092462708273",
    appId: "1:1092462708273:web:764502239df095d5c7f710",
    measurementId: "G-ZYLYDP8BYP"
  };
 
 var app = firebase.initializeApp(firebaseConfig);

 export const conexaoFS = app.firestore();