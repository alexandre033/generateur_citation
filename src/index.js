import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import RandomCitations from './containers/randomCitations';
import RandomCitationsComponent from './components/_randomCitations'
import citations from './data/citations';

class Index extends React.Component{
  constructor(){
    super();
    this.state = {numCitation : 1};
    this.handleChangeNum = this.handleChangeNum.bind(this)
  }

  handleChangeNum = () => {
    const citationNum = Math.round(Math.random()*10)
    this.setSate({numCitation : 2})
  }

  render(){
    return (
      <div>
        <RandomCitations onClick={this.handleChangeNum} citations={this.state.numCitation} />
      </div>

    )
  }
}

ReactDOM.render(<Index/>, document.getElementById('app'))
