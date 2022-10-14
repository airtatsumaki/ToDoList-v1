import express from 'express';
//__dirname for esm 
import path from 'path';
import {fileURLToPath} from 'url';
const app = express();
// instead of body-parser
app.use(express.urlencoded({extended: true})); 
app.use(express.json());

app.set('view engine', 'ejs');

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get("/", (req,res) => {
  const today = new Date();
  const dayObj = {};
  const daysOfTheWeek =  ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  dayObj["today"] = daysOfTheWeek[today.getDay()];
  // if ([0,6].indexOf(today.getDay()) > -1 ){
  //   //res.send("Yay it's the weekend!");
  //   dayObj["message"] = "Yay it's the weekend!";
  // }
  // else{
  //   // res.send("Sorry its a normal working day, Get back to work!");
  //   // res.sendFile(__dirname + "/index.html");
  //   dayObj["message"] = "Sorry its a normal working day, Get back to work!";
  //   //res.render("pages/index");
  // }
  res.render("pages/index", {theDay: dayObj});
});

app.listen(process.env.PORT || 3000, () => console.log("Server is running"));