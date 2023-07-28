import express from "express";
import data from './data.js';

const app = express();

// ====================================================
/* Tambahan menggunakan option proxy di package.json */
// Enable CORS jika disable maka app.get error 

/*
app.use((req,res,next) => {
  // Update to match the domain you will make the request from 
  res.header("Access-Control-Allow-Origin","http://localhost:5000");
  res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, application/json");
  next();
});
*/
/* Tambahan menggunakan option proxy di package.json */
// ====================================================

app.get('/api/products', (req, res) => {
  res.send(data.products);
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
