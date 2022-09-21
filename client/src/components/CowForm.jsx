import React from 'react';

class CowForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'What is the name of this cow?',
      description: 'Describe this cow'
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event){
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name] : value
    })
  }

  handleSubmit(event){
    alert(`A new cow was submitted: ${this.state.name} with description: ${this.state.description}`)
    let cow = {
      name: this.state.name,
      description: this.state.description
    }
    this.props.createCow(cow)
    event.preventDefault();
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Name: </label>
        <input
          name="name"
          type="text"
          value={this.state.name}
          onChange={this.handleInputChange}/>
          <br />
        <label>Description: </label>
        <input
          name="description"
          type="text"
          value={this.state.description}
          onChange={this.handleInputChange}/>
          <input type="submit" value="Submit" />
      </form>

    )
  }
}

export default CowForm