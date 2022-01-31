import React from "react";
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

function ProductPage() {
  const suggestions = mockSuggestions.map((s) => <Suggestion suggestion={s} />);
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
