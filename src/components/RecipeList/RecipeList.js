import React from 'react';
import './RecipeList.css';
import Recipe from '../Recipe/Recipe';
import { Carousel } from 'react-responsive-carousel';

class RecipeList extends React.Component{
  render(){
    return(
        <div className="RecipeList">
          {this.props.recipes.map((recipe) => {
          <Carousel>
          <Recipe recipe ={recipe}/>
         </Carousel>
          })}
         </div>
    )
  }
}

export default RecipeList;
