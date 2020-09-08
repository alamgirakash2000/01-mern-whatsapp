import firebase from "firebase";

let firebaseConfig = {
  apiKey: "AIzaSyAb3cpSTQi5513KNEX0jCRAzdMS2nqtcpA",
  authDomain: "whatsapp-mern-bdc85.firebaseapp.com",
  databaseURL: "https://whatsapp-mern-bdc85.firebaseio.com",
  projectId: "whatsapp-mern-bdc85",
  storageBucket: "whatsapp-mern-bdc85.appspot.com",
  messagingSenderId: "973627279007",
  appId: "1:973627279007:web:f70a667e51b115a57784aa",
  measurementId: "G-MCDNTVHVNE",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
