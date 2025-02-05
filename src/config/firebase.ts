import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCGhcuxzt_dt6tD-EPceK5WNgTPdAXJvCE",
  authDomain: "lexishift-8c513.firebaseapp.com",
  projectId: "lexishift-8c513",
  storageBucket: "lexishift-8c513.firebasestorage.app",
  messagingSenderId: "180816635620",
  appId: "1:180816635620:web:a76908471fc65e2c806ef1",
  measurementId: "G-J8XLHM911E"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);