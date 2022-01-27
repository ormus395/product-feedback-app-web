import React, { useEffect } from "react";

import SuggestionsPage from "./views/Suggestions/SuggestonPage";
import Button from "./components/Button/Button";
import DropDown from "./components/DropDown/DropDown";
import SuggestionBar from "./components/SuggestionBar/SuggestionBar";
import ProductCard from "./components/ProductCard/ProductCard";
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
      <ProductCard type="title" />
    </div>
  );
}

export default App;
