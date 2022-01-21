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
  return <div>{sugs}</div>;
}

export default SuggestionsPage;
