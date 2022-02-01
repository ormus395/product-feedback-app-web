import "./products-page.css";
import React, { useEffect, useState } from "react";
import SuggestionBar from "../../components/SuggestionBar/SuggestionBar";
import ProductCards from "../../components/ProductCards/ProductCard";
import Suggestion from "../../components/Suggestion/Suggestion";
import Container from "../../components/Layout/Container/Contianer";
import HeaderContainer from "../../components/HeaderContainer/HeaderContainer";

const mockSuggestions = [
  {
    title: "This is a suggestion",
    body: "This is a suggestion body",
    voteCount: 10,
    commentCount: 5,
    type: "UI",
  },
  {
    title: "This is a suggestion",
    body: "This is a suggestion body",
    voteCount: 10,
    commentCount: 5,
    type: "UI",
  },
  {
    title: "This is a suggestion",
    body: "This is a suggestion body",
    voteCount: 10,
    commentCount: 5,
    type: "UI",
  },
  {
    title: "This is a suggestion",
    body: "This is a suggestion body",
    voteCount: 10,
    commentCount: 5,
    type: "UI",
  },
];

/* 

Products page will make an api call on mount to product with a suggestion default set to most upvotes
this page will have a filter function that will change the filter and update the state by sending the api call

*/
function ProductPage() {
  const [suggestions, setSuggestions] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // the product page will have filter function. this will make an api call to the backend to filter
  useEffect(() => {}, []);
  return (
    <>
      <HeaderContainer>
        <ProductCards
          title="Test"
          suggestionTags={["UI", "UX", "Feature", "Bug", "Enhancement"]}
        />
        <SuggestionBar />
      </HeaderContainer>
      <Container>
        <div className="suggestions">{suggestions}</div>
      </Container>
    </>
  );
}

export default ProductPage;
