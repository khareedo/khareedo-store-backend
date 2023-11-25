import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser'
import * as dotenv from 'dotenv';
import router from './routes/index.js';
dotenv.config();

const app = express();
app.use('/', router);

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static("public"));

app.get("/", (req, res) => {

  res.json({ message: "Welcome to Khareedo Store." });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});