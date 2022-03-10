import React, { useEffect, useState } from "react";
import { AuthService } from "./services/authService";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import ProductPage from "./pages/Products/ProductPage";
import AddSuggestionForm from "./pages/Suggestion/AddSuggestionForm";
import FourOhFour from "./pages/404/404";
import Dashboard from "./pages/Dashboard/Dashboard";
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
			authService.isAuthenticated().then((user) => {
				if (user) {
					setUser(user);
				} else {
					navigate("/login");
				}
			});
		}
	}, [user]);

	const handleLogin = () => {
		// this function will handl;e the login state, set the user after successfull login and rerender app
	};

	const handleLogout = () => {
		// this function will clear local storage, clear user state, and navigate user back to login form
	};

	const handleSignup = () => {
		// this function will handle succeful signup, set user, and set token
	};

	return (
		<div className="App">
			{user ? (
				<div className="withAuth">
					<nav>
						<Link to="/dashboard">Dashboard</Link>
						<Link to="/product">Product</Link>
						<Link to="/suggestion">Suggestion</Link>
					</nav>
					<Routes>
						<Route path="/" element={() => <h1>Landing</h1>} />
						<Route path="/dashboard" element={<Dashboard />} />
						<Route path="/product/:productId" element={<ProductPage />} />
						<Route path="/new-suggestion" element={<AddSuggestionForm />} />
						<Route path="*" element={<FourOhFour />} />
					</Routes>
				</div>
			) : (
				<div className="withoutAuth">
					<nav>
						<Link to="/signup">Singup</Link>
						<Link to="/login">Login</Link>
					</nav>
					<Routes>
						<Route path="/login" element={<LoginPage />} />
						<Route path="/signup" element={<SignupPage />} />
					</Routes>
				</div>
			)}
		</div>
	);
}

export default App;
