import { useFormik } from "formik";

/*

Initial suggestion form values
    title: string
    suggestion type
    suggestion body
*/

const AddSuggestionForm = () => {
  const formik = useFormik({
    initialValues: {
      title: "",
      suggestionType: "",
      suggestionBody: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.title}
        />

        <label htmlFor="suggestionType">Category</label>
        <select
          name="suggestionType"
          id="suggestionType"
          value={formik.values.suggestionType}
          onChange={formik.handleChange}
        >
          <option>Test</option>
        </select>
      </form>
    </div>
  );
};

export default AddSuggestionForm;
