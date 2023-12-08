import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyC6P35XVI3ubXOO1g50L3zkNF8MD9v2bhM',
  authDomain: 'final-project-9c3f0.firebaseapp.com',
  projectId: 'final-project-9c3f0',
  storageBucket: 'final-project-9c3f0.appspot.com',
  messagingSenderId: '584414452801',
  appId: '1:584414452801:web:8321dee6b2da2aa434fac0',
  measurementId: 'G-8K7M8TS18L',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);

export const registerWithEmailAndPassword = async (email: string, password: string) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, 'users'), {
      uid: user.uid,
      authProvider: 'local',
      email,
    });
  } catch (err) {
    if (err instanceof Error) {
      console.error(err);
      alert(err.message);
    }
  }
};

export const logInWithEmailAndPassword = async (email: string, password: string) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    if (err instanceof Error) {
      console.error(err);
      alert(err.message);
    }
  }
};

export const logout = () => {
  signOut(auth);
};
