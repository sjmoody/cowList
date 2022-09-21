import React from 'react';
import ReactDOM from 'react-dom';
import CowList from './components/CowList.jsx'
import FeaturedCow from './components/FeaturedCow.jsx'
import CowForm from './components/CowForm.jsx'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Cow List</h1>
        <FeaturedCow />
        <CowList />
        <CowForm />
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