import React from "react";
import "./suggestion.css";
import Flex from "../Layout/Flex/Flex";
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
      <Flex>
        <div>
          <h4>{suggestion.title}</h4>
          <p>{suggestion.body}</p>
          <Pill>{suggestion.type}</Pill>
        </div>
        <div className="vote-count">
          <span className="pill">{suggestion.voteCount}</span>
        </div>
        <div className="comment-count">
          <span>{suggestion.commentCount}</span>
        </div>
      </Flex>
    </div>
  );
}

export default Suggestion;
