import { baseUrl } from "../constants";

class UserService {
	baseUrl: string = baseUrl;

	async createUser(user: any) {
		try {
			const response = await fetch(`${baseUrl}/users/signup`, {
				method: "POST",
				mode: "cors",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(user),
			});

			let createdUser = null;

			console.log(response);

			if (response.status === 200 || response.status === 201) {
				createdUser = await response.json();
			} else {
				throw new Error(response.statusText);
			}

			return createdUser;
		} catch (error) {
			throw error;
		}
	}
}

export default UserService;
