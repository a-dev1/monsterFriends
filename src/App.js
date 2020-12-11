import React, {Component} from 'react';
import './App.css';
import {SearchBar} from './components/search-bar/SearchBar.component';
import {CardList} from './components/card-list/card-list.component';


class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: 'le'
    }

    // this.handleChange = this.handleChange.bind(this); 
    //When not using arrow fun() to define a method have to explicitly bind that fun() with context of 'this'
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }

  handleChange = (e) => {
    this.setState({searchField: e.target.value})
  }

  //this.state can hold all the dynamic and processing data and many more
  //this.state can be change on runtime as we change in the pure js individually
  //{ 'everything inside this is a javaScript expression' }
  //When state change we re-render the component with new state
  //JSX is just mimic the HTML but it is different, it is actually js, so that we can create the virtual DOM.
  //have to call this.setState() to update the state.
  //We can't directly update the state like this.state.string = "something", because react has 1 way data flow.
  //Each element or component must have a key so that react can distinguish it & can update it individual when a change occurs
  //this.setState() is a asynchronous function()
  //we can't call setState() inside the render because, when setState() is called the component is re-render & the again setState and then again re-render this will gonna make a loop  
  //arrow func() get the context by itself, use lexical scoping 

  render() {
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));

    // const handleChange = e => {
    //   this.setState({searchField: e.target.value})
    // }

    return (
      <div className="App">
        <h1 className="heading">MONSTERS &nbsp;&nbsp;&nbsp;&nbsp; ROLODEX</h1>
        <SearchBar handleChange={this.handleChange}/>
        {/* <input type="search" 
        placeholder="Search Monsters"
        onChange={(e) => this.setState({searchField: e.target.value})}
        /> */}

        <CardList monsters={filteredMonsters}/>        
      </div>
    );
  }
}

export default App;
