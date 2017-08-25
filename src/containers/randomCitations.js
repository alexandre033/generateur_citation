import React from 'react';


const RandomCitations = (props) => {
  const num = props.citations
  return (
    <div>
      <p id="citation">{props.data['citation'+num]["citation"]}</p>
      <span>- Auteur : {props.data['citation'+num]["auteur"]} -</span><br/>
      <button onClick={props.onClick}>Découvre un nouvelle citation</button>
    </div>
  )
}

export default RandomCitations;
