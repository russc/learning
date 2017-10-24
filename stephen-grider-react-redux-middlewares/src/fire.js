const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

firebase.initializeApp({
    apiKey: "AIzaSyAAnM2mmmUJMX4DBeMS76DnOJnAAO3-tVE",
    authDomain: "dixon-1fa58.firebaseapp.com",
    projectId: "dixon-1fa58"
});

// Initialize Cloud Firestore through Firebase
export const db = firebase.firestore();

