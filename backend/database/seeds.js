
const  Question  = require("../database/models/Question");
const mongoose = require("mongoose");

require("dotenv").config();



(async () => {
    const connection_url = "mongodb+srv://dilan99:65Fluffy@cluster0.i1sxv.mongodb.net/UserTesting?retryWrites=true&w=majority";
    console.log(connection_url);
    //DB config
    mongoose
      .connect(connection_url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(async () => {
          console.log("HEY!");
          //ds4
          const question27 = new Question({
              questionTitle: "What is bar B in terms of bar A?",
              graphURL: "https://cs448-final.s3.us-west-2.amazonaws.com/ans5.png",
              questionSortOrder: 27, 
              correctAnswer: 0.1,
          });
          await question27.save();
          //as2
          const question28 = new Question({
              questionTitle: "What is bar B in terms of bar A?",
              graphURL: "https://cs448-final.s3.us-west-2.amazonaws.com/dns0.png",
              questionSortOrder: 28, 
              correctAnswer: -0.3,
          });
          await question28.save();

         
       

        console.log("saved");
          process.exit(0);


      })
      .catch((err) => console.log("Error connecting to mongo: ", err));
})();
