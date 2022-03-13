import { useFormik } from "formik";
import React from "react";
import Button from "../../components/Button/Button";
import Form from "../../components/Form/Form";
import FormGroup from "../../components/FormGroup/FormGroup";
import Input from "../../components/Input/Input";
import Validator from "../../utils/formikValidators";

type Errors = {
	email?: string;
};

function validate(values: any) {
	const errors: Errors = {};

	if (!values.email) {
		errors.email = "Required";
	} else if (!Validator.isValidEmail(values.email)) {
		errors.email = "Not a valid email.";
	}

	return errors;
}

function LoginForm({ handleLogin }: any) {
	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		validate,
		onSubmit: (values) => {
			let userInfo = Object.assign({}, values);
			handleLogin(userInfo);
		},
	});

	return (
		<Form handleSubmit={formik.handleSubmit}>
			<h2>Login</h2>
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
					value={formik.values.password}
				/>
			</FormGroup>
			<FormGroup>
				<Button type="submit">Submit</Button>
			</FormGroup>
		</Form>
	);
}

export default LoginForm;
