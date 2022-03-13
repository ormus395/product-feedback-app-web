import React, { useEffect, useState } from "react";
import { AuthService } from "./services/authService";
import { Link, Outlet, Route, Routes, useNavigate } from "react-router-dom";
import AuthContext from "./context/authContext";
import WithAuth from "./components/WithAuth/WithAuth";
import FourOhFour from "./pages/404/404";
import LoginPage from "./pages/Login/LoginPage";
import SignupPage from "./pages/Signup/SignupPage";

type User = {
	email: string;
};

// when the app mounts look for jwt
// if jwt, is it active?
// if active dump to dashboard
// if not prompt user to login
// if no jwt route to landing

// the auth flow could really be two apps to negate
// overcomplicating the front end
// when the app mounts, check for authentication
// if authed and logged in, render the authenticated app
// otherwise render landing page
function App() {
	const authService = new AuthService();
	const [user, setUser] = useState<User | null>(null);
	const [token, setToken] = useState<string | null>(null);
	const navigate = useNavigate();
	// on app mount check if there is a token in storage, have auth service valdiate
	// if no auth, navigate to login, otherwise naviage to dashboard

	useEffect(() => {
		if (!user) {
			authService
				.isAuthenticated()
				.then((user) => {
					if (user) {
						setUser(user);
						setToken(authService.getTokenFromStorage());
					} else {
						navigate("/login");
					}
				})
				.catch((err) => {
					console.log(err);
					navigate("/signup");
				});
		}
	}, [user]);

	const logout = () => {
		authService.logout();
		setUser(null);
		setToken(null);

		navigate("/login");
	};

	return (
		<div className="App">
			{user ? (
				<AuthContext.Provider
					value={{ user: user, token: token, logout: logout }}
				>
					<WithAuth />
				</AuthContext.Provider>
			) : (
				<div className="withoutAuth">
					<nav>
						<Link to="/signup">Singup</Link>
						<Link to="/login">Login</Link>
					</nav>
					<Routes>
						<Route path="/" element={() => <h1>Landing</h1>} />
						<Route path="/login" element={<LoginPage />} />
						<Route path="/signup" element={<SignupPage />} />
						<Route path="*" element={<FourOhFour />} />
					</Routes>
				</div>
			)}
		</div>
	);
}

export default App;
