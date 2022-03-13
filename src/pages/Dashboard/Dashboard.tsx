import React, { useContext, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Button from "../../components/Button/Button";
import Container from "../../components/Layout/Container/Contianer";
import AuthContext from "../../context/authContext";

type User = {
	id: number;
	email: string;
	avatarUrl: string | null;
	name: string | null;
};

type Product = {
	title: string;
};

function Dashboard() {
	const authContext = useContext(AuthContext);
	const [products, setProducts] = useState<Product[]>([]);
	const [isLoaded, setIsLoaded] = useState(false);

	let user: any = authContext.user;

	useEffect(() => {
		fetch(`http://localhost:5000/products?userId=${user.id}`)
			.then((resp) => {
				return resp.json();
			})
			.then((jsonResp) => {
				setProducts(jsonResp);
				setIsLoaded(true);
			})
			.catch((err) => console.log(err));
	}, []);

	let layout: any = <h2>Loading...</h2>;

	if (isLoaded) {
		console.log(products);
		if (products.length > 0) {
			layout = products.map((p, index) => (
				<div key={index}>
					<h3>{p.title}</h3>
				</div>
			));
		} else {
			layout = (
				<>
					<h2>You dont seem to have any products.</h2>
					<Link to="/dashboard/create-product">
						<Button>Create a product</Button>
					</Link>
				</>
			);
		}
	}

	return (
		<Container>
			<h1>I am the user Dashboard</h1>
			{layout}
		</Container>
	);
}
export default Dashboard;
