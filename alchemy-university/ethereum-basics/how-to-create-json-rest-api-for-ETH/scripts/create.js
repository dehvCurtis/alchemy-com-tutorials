const axios = require('axios');

const newThing = { name: "Thing1" }

axios.post('http://localhost:3000/', newThing).then((response) => {
    console.log(response.data);
});
