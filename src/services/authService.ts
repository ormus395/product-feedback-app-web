import { baseUrl } from "../constants";

type User = {
	id: number;
	email: string;
};

export class AuthService {
	// this method will extrac the token from local storage,
	async isAuthenticated(): Promise<User | null> {
		// get token from storage
		// if token
		// is it valid
		// if not return false
		let token = await this.getTokenFromStorage();
		console.log(token);
		let user = null;

		if (token) {
			const checkAuth = await fetch("http://localhost:5000/auth/protected", {
				headers: { Authorization: "Bearer " + token },
			});

			if (checkAuth.status === 401) {
				console.log("user is null");
				user = null;
			} else if (checkAuth.status === 200) {
				// fetch user from server
				user = await fetch("http://localhost:5000/auth/profile", {
					headers: { Authorization: "Bearer " + token },
				})
					.then((resp) => {
						if (resp.status === 200) {
							return resp.json();
						} else if (resp.status === 401) {
							return false;
						}
					})
					.then((json) => json);
			} else if (checkAuth.status === 500) {
				throw new Error("Looks like the server failed.");
			}
		}
		// check if token is valid
		// hit the server with the token and check for validation

		return user;
	}

	async getTokenFromStorage(): Promise<string | null> {
		const token = localStorage.getItem("token");

		return token;
	}

	async login(user: any) {
		try {
			const response = await fetch(`${baseUrl}/auth/login`, {
				method: "POST",
				mode: "cors",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(user),
			});

			if (response.status === 200 || response.status === 201) {
				let jsonResponse = await response.json();
				localStorage.setItem("token", jsonResponse.accessToken);
				return jsonResponse;
			} else {
				throw new Error(response.statusText);
			}
		} catch (err) {
			console.log(err);
			throw err;
		}
	}
}
