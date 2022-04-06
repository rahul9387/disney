import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore} from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAznhaXA8sIJ-gk68OkBFMyyVmg0K0HFNY",
  authDomain: "disney-clone-6fb76.firebaseapp.com",
  projectId: "disney-clone-6fb76",
  storageBucket: "disney-clone-6fb76.appspot.com",
  messagingSenderId: "435751277258",
  appId: "1:435751277258:web:6e3c3ffd68ba86b2d75a33",
  measurementId: "G-50VXTCETC2"
};
// Use this to initialize the firebase App
const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider()
const storage = getStorage(firebaseApp);

export { auth, provider, storage, db };