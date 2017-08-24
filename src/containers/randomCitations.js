import React from 'react';
import citations from '../data/citations'

class RandomCitations extends React.Component{
  constructor(){
    super();
    //this.handleChangeNum = this.handleChangeNum.bind(this)

  }

  render(){
    const num = this.props.citations
    return (
      <div>
        <p id="citation">{citations['citation'+num]["citation"]}</p>
        <span>- Auteur : {citations['citation'+num]["auteur"]} -</span><br/>
        <button onClick={this.props.onClick}>Nouvelle citation</button>
      </div>
    )
  }
}
export default RandomCitations;
