import React from 'react';

class CowList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const cows = this.props.cows;
    const listCows = cows.map((cow) =>
      <li
        // key={cow.id.toString()}
        onClick={() => this.props.selectFeaturedCow(cow)}
        // onclick={this.handleClick}
        // onClick={this.props.selectFeaturedCow(cow)}
        // onClick={()=> console.log(`clicked on cow ${cow.name}`)}
        >
        {cow.name}


      </li>
    )
    return (
      <div>
        <h3>All Cows:</h3>
        <ul>{listCows}</ul>
      </div>

    )

  }
}

export default CowList