import express from 'express';
const app = express();

app.get("/", (req,res) => {
  res.send("Hello there");
});

app.listen(process.env.PORT || 3000, () => console.log("Server is running"));