import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './style.css';
import RandomCitations from './containers/randomCitations';
import citations from './data/citations';

class Index extends React.Component{
  constructor(){
    super();
    this.state = {numCitation : null};
    this.handleChangeNum = this.handleChangeNum.bind(this)
  }
  //On précharge une citation au hasard lorsque la page est ouverte
  componentWillMount(){
    const firstCitation = Math.round(Math.random()*10)
    this.setState({numCitation : firstCitation})
  }
  //lors de la mise à jour du State on vérifie que ce n'est pas la mëme citation
  componentWillUpdate(nextProps, nextState){
    if(nextState.numCitation === this.state.numCitation){
      nextState.numCitation = this.state.numCitation
    }

  }
  //Quand tout est OK on charge une citation au hasard
  handleChangeNum(){
    const citationNum = Math.round(Math.random()*10)
    this.setState({numCitation : citationNum})
  }

  render(){
    return (
      <div>
        <RandomCitations onClick={this.handleChangeNum} citations={this.state.numCitation} data={citations} />
      </div>

    )
  }
}
Index.propTypes = {
  data: PropTypes.string,
  onClick: PropTypes.number
}

ReactDOM.render(<Index/>, document.getElementById('app'))
