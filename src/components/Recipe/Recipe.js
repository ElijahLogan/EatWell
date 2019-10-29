import React from 'react';
import './Recipe.css';





class Recipe extends React.Component{
  render(){
      return(
    <div className="Recipe">
  <div className="image-container">
    <img src={this.props.recipe.thumbnail} alt=''/>
  </div>
  <h2>{this.props.recipe.title}</h2>
  <div className="Recipe-information">
    <div className="Recipe-address">
      <p>{this.props.recipe.ingredients}</p>
      <p>{this.props.recipe.hrefs}</p>
      
    </div>

  </div>
</div>
    );
  }
}

export default Recipe
