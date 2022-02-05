import "./suggestionbar.css";
import Button from "../Button/Button";
import DropDown from "../DropDown/DropDown";
import Flex from "../Layout/Flex/Flex";
import { Link } from "react-router-dom";
/*

The suggestion bar will have a dropdown sort by component
and the default button

*/
const SuggestionBar = () => {
  const options: string[] = [
    "Most Upvotes",
    "Least Upvotes",
    "Most Comments",
    "Least Comments",
  ];
  return (
    <div className="suggestion-bar">
      <Flex>
        <div className="suggestion-bar__count">
          <span>ICON</span>
          <p>{0} Suggestions</p>
        </div>
        <DropDown options={options} selectDefault={options[0]} />
        <Button
          onClick={() => console.log("this will route to a form someday")}
        >
          <Link to="/new-suggestion">+ Add Suggestion</Link>
        </Button>
      </Flex>

      {/* filter/ dropdown component */}
    </div>
  );
};

export default SuggestionBar;
