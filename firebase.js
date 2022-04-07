// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

import "firebase/compat/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBa_UHxw1N4NePEi37NnMd0RVZo2oj6PNU",
  authDomain: "pokemon-d3e43.firebaseapp.com",
  projectId: "pokemon-d3e43",
  storageBucket: "pokemon-d3e43.appspot.com",
  messagingSenderId: "423804622832",
  appId: "1:423804622832:web:03eaf1e43a3fe83b4d2f35",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();
const db = app.firestore();

export { auth };

export const addUserData = (id, name, age, gender, profilePic) => {
  db.collection("pokeDB")
    .doc(id)
    .set({
      uid: id,
      name: name,
      age: age,
      gender: gender,
      profilePic: profilePic,
    })
    .then(() => console.log("Success"))
    .catch((err) => console.log(err));
};

export const getUserData = async (getUserData) => {
  let userArr = [];

  let userVar = await db.collection("pokeDB").get();

  userVar.forEach((ob) => {
    userArr.push(ob.data());
  });

  // console.log("The Log: ", userArr);

  getUserData(userArr);
};
