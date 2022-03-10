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
	suggestionType?: string;
	suggestionBody?: string;
};

const validate = (values: any) => {
	const errors: Errors = {};
	if (!values.title) {
		errors.title = "Required";
	} else if (values.title.length > 15) {
		errors.title = "Title must be 15 characters or less.";
	}

	if (!values.suggestionType) {
		errors.suggestionType = "Required";
	}

	if (!values.suggestionBody) {
		errors.suggestionBody = "Required";
	}
};

const CreateProductForm = () => {
	const formik = useFormik({
		initialValues: {
			title: "",
			suggestionType: "",
			suggestionBody: "",
		},
		validate,
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));
		},
	});
	return (
		<Container>
			<Form handleSubmit={formik.handleSubmit}>
				<h2>Create New Suggestion</h2>
				<FormGroup>
					<label htmlFor="title">Suggestion Title</label>
					<p>Add a short descriptive title</p>
					<Input
						name="title"
						type="text"
						handleChange={formik.handleChange}
						value={formik.values.title}
					/>
				</FormGroup>
				<FormGroup>
					<label htmlFor="suggestionType">Category</label>
					Choose a category for your suggestion
					<select
						name="suggestionType"
						id="suggestionType"
						value={formik.values.suggestionType}
						onChange={formik.handleChange}
					>
						<option>Test</option>
					</select>
				</FormGroup>
				<FormGroup>
					<label htmlFor="suggestionBody">Suggestion Detail</label>
					<p>Provide any specific details on your suggestion</p>
					<textarea
						name="suggestionBody"
						id="suggestionBody"
						cols={30}
						rows={30}
						onChange={formik.handleChange}
						value={formik.values.suggestionBody}
					></textarea>
				</FormGroup>
				<FormGroup>
					<Button type="submit">Add Suggestion</Button>
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
