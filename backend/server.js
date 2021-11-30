
   
require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");
const User = require("./database/models/User");
const Question = require("./database/models/Question");
const Answer = require("./database/models/Answer");
// const authMiddleware = require("./middleware/authMiddleware");
// const gm = require("gm");
const fs = require("fs");
// const atob = require("atob");
const path = require("path");
var ObjectId = mongoose.Types.ObjectId;

const port = process.env.PORT || 5000;




app.use(cors());
app.use(express.static(path.join(__dirname, "frontend/build")));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));

// app.use(authMiddleware.attach);
const connection_url = process.env.MONGODB_URI;
//DB config
mongoose
  .connect(connection_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to mongodb!"))
  .catch((err) => console.log("Error connecting to mongo: ", err));




app.post("/api/register", async (req, res) => {
  try {
    console.log({reqBody: req.body});
    const user = new User(req.body);
    const savedUser = await user.save();
    res.status(200).send({msg: "Success", userId: savedUser._id, groupCode: savedUser.groupCode});
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Something failed" });
  }
});

app.post("/api/handleImpairment", async (req, res) => {
  try {
    const {userId, isImpaired, impairment} = req.body;
    await User.findOneAndUpdate({_id: userId}, {[`${impairment}Impaired`]: isImpaired});
    res.status(200).send({msg: "Success"});
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Something failed" });
  }
});

app.post("/api/impairmentExplanation", async (req, res) => {
  try {
    const {userId, explanation, impairment} = req.body;
    await User.findOneAndUpdate({_id: userId}, {[`${impairment}ImpairedExplanation`]: explanation});
    res.status(200).send({msg: "Success"});
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Something failed" });
  }
});


app.get("/api/retrieveQuestions/:userId/:groupCode", async (req, res) => {
  try {
    console.log(req.params);
    const {userId, groupCode} = req.params;
    console.log({userId, groupCode});
    var responseArray = [];
    const foundUser = await User.find({_id: userId});
    if(foundUser){
      const nonSoundQuestions = await Question.find({soundURLs: {$exists: false}});
      const soundQuestions = await Question.find({soundURLs: {$exists: true}});
      if(groupCode == 'A'){
        //sound bytes last
        responseArray = [...nonSoundQuestions, ...soundQuestions];
        console.log("GROUPA");
      }else{
        responseArray = [ ...soundQuestions, ...nonSoundQuestions];
        console.log("GROUP B")
      }
      res.status(200).send({msg: "Success", questionArray: responseArray});
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Something failed" });
  }
});


app.post("/api/submitAnswer", async (req, res) => {
  try {
    
    const answer = new Answer(req.body);
    const savedAnswer = await answer.save();
    res.status(200).send({msg: "Success"});

  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Something failed" });
  }
});




// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/frontend/build/index.html"));
});

app.listen(port, () => {
  console.log("listening on: http://localhost:" + port);
});