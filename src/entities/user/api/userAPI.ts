import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword
} from "firebase/auth";
import { auth } from "../../../app/FireBase";

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
