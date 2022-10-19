import React from "react";

export default function Phonetic(props) {
  if (props.phonetic.audio !== "") {
    return (
      <div className="phonetic">
        <a href={props.phonetic.audio} target="_blank">
          Listen
        </a>
        <p>{props.phonetic.text}</p>
      </div>
    );
  } else {
    return null;
  }
}
