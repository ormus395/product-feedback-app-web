import "./form.css";

type FormProps = {
  handleSubmit: any;
  children: any;
};

const Form = ({ handleSubmit, children }: FormProps) => {
  return (
    <form className="form" onSubmit={handleSubmit}>
      {children}
    </form>
  );
};

export default Form;
