const express = require('express');
 const app = express();
 const port = 3000;

 //Global comprovation
 app.use((req, res, next) => {
    console.log("Global middleware preprocessing")
    /*
    // Perform validation logic
    const isAuthenticated = true; // Placeholder for validation logic

    if (!isAuthenticated) {
        return res.status(401).send('Unauthorized');
    }*/
    // If validation passes, proceed to the next middleware
    next();
});
 app.get('/', (req, res) => res.send('Hello World!'));

 // Middleware to validate user
const validateUser = (req, res, next) => {
    console.log("Global middleware preprocessing")
    /*
    // Perform validation logic
    const isAuthenticated = true; // Placeholder for validation logic

    if (!isAuthenticated) {
        return res.status(401).send('Unauthorized');
    }*/
    // If validation passes, proceed to the next middleware
    next();
};


//app.use('/products', validateUser); PREPROCESSING DATA
app.get('/products', (req, res) => {
    const products = [
        { id: 1, name: 'hammer' },
        { id: 2, name: 'screwdriver' },
        { id: 3, name: 'wrench' },
    ];

    res.json(products);
});


 app.listen(port, () => {
     console.log(`Example app listening on port ${port}! http://localhost:${port}/`);
 });