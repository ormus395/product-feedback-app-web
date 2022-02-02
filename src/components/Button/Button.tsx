import "./button.css";

type ButtonProps = {
  onClick?: Function;
  type?: string;
  children: any;
};

const Button: React.FC<ButtonProps> = ({ onClick, type, children }) => {
  let typeClass: string = "";
  if (type) {
    // classname derived here
    switch (type) {
      case "dropdown":
        typeClass = "btn--dropdown";
    }
  }
  return (
    <button
      onClick={onClick ? () => onClick() : undefined}
      className={`btn ${typeClass}`}
    >
      {children}
    </button>
  );
};

export default Button;
