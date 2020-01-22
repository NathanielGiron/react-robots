import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';

import { setSearchField } from '../actions';

const mapStateToProps = (state) => {
  return {
    searchField: state.searchField
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value))
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: []
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {this.setState({robots:users})});
  }

  render() {
    const { robots } = this.state;
    const { searchField, onSearchChange } = this.props;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase());
    });
    if(!robots.length) {
      return <h1>Loading...</h1>
    } else {
      return(
        <Fragment>
          <h1>Robo Friends</h1>
          <SearchBox searchChange={onSearchChange} />
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </Fragment>
      );
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);