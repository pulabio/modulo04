import React, { Component } from 'react';

import TechItem from "./TechItem";

class TechList extends Component {
  state = {
    newTech: '',
    techs: [ ]
  };

  componentDidMount() {
    const techs = localStorage.getItem('techs');

    if(techs){
      this.setState({techs: JSON.parse(techs)})
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.techs !== this.state.techs) {
      localStorage.setItem('techs', JSON.stringify(this.state.techs))
    }
  }

  componentWillUnmount(){
    //very useful for removing event listeners from unmounted components
  }

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

  handleDelete = (tech) => {
    this.setState({
      techs: this.state.techs.filter(t => t!==tech)
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <ul>
          {this.state.techs.map(tech => (
            <TechItem 
              key={tech}
              tech={tech}
              handleDelete={this.handleDelete}
            />
          ))}
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