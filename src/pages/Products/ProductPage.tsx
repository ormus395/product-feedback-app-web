import "./products-page.css";
import React, { useEffect, useState } from "react";
import SuggestionBar from "../../components/SuggestionBar/SuggestionBar";
import ProductCards from "../../components/ProductCards/ProductCard";
import Suggestion from "../../components/Suggestion/Suggestion";
import Container from "../../components/Layout/Container/Contianer";
import HeaderContainer from "../../components/HeaderContainer/HeaderContainer";
import { useParams } from "react-router-dom";

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
  let params = useParams();
  console.log(params.productId);
  const [product, setProduct] = useState<ProductType | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // the product page will have filter function. this will make an api call to the backend to filter
  // on mount call to product api to get initial product info like title, the product suggestion tags
  // then make another call to suggestions endpoint to get suggestion by type, this will limit by ten
  useEffect(() => {
    fetch(`http://localhost:5000/products/${params.productId}`)
      .then((response) => {
        if (response.status === 200) return response.json();
      })
      .then((jsonResponse) => {
        setIsLoaded(true);
        setProduct(jsonResponse);
      })
      .catch((err) => console.log(err));
    if (isLoaded) {
      fetch(`http://localhost:5000/products/3/suggestions?suggestionType=all`)
        .then((response) => {
          if (response.status === 200) {
            return response.json();
          } else {
            console.log("404");
          }
        })
        .then((jsonReponse) => console.log(jsonReponse))
        .catch((err) => console.log(err));
    }
  }, [isLoaded]);

  console.log(product);
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
            {/* <div className="suggestions">{suggestions}</div> */}
          </Container>
        </>
      ) : (
        <h3>Loading</h3>
      )}
    </>
  );
}

export default ProductPage;
