import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Container from "../../../components/Layout/Container/Contianer";
import AuthContext from "../../../context/authContext";
import CreateProductForm from "./CreateProductForm";

type SuggestionTypes = {
	title: string;
};

type ProductValues = {
	title: string;
	suggestionTypes: SuggestionTypes[];
};

function CreateProductPage() {
	const authContext = useContext(AuthContext);
	const navigate = useNavigate();

	const handleSubmit = (productValues: ProductValues) => {
		fetch("http://localhost:5000/products", {
			method: "POST",
			mode: "cors",
			headers: {
				Authorization: `Bearer ${authContext.token}`,
				"Content-Type": "application/json",
			},
			body: JSON.stringify(productValues),
		})
			.then((response) => {
				console.log(response);
				if (response.status === 200 || response.status === 201) {
					alert("Product created successfully");
					navigate("/dashboard");
				} else if (response.status === 401) {
					navigate("/login");
				}
			})
			.catch((err) => {
				console.log(err);
				navigate("/login");
			});
	};
	return (
		<>
			<Container>
				<h1>I am the create product page</h1>
				<CreateProductForm handleSubmit={handleSubmit} />
			</Container>
		</>
	);
}

export default CreateProductPage;
