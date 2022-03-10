import "./products-page.css";
import React, { useEffect, useState } from "react";
import SuggestionBar from "../../components/SuggestionBar/SuggestionBar";
import ProductCards from "../../components/ProductCards/ProductCard";
import Suggestion from "../../components/Suggestion/Suggestion";
import Container from "../../components/Layout/Container/Contianer";
import HeaderContainer from "../../components/HeaderContainer/HeaderContainer";
import { useParams } from "react-router-dom";
import NoFeedBack from "./NoFeedback";

type SuggestionsType = {
	title: string;
	body: string;
	type: string;
	voteCount: number;
	commentCount: number;
};

type SuggestionType = {
	id: number;
	title: string;
};

type ProductType = {
	id: number;
	title: string;
	suggestionTypes: SuggestionType[];
};

/* 

Products page will make an api call on mount to product with a suggestion default set to most upvotes
this page will have a filter function that will change the filter and update the state by sending the api call

*/
function ProductPage() {
	console.log("rendered");
	let params = useParams();
	console.log(params.productId);
	const [product, setProduct] = useState<ProductType | null>(null);
	const [isProductLoaded, setIsProductLoaded] = useState<boolean>(false);

	const [suggestions, setSuggestions] = useState<SuggestionsType[]>([]);

	// the product page will have filter function. this will make an api call to the backend to filter
	// on mount call to product api to get initial product info like title, the product suggestion tags
	// then make another call to suggestions endpoint to get suggestion by type, this will limit by ten
	useEffect(() => {
		fetch(`http://localhost:5000/products/${params.productId}`)
			.then((response) => {
				if (response.status === 200) return response.json();
				else console.log(response.status);
			})
			.then((jsonResponse) => {
				setIsProductLoaded(true);
				setProduct(jsonResponse);
			})
			.catch((err) => console.log(err));
		if (isProductLoaded) {
			fetch(`http://localhost:5000/products/3/suggestions?suggestionType=all`)
				.then((response) => {
					if (response.status === 200) {
						return response.json();
					} else {
						console.log("404");
					}
				})
				.then((jsonReponse) => setSuggestions(jsonReponse))
				.catch((err) => console.log(err));
		}
	}, [isProductLoaded]);

	let suggestionCards;

	if (suggestions)
		suggestionCards = suggestions.map((s) => <Suggestion suggestion={s} />);
	return (
		<>
			{product ? (
				<>
					<HeaderContainer>
						<ProductCards
							title={product.title}
							suggestionTags={product.suggestionTypes}
						/>
						<SuggestionBar />
					</HeaderContainer>
					<Container>
						{suggestions.length > 1 ? suggestionCards : <NoFeedBack />}
					</Container>
				</>
			) : (
				<h3>Loading</h3>
			)}
		</>
	);
}

export default ProductPage;
