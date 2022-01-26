import "./button.css";

const Button = ({ onClick, type, children }: any) => {
  let typeClass: string = "";
  if (type) {
    // classname derived here
    switch (type) {
      case "dropdown":
        typeClass = "btn--dropdown";
    }
  }
  return (
    <button onClick={() => onClick()} className={`btn ${typeClass}`}>
      {children}
    </button>
  );
};

export default Button;
