// Creates an app instance of firebase based on config
import { initializeApp } from 'firebase/app';
// Firebase authentication
import { 
  getAuth, 
  signInWithRedirect, 
  signInWithPopup, 
  GoogleAuthProvider,
  createUserWithEmailAndPassword
} from 'firebase/auth';

// doc => document reference
// getDoc => get document data
// setDoc => set document data
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBebkGQXnsdJ7WTwhdAu68ANQrPUENaSLc",
  authDomain: "crwn-clothing-db-80755.firebaseapp.com",
  projectId: "crwn-clothing-db-80755",
  storageBucket: "crwn-clothing-db-80755.appspot.com",
  messagingSenderId: "670705998925",
  appId: "1:670705998925:web:cdd18e737f893e34ba5004"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Google provider for authentication
const googleProvider = new GoogleAuthProvider();

// Google provider config
googleProvider.setCustomParameters({ 
  prompt: 'select_account' 
});

// Get auth instance from firebase
export const auth = getAuth();

// Sign in with google
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, ...metaAuthInfo) => {
  // db name, collection name, unique id { uid }
  console.log('userAuth', userAuth);
  const userDocRef = doc(db, 'users', userAuth.uid)
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...metaAuthInfo
      });
    } catch (error) {
      console.error('Error creating user', error);
    }
  }

  return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
}