import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider, getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyClAUMIa8JMldARgiZM_eJTpehURJriZtY',
  authDomain: 'blog-authentication-56d77.firebaseapp.com',
  projectId: 'blog-authentication-56d77',
  storageBucket: 'blog-authentication-56d77.appspot.com',
  messagingSenderId: '782420328034',
  appId: '1:782420328034:web:d11282c56572ffcb775b3b',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const storage = getStorage(app);

export default app;
