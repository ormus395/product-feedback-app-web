import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";

const NoFeedBack = () => {
  return (
    <div>
      <h2>There is no feedback yet.</h2>
      <p>
        Do you have a suggestion? Found a bug that needs to be squashed? We love
        hearing about suggestions and new ideas on our app.
      </p>
      <Button>
        <Link to="/new-suggestion">+ Add Suggestion</Link>
      </Button>
    </div>
  );
};

export default NoFeedBack;
