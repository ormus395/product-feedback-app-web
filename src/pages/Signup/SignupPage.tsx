import { useNavigate } from "react-router-dom";
import Container from "../../components/Layout/Container/Contianer";
import UserService from "../../services/userService";
import SignupForm from "./SignupForm";
// signup page loads the signup form
// calls the createUser
// upon successful user creation, navigate to user dashboard
// also need to

const SignupPage = () => {
	const userService = new UserService();
	const navigate = useNavigate();

	const handleSignup = async (user: any) => {
		userService
			.createUser(user)
			.then((createdUser) => {
				// if user created, navigate to login page
				if (createdUser) navigate("/login");
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div className="signup">
			<Container>
				<h1>Sign up page</h1>
				<SignupForm handleSignup={handleSignup} />
			</Container>
		</div>
	);
};

export default SignupPage;
