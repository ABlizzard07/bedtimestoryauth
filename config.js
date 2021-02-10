import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyAJp9-wk5IrVN7r40aQN8rMjlWS8hN-vLY",
    authDomain: "storyhub-e0ceb.firebaseapp.com",
    projectId: "storyhub-e0ceb",
    storageBucket: "storyhub-e0ceb.appspot.com",
    messagingSenderId: "609789796541",
    appId: "1:609789796541:web:c75166bc71e852126157d4"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();