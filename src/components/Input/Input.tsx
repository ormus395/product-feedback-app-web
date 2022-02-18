import "./input.css";

type InputProps = {
  name?: string;
  type?: string;
  handleChange: any;
  placeholder?: string;
  value?: string;
};

const Input = (props: InputProps) => {
  return <input type={props.type} onChange={props.handleChange} />;
};

export default Input;
