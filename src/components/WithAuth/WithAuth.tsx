import { Link, Routes, Route, Outlet } from "react-router-dom";
import AuthContext from "../../context/authContext";
import Dashboard from "../../pages/Dashboard/Dashboard";
import ProductPage from "../../pages/Products/ProductPage";
import AddSuggestionForm from "../../pages/Suggestion/AddSuggestionForm";
import FourOhFour from "../../pages/404/404";
import Button from "../Button/Button";
import CreateProductPage from "../../pages/Dashboard/CreateProduct/CreateProductPage";

function WithAuth() {
	return (
		<AuthContext.Consumer>
			{(value) => (
				<>
					<nav>
						<Link to="/dashboard">Dashboard</Link>
						<Link to="/product">Product</Link>
						<Link to="/suggestion">Suggestion</Link>
						<Button onClick={value.logout}>Logout</Button>
					</nav>
					<Routes>
						<Route path="dashboard" element={<Dashboard />} />
						<Route
							path="dashboard/create-product"
							element={<CreateProductPage />}
						/>
						<Route path="product/:productId" element={<ProductPage />} />
						<Route path="new-suggestion" element={<AddSuggestionForm />} />
						<Route path="*" element={<FourOhFour />} />
					</Routes>
				</>
			)}
		</AuthContext.Consumer>
	);
}

export default WithAuth;
