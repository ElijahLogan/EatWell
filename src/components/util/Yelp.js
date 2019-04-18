

const apiKey = 'tQHuEaBJjZ9zg7oCxSdjT9NytF2fUeXi-6PUETgN_UfmZLt8uHQZT4mVEwO4NrWxL_xviohfjuoSqb6OelvAXfP3Hs_WUEJQgJrKrXWA_TUI02bmy-nMrX5LJ3JjXHYx';

 const yelp = {
  search: (term, location,sortBy) => {
    return window.fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      {
        headers: {Authorization: `Bearer ${apiKey}` }
}).then(response => {
    return response.json()
}).then(jsonResponse => {
              if (jsonResponse.businesses) {
                    return jsonResponse.businesses.map(business =>{
                        console.log(business)
                      return {
                                id: business.id,
                                src: business.image_url,
                                name:business.name,
                                address:business.location.address1,
                                city: business.location.city,
                                state:business.location.state,
                                zipCode:business.location.zip_code,
                                category:business.categories[0].title,
                                rating:business.rating,
                                reviewCount:business.review_count
                              }
                            }
                          );
                        }
                      })
  },
}

export default yelp;
