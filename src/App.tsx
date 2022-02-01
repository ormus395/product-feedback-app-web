import React, { useEffect } from "react";

import { Link, Route, Routes } from "react-router-dom";

import Button from "./components/Button/Button";
import DropDown from "./components/DropDown/DropDown";
import SuggestionBar from "./components/SuggestionBar/SuggestionBar";
import ProductCards from "./components/ProductCards/ProductCard";
import ProductPage from "./pages/Products/ProductPage";
import FourOhFour from "./pages/404/404";
import Dashboard from "./pages/Dashboard/Dashboard";

// when the app mounts look for jwt
// if jwt, is it active?
// if active dump to dashboard
// if not prompt user to login
// if no jwt route to landing
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
      <nav>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/product">Product</Link>
        <Link to="/suggestion">Suggestion</Link>
      </nav>
      <Routes>
        <Route path="/" element={() => <h1>Landing</h1>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/product/:productId" element={<ProductPage />} />
        <Route path="*" element={<FourOhFour />} />
      </Routes>
    </div>
  );
}

export default App;
