import express from "express";
import fetch from "node-fetch";

const PORT = process.env.PORT || 3001;

const app = express();
app.get("/api", async (req, res) => {
    console.log("get list data");
    const response = await fetch('https://run.mocky.io/v3/05e9651d-528e-4d7c-a60b-bae8f09684c6');
    const data = await response.json();
    console.log("get list data response", data);
    res.json(data);
  });
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});