import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyArmxptiZg0F3Euia3Zd-WvgfjYzoUQec0",
  authDomain: "clone-72a7c.firebaseapp.com",
  projectId: "clone-72a7c",
  storageBucket: "clone-72a7c.appspot.com",
  messagingSenderId: "270912135124",
  appId: "1:270912135124:web:ed2534c2216bc55cdf0041",
  measurementId: "G-7WDPEXJ1QQ"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

export { db, auth };