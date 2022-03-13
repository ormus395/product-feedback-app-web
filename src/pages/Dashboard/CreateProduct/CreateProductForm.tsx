import { useFormik } from "formik";
import Form from "../../../components/Form/Form";
import Input from "../../../components/Input/Input";
import FormGroup from "../../../components/FormGroup/FormGroup";
import Container from "../../../components/Layout/Container/Contianer";
import Button from "../../../components/Button/Button";
/*

Initial suggestion form values
    title: string
    suggestion type
    suggestion body
*/

type Errors = {
	title?: string;
};

const validate = (values: any) => {
	const errors: Errors = {};
	if (!values.title) {
		errors.title = "Required";
	} else if (values.title.length > 15) {
		errors.title = "Title must be 15 characters or less.";
	}
};

const CreateProductForm = ({ handleSubmit }: any) => {
	const formik = useFormik({
		initialValues: {
			title: "",
			suggestionTypes: [{ title: "" }],
		},
		validate,
		onSubmit: (values) => {
			handleSubmit(values);
		},
	});

	const push = () => {
		console.log("pushed");
		let oldValues = formik.values;
		let newValues = {
			...oldValues,
			suggestionTypes: [...formik.values.suggestionTypes, { title: "" }],
		};
		formik.setValues(newValues);
	};

	return (
		<Container>
			<Form handleSubmit={formik.handleSubmit}>
				<h2>Create New Product</h2>
				<FormGroup>
					<label htmlFor="title">Product Title</label>
					<p>Add a short descriptive title</p>
					<Input
						name="title"
						type="text"
						handleChange={formik.handleChange}
						value={formik.values.title}
					/>
				</FormGroup>
				<FormGroup>
					<label htmlFor="">Suggestion Types</label>
					<Container>
						{formik.values.suggestionTypes.map((suggestionType, index) => (
							<FormGroup key={index}>
								<label htmlFor="suggestionType">Suggestion Type</label>
								<Input
									name={`suggestionTypes.${index}.title`}
									type="text"
									handleChange={formik.handleChange}
									value={formik.values.suggestionTypes[index].title}
								/>
							</FormGroup>
						))}
						<Button flavor="two" type="button" onClick={push}>
							Add suggestion type
						</Button>
					</Container>
				</FormGroup>

				<FormGroup>
					<Button type="submit">Add Product</Button>
				</FormGroup>
				<FormGroup>
					<Button type="reset" flavor="cancel">
						Cancel
					</Button>
				</FormGroup>
			</Form>
		</Container>
	);
};

export default CreateProductForm;
