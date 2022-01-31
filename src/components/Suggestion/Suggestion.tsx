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
        <div className="suggestion-body">
          <h3>{suggestion.title}</h3>
          <p>{suggestion.body}</p>
          <Pill>{suggestion.type}</Pill>
        </div>
        <div className="vote-count">
          <Pill type="upvote">{suggestion.voteCount}</Pill>
        </div>
        <div className="comment-count">
          <Pill>{suggestion.commentCount}</Pill>
        </div>
      </Flex>
    </div>
  );
}

export default Suggestion;
