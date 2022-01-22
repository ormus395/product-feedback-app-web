import React from "react";
import Pill from "../Pill/Pill";
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
    <div className="suggestion">
      <h4>{suggestion.title}</h4>
      <div>
        <p>{suggestion.body}</p>
        <Pill>{suggestion.type}</Pill>
      </div>
      <div>
        <span className="pill">{suggestion.voteCount}</span>
      </div>
      <div>
        <span className="pill">{suggestion.commentCount}</span>
      </div>
    </div>
  );
}

export default Suggestion;
