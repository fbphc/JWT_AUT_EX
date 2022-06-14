import express from "express";
import dotenv from "dotenv";
import {routerMain} from "./routes/main.js"

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3002;
const home = "/";

app.use(express.json());
app.use(home, routerMain);

app.listen(PORT, ()=> console.log(`listening port nr. ${PORT}`))
