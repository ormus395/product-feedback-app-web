import React from "react";
import { useNavigate } from "react-router-dom";
import Container from "../../components/Layout/Container/Contianer";
import { AuthService } from "../../services/authService";
import LoginForm from "./LoginForm";

// login
// submit email and password
// get response from server, on successful login, navigate to
function LoginPage() {
	const authService = new AuthService();
	const navigate = useNavigate();

	const handleLogin = (userInfo: any) => {
		// login user using auth service
		// navigate to dashboard and reload window
		authService
			.login(userInfo)
			.then((accessToken) => {
				// should return access token
				navigate("/dashboard");
				window.location.reload();
			})
			.catch((err) => {
				if (err) {
					alert("Email or Password was incorrect.");
				}
			});
	};
	return (
		<div>
			<Container>
				<h1>I am the login page</h1>
				<LoginForm handleLogin={handleLogin} />
			</Container>
		</div>
	);
}

export default LoginPage;
