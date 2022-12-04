import {initializeApp} from 'firebase/app';
import { getFirebaseConfig } from './firebase-config';
import {getFirestore} from 'firebase/firestore';


const firebaseAppConfig = getFirebaseConfig();
const app = initializeApp(firebaseAppConfig);
export const db = getFirestore(app);