import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREABSE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
  };



  const app = initializeApp(firebaseConfig);

  const auth = getAuth(app);
  
  export default auth;

























// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: "AIzaSyCba49i1wpXEh8YqEoKEwbU1_r18jrvAA4",
//   authDomain: "e-commerce-resturant.firebaseapp.com",
//   projectId: "e-commerce-resturant",
//   storageBucket: "e-commerce-resturant.appspot.com",
//   messagingSenderId: "514354611633",
//   appId: "1:514354611633:web:1fc8b531f813d3f5e7e990"
// };

// export const app = initializeApp(firebaseConfig);