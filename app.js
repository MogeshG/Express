import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const __filename = fileURLToPath(import.meta.url);

app.get('/', (req, res) => {
    res.sendFile(path.join(path.dirname(__filename),'./home.html'));
});

app.listen(8080, (err) => {
    if(err)
        throw err;
    console.log("Server running at http://127.0.0.1:8080 ")
});

