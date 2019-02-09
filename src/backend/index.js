import express from 'express';

// Setup
const app = express();
const port = process.env.PORT || 3000;


// Routes
app.get('/', (req, res) => {
	res.send('Sup bitches?!');
});


app.listen(port, () => {
	console.log(`Listening on port ${port}!`);
});