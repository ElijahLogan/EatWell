import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Recipe from './components/Recipe/Recipe';
import Edam from './components/util/Edam';
import RecipeList from './components/RecipeList/RecipeList';
import SearchBar from './components/SearchBar/SearchBar';



class App extends Component {
  constructor(props){
    super(props)
    this.state = {recipes:[]}
    this.searchEdam = this.searchEdam.bind(this)
  }
async componentWillMount(){

}


async searchEdam(term){
  let recipes =  await Edam.search()
    this.setState({recipes:recipes})
    console.log(this.state.recipes)
}

  render() {
    return (
      <div>
        <SearchBar searchEdam = {this.searchEdam}/>
       <RecipeList recipes = {this.state.recipes}/>
      </div>

    );
  }
}

export default App;
