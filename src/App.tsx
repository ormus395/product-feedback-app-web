import React, { useEffect } from "react";

import SuggestionsPage from "./views/Suggestions/SuggestonPage";

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
      <SuggestionsPage />
    </div>
  );
}

export default App;
