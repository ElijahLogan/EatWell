import React, {Fragment} from 'react'
import {Link} from 'react-router-dom';
import {Jumbotron, Button} from 'react-bootstrap';



import styled from 'styled-components';


//link will replace href

// Create a <Title> react component that renders an <h1> which is
// centered, palevioletred and sized at 1.5em
const Tittle = styled.h1`
  font-size: 2.5em;
  text-align: center;
  background-color:none;
  
`;

// Create a <Wrapper> react component that renders a <section> with
// some padding and a papayawhip background
const Wrapper_one = styled.section`
  padding: 4em;
  
  background-image: url(https://burst.shopifycdn.com/photos/dinner-party.jpg);
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  
  height:100vh;
  width:100vw;
`;


const Wrapper_two = styled.section`
  padding: 4em;
  
  background-image: url(https://burst.shopifycdn.com/photos/market-peppers.jpg?width=746);
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  
  height:100vh;
  width:100vw;
`;

const Wrapper_three= styled.section`
  padding: 4em;
  
  background-image: url(https://burst.shopifycdn.com/photos/river-stone-texture.jpg?width=746&);
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  
  height:100vh;
  width:100vw;
`;


const Landing= () => {
    return (
      <Fragment>
          <Wrapper_one>
             <Tittle>
                Find recipes that work for you
             </Tittle>
        </Wrapper_one>
          
        <Wrapper_two>
            <Tittle>
                Use healthy recipes to eat better
            </Tittle>
        </Wrapper_two>
           
        <Wrapper_three>
             <Tittle>
          Better your diet.

              Eat well 

            </Tittle>
        </Wrapper_three>
      </Fragment>
    )
}

export default Landing