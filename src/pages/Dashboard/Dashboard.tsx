import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  let product = {
    id: 3,
  };
  return (
    <div>
      <h1>I am the user Dashboard</h1>
      <Link to={`/product/${product.id}`}>Specific Product</Link>
    </div>
  );
}
export default Dashboard;
