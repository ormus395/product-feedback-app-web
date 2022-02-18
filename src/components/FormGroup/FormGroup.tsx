import "./form-group.css";
import Flex from "../Layout/Flex/Flex";

const FormGroup = ({ children }: any) => {
  return (
    <div className="form-group">
      <Flex className="form-group" direction="column">
        {children}
      </Flex>
    </div>
  );
};

export default FormGroup;
