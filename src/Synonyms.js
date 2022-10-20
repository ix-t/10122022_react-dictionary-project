import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="synonyms">
        <ul>
          <li>{props.synonyms}</li>
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
