import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyBs6WuHVMikmnnTz8_ruingd_9VzldzbBc",
  authDomain: "bunna-c1f9f.firebaseapp.com",
  projectId: "bunna-c1f9f"
}

firebase.initializeApp(config);
export default firebase;

export const auth = firebase.auth();

const googleAuth = new firebase.auth.GoogleAuthProvider();
googleAuth.addScope('email');
googleAuth.addScope('profile');

export { googleAuth }
