import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <div className="definition">{definition.definition}</div>
            <div className="example">{definition.example}</div>
          </div>
        );
      })}
      {props.meaning.synonyms.map(function (synonym, index) {
        return (
          <div key={index} className="synonyms">
            <Synonyms synonyms={synonym} />
          </div>
        );
      })}
    </div>
  );
}
