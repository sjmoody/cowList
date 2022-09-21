import React from 'react';
import ReactDOM from 'react-dom';
import CowList from './components/CowList.jsx'
import FeaturedCow from './components/FeaturedCow.jsx'
import CowForm from './components/CowForm.jsx'
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cows: [],
      featuredCow: {}
    }
    this.selectFeaturedCow=this.selectFeaturedCow.bind(this);
    this.createCow=this.createCow.bind(this);

  }


  componentDidMount(){
    // console.log("Component mounted")
    axios.get('/api/cows')
      .then((response) => {
        // console.log(response.data);
        this.setState({
          cows: response.data,
        })
      })
  }

  createCow(cow){
    // console.log(`Attempting to create cow in react. Name ${cow.name}`)
    axios.post('/api/cows', cow)
      .then((response) =>{
        let newCow = response.data[0];
        // console.log(newCow)
        this.setState({
          cows: [...this.state.cows, newCow]
        })
      })

  }
  selectFeaturedCow(cow){
    // console.log(`Index attempting to feature cow: ${cow.name}`)
    this.setState({
      featuredCow: cow
    })

  }

  render() {
    let featuredCow = this.state.featuredCow;
    let cows = this.state.cows;
    return (
      <div>
        <h1>Cow List</h1>

        <FeaturedCow cow={featuredCow}/>
        <CowList
          selectFeaturedCow={this.selectFeaturedCow}
          cows={cows}/>
        <CowForm createCow={this.createCow}/>
      </div>

    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

/*
[] CowList enumerates all cows by names
[] CowForm takes name and description and submits to db
[] FeaturedCow displays name and description of the featured cow
*/