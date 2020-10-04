import * as fb from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

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

const firebase = fb.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const loginWithGoogle = () =>
    auth.signInWithPopup(new fb.auth.GoogleAuthProvider());

const getUserDocument = async (uid: string) => {
    if (uid) {
        try {
            const userDocument = await firestore.doc(`users/${uid}`).get();
            return {
                uid,
                ...userDocument.data(),
            } as fb.User;
        } catch (error) {
            // TODO: should be an error notification
            console.error("Error fetching user", error);
        }
    }

    return null;
};

export const generateUserDocument = async (
    user: fb.User,
    additionalData?: Record<string, unknown>
) => {
    if (user) {
        const userRef = firestore.doc(`users/${user.uid}`);
        const snapshot = await userRef.get();
        if (!snapshot.exists) {
            const { email, displayName, photoURL } = user;
            try {
                await userRef.set({
                    displayName,
                    email,
                    photoURL,
                    ...additionalData,
                });
            } catch (error) {
                // TODO: should be an error notification
                console.error("Failed to create user document", error);
            }
        }

        return getUserDocument(user.uid);
    }

    return null;
};
