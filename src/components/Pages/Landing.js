import React, {Fragment} from 'react'
import {Link} from 'react-router-dom';
import {Jumbotron, Button} from 'react-bootstrap';

//link will replace href

const Landing= () => {
    return (
        <Fragment>
      <Jumbotron>
  <h1> Learn recipes to help you eat healthier and save money</h1>

</Jumbotron>
<Jumbotron>
  <img
      className="d-block w-100"
      src="https://picsum.photos/id/10/1920/1920"
      alt="Third slide"
    />

</Jumbotron>
</Fragment>
    )
}

export default Landing