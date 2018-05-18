import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB8kyWdJZUvIKMIlvWkc5SR6JcGrZwbg5o",
  authDomain: "wes-bos-react-for-beginners.firebaseapp.com",
  databaseURL: "https://wes-bos-react-for-beginners.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
