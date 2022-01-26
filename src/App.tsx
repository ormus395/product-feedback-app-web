import React, { useEffect } from "react";

import SuggestionsPage from "./views/Suggestions/SuggestonPage";
import Button from "./components/Button/Button";
import DropDown from "./components/DropDown/DropDown";
function App() {
  // useEffect(() => {
  //   fetch("http://localhost:5000/comments/3")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((jsonResponse) => {
  //       console.log(jsonResponse);
  //     });
  // });
  return (
    <div className="App">
      <DropDown
        options={[
          "Most Upvotes",
          "Least Upvotes",
          "Most Comments",
          "Least Comments",
        ]}
        selectDefault="Most Upvotes"
      />
    </div>
  );
}

export default App;
