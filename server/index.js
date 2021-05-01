import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';

const app = express();

app.use('/posts', postRoutes);

app.use(bodyParser.json({limit:"30mb", extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended:true}));
app.use(cors());

// Mongodb cloud atlas


const PORT = process.env.PORT || 5000;

const uri = process.env.CONNECTION_URL;

mongoose.connect( uri, { useNewUrlParser: true, useUnifiedTopology:true}).then(()=> app.listen(PORT, ()=> console.log(`Server running on port: ${PORT}`))).catch((error)=> console.log(error.message));

mongoose.set('useFindAndModify', false);


