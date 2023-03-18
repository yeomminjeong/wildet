import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: "pepe-a24db.appspot.com",
  messagingSenderId: "147101878665",
  appId: "1:147101878665:web:5318d5c1870af675e23958",
  measurementId: "G-D4WYNCZZ0Z",
};

const app = initializeApp(firebaseConfig);

export const authService = getAuth(app);
export const storage = getStorage(app);
export default app;
