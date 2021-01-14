const request = require('request');



const fetchBreedDescription = (breedName, onResponse) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, function(error, response, body)  {


    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
  
  
    if (error) {
      onResponse(error, null);
      console.log(error);
      return;
    }

    if (body === '[]') {
      onResponse("Breed not found", null);
      return;
    } else {
      const data = JSON.parse(body);
      onResponse(null, data[0].description);
    }

  });

};

module.exports = { fetchBreedDescription };

