import React, { Component, Fragment } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: ''
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({robots:users}));
  }

  onSearchChange = (event) => {
    this.setState({
      searchField: event.target.value
    });
  }

  render() {
    const filteredRobots = this.state.robots.filter(robots => {
      return robots.name.toLocaleLowerCase().includes(this.state.searchField.toLocaleLowerCase());
    });
    if(this.state.robots.length === 0) {
      return <h1>Loading...</h1>
    } else {
      return(
        <Fragment>
          <h1>Robo Friends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <CardList robots={filteredRobots} />
        </Fragment>
      );
    }
  }
}

export default App;