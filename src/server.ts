import express from 'express';

import { routes } from "../src/routes";

import "./database";

const app = express();

app.use(express.json());

app.use(routes);

// app.get("/", (req, res) => {
//     return res.json({
//         message: "fala meu chapinha"
//     });
// });

// app.post("/users", (req, res) => {
//     return res.json({
//         message: "user left your channel!"
//     });
// });

app.listen(3333, () => console.log("ta rodando de boa"));