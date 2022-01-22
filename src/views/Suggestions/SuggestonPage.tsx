import Container from "../../components/Layout/Container/Contianer";
import Suggestion from "../../components/Suggestion/Suggestion";

function SuggestionsPage() {
  const suggestions = [
    {
      title: "test",
      body: "this is a suggestion about stuff",
      voteCount: 10,
      commentCount: 2,
      type: "UI",
    },
  ];

  const sugs = suggestions.map((s) => <Suggestion suggestion={s} />);
  return <Container>{sugs}</Container>;
}

export default SuggestionsPage;
