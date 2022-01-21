import React from "react";
/*

A suggestion has a:
    title
    body
    vote count
    comments
*/

type SuggestionProp = {
  suggestion: {
    title: string;
    body: string;
    voteCount: number;
    commentCount: number;
    type: string;
  };
};

function Suggestion({ suggestion }: SuggestionProp) {
  return (
    <div>
      <h4>{suggestion.title}</h4>
      <div>
        <p>{suggestion.body}</p>
        <span>{suggestion.type}</span>
      </div>
    </div>
  );
}

export default Suggestion;
