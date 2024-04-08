import {
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	getRedirectResult,
	signInWithEmailAndPassword,
	signInWithPopup,
	signInWithRedirect
} from "firebase/auth";
import { auth, provider } from "../../../app/FireBase";

export const createUser = async (email: string, password: string) => {
	let isCreated: boolean = true;

	await createUserWithEmailAndPassword(auth, email, password)
		.then(userCredential => {
			// Signed up
			const data = userCredential.user;
			console.log(data);
		})
		.catch(error => {
			const errorCode = error.code;
			const errorMessage = error.message;
			console.log(errorCode, errorMessage);
			isCreated = false;
		});

	return isCreated;
};

export const signInGooglePopup = async () => {
	let isAuth: boolean = true;

	await signInWithPopup(auth, provider)
		.then(result => {
			// This gives you a Google Access Token. You can use it to access the Google API.
			const credential = GoogleAuthProvider.credentialFromResult(result);
			const token = credential?.accessToken;
			// The signed-in user info.
			const user = result.user;
			console.log(user, token);
		})
		.catch(error => {
			// Handle Errors here.
			const errorCode = error.code;
			const errorMessage = error.message;
			// The email of the user's account used.
			const email = error.customData.email;
			// The AuthCredential type that was used.
			const credential = GoogleAuthProvider.credentialFromError(error);
			console.log(errorCode, errorMessage, email, credential);
			isAuth = false;
		});

	return isAuth;
};

export const signInGoogleRedirect = () => {
	signInWithRedirect(auth, provider);
};

export const getResultRedirect = async () => {
	let isAuth: boolean = true;

	await getRedirectResult(auth)
		.then(result => {
			// This gives you a Google Access Token. You can use it to access Google APIs.
			const credential =
				result && GoogleAuthProvider.credentialFromResult(result);
			const token = credential?.accessToken;
			// The signed-in user info.
			const user = result?.user;
			console.log(user, token);
		})
		.catch(error => {
			// Handle Errors here.
			const errorCode = error.code;
			const errorMessage = error.message;
			// The email of the user's account used.
			const email = error.customData.email;
			// The AuthCredential type that was used.
			const credential = GoogleAuthProvider.credentialFromError(error);
			console.log(errorCode, errorMessage, email, credential);
			isAuth = false;
		});

	return isAuth;
};

export const authUser = async (email: string, password: string) => {
	let isAuth: boolean = true;

	await signInWithEmailAndPassword(auth, email, password)
		.then(userCredential => {
			// Signed in
			const user = userCredential.user;
			console.log(user);
		})
		.catch(error => {
			const errorCode = error.code;
			const errorMessage = error.message;
			console.log(errorCode, errorMessage);
			isAuth = false;
		});

	return isAuth;
};
