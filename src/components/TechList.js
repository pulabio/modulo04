import React, { Component } from 'react';

class TechList extends Component {
  state = {
    newTech: '',
    techs: [
      'Node.js',
      'ReactJS',
      'React Native'
    ]
  };

  handleInputChange = e => {
    this.setState( {newTech: e.target.value});
  }

  handleSubmit = e => {
    e.preventDefault()
    this.setState({
      techs: [...this.state.techs, this.state.newTech],
      newTech: ''
    } );

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <ul>
          {this.state.techs.map(tech => <li key={tech}>{tech}</li>) /*key will probably be an ID in the future*/}
        </ul>
        <input
          type="text"
          onChange={this.handleInputChange}
          value={this.state.newTech}
          //if change in state comes from somewhere else this updates the value
          />
          <button type="submit">Enviar</button>
      </form> //this is called a fragment
    );
  }
}

export default TechList;