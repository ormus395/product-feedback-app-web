import React, { useEffect } from "react";

import SuggestionsPage from "./views/Suggestions/SuggestonPage";
import Button from "./components/Button/Button";
function App() {
  useEffect(() => {
    fetch("http://localhost:5000/comments/3")
      .then((response) => {
        return response.json();
      })
      .then((jsonResponse) => {
        console.log(jsonResponse);
      });
  });
  return (
    <div className="App">
      <Button>+ Add Suggestion</Button>
    </div>
  );
}

export default App;
