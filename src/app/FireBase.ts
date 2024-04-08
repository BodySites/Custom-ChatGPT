// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: String(import.meta.env.VITE_API_KEY),
	authDomain: String(import.meta.env.VITE_AUTH_DOMAIN),
	projectId: String(import.meta.env.VITE_PROJECT_ID),
	storageBucket: String(import.meta.env.VITE_STORAGE_BUCKET),
	messagingSenderId: String(import.meta.env.VITE_MESSAGING_SENDER_ID),
	appId: String(import.meta.env.VITE_APP_ID),
	measurementId: String(import.meta.env.VITE_MEASUREMENT_ID)
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
