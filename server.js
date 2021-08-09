const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

//parse incoming string or array data 
app.use(express.urlencoded({ extended: true }));
//parse incoming JSON data 
app.use(express.json());
app.use(express.static('public'));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log('API server now on port 3001!');
});



// app.get('/api/animals', (req, res) => {
//     let results = animals;
//     if (req.query) {
//       results = filterByQuery(req.query, results);
//     }
//     res.json(results);
//   });

// app.get('/api/animals/:id', (req, res) => {
//     const result = findByID(req.params.id, animals);
//     if (results) {
//         res.json(result);
//     } else {
//         res.send(404);
//     }   
// });

// app.post('/api/animals', (req, res) => {
//     //set id based on what the next index of the array will be
//     req.body.id = animals.length.toString();

//     //if any data in req.body is incorrect, send 400 error back 
//     if (!validateAnimal(req.body)) {
//         res.status(400).send('The animal is not properly formatted.');
//     } else {
//         const animal = createNewAnimal(req.body, animals);
//         res.json(animal);
//     }

// });




//website-for Heroku:  https://blooming-harbor-99176.herokuapp.com/api/animals