import "./input.css";

type InputProps = {
	name?: string;
	type?: string;
	handleChange: any;
	placeholder?: string;
	value?: string;
	onBlur?: any;
};

const Input = ({ handleChange, ...rest }: InputProps) => {
	return <input {...rest} onChange={handleChange} />;
};

export default Input;
