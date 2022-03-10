import { useFormik } from "formik";
import Validator from "../../utils/formikValidators";
import Button from "../../components/Button/Button";
import Form from "../../components/Form/Form";
import FormGroup from "../../components/FormGroup/FormGroup";
import Input from "../../components/Input/Input";

type Errors = {
	email?: string;
	password?: string;
};

function validate(values: any) {
	const errors: Errors = {};

	if (!values.email) {
		errors.email = "Required";
	} else if (!Validator.isValidEmail(values.email)) {
		errors.email = "Not a valid email.";
	}

	if (!values.password) {
		errors.password = "Required";
	}

	return errors;
}

function SignupForm({ handleSignup }: any) {
	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		validate,
		onSubmit: (values) => {
			const user = Object.assign({}, values);
			handleSignup(user);
		},
	});

	return (
		<Form handleSubmit={formik.handleSubmit}>
			<h2>Signup</h2>
			<FormGroup>
				<label htmlFor="email">Email</label>
				<Input
					name="email"
					type="email"
					handleChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.email}
				/>
				{formik.touched.email && formik.errors.email ? (
					<p>{formik.errors.email}</p>
				) : null}
			</FormGroup>

			<FormGroup>
				<label htmlFor="password">Password</label>
				<Input
					name="password"
					type="password"
					handleChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.password}
				/>
				{formik.touched.password && formik.errors.password ? (
					<p>{formik.errors.password}</p>
				) : null}
			</FormGroup>

			<FormGroup>
				<Button>Submit</Button>
			</FormGroup>
		</Form>
	);
}

export default SignupForm;
