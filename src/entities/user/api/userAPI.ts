import {
	EmailAuthProvider,
	GoogleAuthProvider,
	User,
	createUserWithEmailAndPassword,
	deleteUser,
	getRedirectResult,
	reauthenticateWithCredential,
	signInWithEmailAndPassword,
	signInWithPopup,
	signInWithRedirect,
	updateEmail,
	updateProfile,
	verifyBeforeUpdateEmail
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

export const changeEmail = async (email: string, user: User) => {
	let isChange: boolean = true;
	let isAuth: boolean = true;

	await verifyBeforeUpdateEmail(user, email)
		.then(() => {
			console.log("Verification is sented");
		})
		.catch(error => {
			console.log(error);
			isAuth = false;
		});

	if (isAuth)
		await updateEmail(user, email)
			.then(() => {
				console.log("Email is changed");
			})
			.catch(error => {
				console.log(error);
				isChange = false;
			});
	// else {
	// 	const credential = EmailAuthProvider.credential(
	// 		user.accessToken
	// 	);
	// 	await reauthenticateWithCredential(user, credential)
	// 		.then(() => {
	// 			// User re-authenticated.
	// 		})
	// 		.catch(error => {
	// 			// An error ocurred
	// 			// ...
	// 		});
	// }
	return [isAuth, isChange];
};

export const changeName = async (name: string, user: User) => {
	let isChange: boolean = true;

	await updateProfile(user, {
		displayName: name
	})
		.then(() => {
			console.log("Name is changed");
		})
		.catch(error => {
			console.log(error);
			isChange = false;
		});

	return isChange;
};

export const delUser = async (user: User) => {
	let isDelete: boolean = true;

	await deleteUser(user)
		.then(() => {
			console.log("User deleted");
		})
		.catch(error => {
			console.log(error);
			isDelete = false;
		});

	return isDelete;
};
