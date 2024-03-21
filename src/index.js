const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
const userData = require('./data');
const cors = require('cors');

app.use(express.json());
app.use(cors({
  origin: "*"
}))

app.get('/', (req, res) => {
 try{
    const data = userData;
    res.status(200).json({ status: true, message: 'Data fetched!', data });
 }catch(error){
    res.status(500).json({status: false, message: 'Failed to fetch data'});
 }
});

app.post('/', (req, res) => {
  try {
    const data = req.body;
    res
      .status(200)
      .json({ status: true, message: 'Data saved successfully!', data });
  } catch (error) {
    res.status(500).json({ status: false, message: 'Failed to post data' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is listening to port number ${PORT}`);
});
