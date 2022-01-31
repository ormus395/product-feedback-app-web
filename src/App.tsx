import React, { useEffect } from "react";

import Button from "./components/Button/Button";
import DropDown from "./components/DropDown/DropDown";
import SuggestionBar from "./components/SuggestionBar/SuggestionBar";
import ProductCards from "./components/ProductCards/ProductCard";
import ProductPage from "./pages/Products/ProductPage";

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
      <ProductPage />
    </div>
  );
}

export default App;
