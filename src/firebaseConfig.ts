import * as fb from "firebase/app";
import "firebase/analytics";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBrLbPfxVKAqEhLxT8ggyekp0ezm7vHAZI",
    authDomain: "zenapp-de028.firebaseapp.com",
    databaseURL: "https://zenapp-de028.firebaseio.com",
    projectId: "zenapp-de028",
    storageBucket: "zenapp-de028.appspot.com",
    messagingSenderId: "1029640731782",
    appId: "1:1029640731782:web:d2248656bf661ddfc4a507",
    measurementId: "G-X1MRS81GH1",
};

export const firebase = fb.initializeApp(firebaseConfig);
