class Validator {
	static isValidEmail(email: string): boolean {
		let isValid: boolean = true;
		if (!email) {
			isValid = false;
		} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
			isValid = false;
		}

		return isValid;
	}
}

export default Validator;
