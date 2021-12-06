
const  Question  = require("./models/Question");
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
          //ans3
          //3.3
          //15
          //NOT SAVED YET
          const question15 = new Question({
              questionTitle: "What is bar B in terms of bar A?",
              graphURL: "https://cs448-final.s3.us-west-2.amazonaws.com/0ans3.png",
              questionSortOrder: 15, 
              correctAnswer: 3.3,
          });
          await question15.save();
          console.log("Question15 was saved!");

          
          //dns2
          //4.8
          //q2
          const question16 = new Question({
              questionTitle: "What is bar B in terms of bar A?",
              graphURL: "https://cs448-final.s3.us-west-2.amazonaws.com/0dns2.png",
             questionSortOrder: 16, 
              correctAnswer: 4.8,
          });
          await question16.save();
          console.log("question16 was saved!");

      
          //ans4
          //4.7
          //q3
          const question17 = new Question({
              questionTitle: "What is bar B in terms of bar A?",
              graphURL: "https://cs448-final.s3.us-west-2.amazonaws.com/0ans4.png",
              questionSortOrder: 17, 
              correctAnswer: 4.7,
          });
          await question17.save();
          console.log("question17 was saved!");

      
          //dns4
          //3
          //q4
          const question18 = new Question({
              questionTitle: "What is bar B in terms of bar A?",
              graphURL: "https://cs448-final.s3.us-west-2.amazonaws.com/0dns4.png",
              questionSortOrder: 18, 
              correctAnswer: 3,
          });
          await question18.save();
          console.log("question18 was saved!");

      
          //ans2
          //1.5
          //q5
          const question19 = new Question({
              questionTitle: "What is bar B in terms of bar A?",
              graphURL: "https://cs448-final.s3.us-west-2.amazonaws.com/0ans2.png",
              questionSortOrder: 19, 
              correctAnswer: 1.5,
          });
          await question19.save();
          console.log("question19 was saved!");

      

       //  NOT SAVED YET
          //ans1
          //2.3
          //q6
          const question20 = new Question({
              questionTitle: "What is bar B in terms of bar A?",
              graphURL: "https://cs448-final.s3.us-west-2.amazonaws.com/0ans1.png",
              questionSortOrder: 20, 
              correctAnswer: 2.3,
          });
          await question20.save();
          console.log("Question20 was saved!");

      
         
          //ans0
          //4.9
          //q7
          const question21 = new Question({
              questionTitle: "What is bar B in terms of bar A?",
              graphURL: "https://cs448-final.s3.us-west-2.amazonaws.com/0ans0.png",
              questionSortOrder: 21, 
              correctAnswer: 4.9
          });
          await question21.save();
          console.log("question21 was saved!");

      
      
         
        //   //ens1
        //   //0
        //   //q8
        //   const question22 = new Question({
        //       questionTitle: "What is bar B in terms of bar A?",
        //       graphURL: "https://cs448-final.s3.us-west-2.amazonaws.com/0ens1.png",
        //       questionSortOrder: 22, 
        //       correctAnswer: 0,
        //   });
        //   await question22.save();
        //   console.log("question22 was saved!");

      
          //dns1
          //1.7
          //q9
          const question23 = new Question({
              questionTitle: "What is bar B in terms of bar A?",
              graphURL: "https://cs448-final.s3.us-west-2.amazonaws.com/0dns1.png",
              questionSortOrder: 23, 
              correctAnswer: 1.7
          });
          await question23.save();
          console.log("question23 was saved!");

      
      
          //dns5
          //4.6
          //q10
          const question24 = new Question({
              questionTitle: "What is bar B in terms of bar A?",
              graphURL: "https://cs448-final.s3.us-west-2.amazonaws.com/0dns5.png",
              questionSortOrder: 24, 
              correctAnswer: 4.6,
          });
          await question24.save();
          console.log("question24 was saved!");

      
      
          //dns3
          //1.7
          //q11
          const question25 = new Question({
              questionTitle: "What is bar B in terms of bar A?",
              graphURL: "https://cs448-final.s3.us-west-2.amazonaws.com/0dns3.png",
              questionSortOrder: 25, 
              correctAnswer: 1.7,
          });
          await question25.save();
          console.log("question25 was saved!");

      
      
      
          //ens0
          //0
          //q12
        //   const question26 = new Question({
        //       questionTitle: "What is bar B in terms of bar A?",
        //       graphURL: "https://cs448-final.s3.us-west-2.amazonaws.com/0ens0.png",
        //       questionSortOrder: 26, 
        //       correctAnswer: 0,
        //   });
        //   await question26.save();
        //   console.log("question26 was saved!");

      
      
          //ans5
          //1.9
          //q13
          const question27 = new Question({
              questionTitle: "What is bar B in terms of bar A?",
              graphURL: "https://cs448-final.s3.us-west-2.amazonaws.com/0ans5.png",
              questionSortOrder: 27, 
              correctAnswer: 1.9,
          });
          await question27.save();
          console.log("question27 was saved!");

      
      
      
          //dns0
          //3.3
          //q14
          const question28 = new Question({
              questionTitle: "What is bar B in terms of bar A?",
              graphURL: "https://cs448-final.s3.us-west-2.amazonaws.com/0dns0.png",
              questionSortOrder: 28, 
              correctAnswer: 3.3,
          });
          await question28.save();
          console.log("question28 was saved!");

        console.log("saved");
          process.exit(0);


      })
      .catch((err) => console.log("Error connecting to mongo: ", err));
})();
