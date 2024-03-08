export const validEmail = (email: string) => {
	const valid = email.match(/^[A-Z0-9._%+-]+@[A-Z0-9]+.[A-Z]{2,4}$/i);
	return valid ? true : false;
};

export const validPassword = (password: string) => {
	const valid = password.match(/^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,}$/);
	return valid ? true : false;
};

export const requireListPassword = [
	"Contains at least 8 letters",
	"Contains at least one uppercase letter",
	"Contains at least one lowercase letter",
	"Contains at least one number"
];

export const validRequireList = (text: string) => {
	let valid: Array<Boolean> = [false, false, false, false];
	valid = valid.map((_item, index) => {
		switch (index) {
			case 0:
				if (text.length >= 8) return true;
				else return false;
			case 1:
				if (text.match(/[A-Z]+/)) return true;
				else return false;
			case 2:
				if (text.match(/[a-z]+/)) return true;
				else return false;
			case 3:
				if (text.match(/[0-9]+/)) return true;
				else return false;
			default:
				break;
		}
		return true;
	});
	return valid;
};

export const equalPasswords = (passwordOne: string, passwordTwo: string) => {
	return passwordOne === passwordTwo ? true : false;
};
