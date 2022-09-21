import React from 'react';

class FeaturedCow extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    let cow = this.props.cow;
    return (
      <div>
      <h2>Featuring: {cow.name}</h2>
      <p>{cow.description}</p>
      </div>

    )
  }
}

export default FeaturedCow