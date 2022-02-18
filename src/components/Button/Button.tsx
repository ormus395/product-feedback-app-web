import "./button.css";

type ButtonProps = {
  onClick?: Function;
  flavor?: string;
  type?: "button" | "submit" | "reset" | undefined;
  children: any;
};

const Button: React.FC<ButtonProps> = ({ onClick, type, flavor, children }) => {
  let typeClass: string = "";
  if (flavor) {
    // classname derived here
    switch (flavor) {
      case "dropdown":
        typeClass = "btn--dropdown";
        break;
      case "cancel":
        typeClass = "btn--cancel";
    }
  }
  return (
    <button
      onClick={onClick ? () => onClick() : undefined}
      className={`btn ${typeClass}`}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
