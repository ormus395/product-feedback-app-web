import "./button.css";

const Button = ({ type, children }: any) => {
  if (type) {
    // classname derived here
  }
  return <button className="btn">{children}</button>;
};

export default Button;
