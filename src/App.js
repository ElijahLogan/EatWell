import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Business from './components/Business/Business';
import Yelp from './components/util/Yelp'
import BusinessList from './components/BusinessList/BusinessList';
import SearchBar from './components/SearchBar/SearchBar';



class App extends Component {
  constructor(props){
    super(props)
    this.state = {businesses:[]}
    this.searchYelp = this.searchYelp.bind(this)
  }

searchYelp(term,location,sortBy){
  Yelp.search(term,location,sortBy).then(businesses=> {
    console.log(businesses)
    this.setState({businesses:businesses})
  })
}

  render() {
    return (
      <div>
        <SearchBar searchYelp = {this.searchYelp}/>
        <BusinessList businesses = {this.state.businesses}/>
      </div>

    );
  }
}

export default App;
