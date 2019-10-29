import axios from 'axios';

const app_id = 'ca386422';

const app_key = 'ade41765';

 const Edam = {
  search:  
    async (term) => {
      const url = "https://recipe-puppy.p.rapidapi.com/";
     const  options = {
        method: 'GET',
        headers: {
          "X-RapidAPI-Host": "recipe-puppy.p.rapidapi.com",
          "X-RapidAPI-Key": "4ebcec0012mshceba22bef6577e5p1df0f4jsn0fb8cc89a419"
        }
      }
      
    let response = window.fetch(url, options)
        .then(response => response.json())
        .then( data =>  data.results
        )
        .catch(e => console.error(e))

      return response
  
  }
    
}




export default Edam;
