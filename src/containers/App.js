import React, { Component, Fragment } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';

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
      .then(users => {this.setState({robots:users})});
  }

  onSearchChange = (event) => {
    this.setState({
      searchField: event.target.value
    });
  }

  render() {
    const { robots, searchField } = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase());
    });
    if(!robots.length) {
      return <h1>Loading...</h1>
    } else {
      return(
        <Fragment>
          <h1>Robo Friends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </Fragment>
      );
    }
  }
}

export default App;