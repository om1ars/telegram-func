import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDqmwQfMImA__8vLhwU1CUaxNAIeqYPC_8",
  authDomain: "telegram-2265d.firebaseapp.com",
  projectId: "telegram-2265d",
  storageBucket: "telegram-2265d.appspot.com",
  messagingSenderId: "517373055507",
  appId: "1:517373055507:web:dc53acd9a5ec26e91c65e6"
};
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore()
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider};
  export default db;  