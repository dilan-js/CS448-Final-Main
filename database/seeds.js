
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
          //es1
          //high1
          //0
          //NOT SAVED YET
          // const question1 = new Question({
          //     questionTitle: "What is bar B in terms of bar A?",
          //     graphURL: "https://cs448-final.s3.us-west-2.amazonaws.com/ans5.png",
          //     questionSortOrder: 1, 
          //     correctAnswer: 0,
         // soundURL: 'https://cs448-final.s3.us-west-2.amazonaws.com/q1.wav'

          // });
          // await question1.save();
          // console.log("Question1 was saved!");

          
          //as2
          //2.8
          //q2
          const question2 = new Question({
              questionTitle: "What is bar B in terms of bar A?",
              graphURL: "https://cs448-final.s3.us-west-2.amazonaws.com/0as2.png",
              questionSortOrder: 2, 
              correctAnswer: 2.8,
              soundURL: 'https://cs448-final.s3.us-west-2.amazonaws.com/q2.wav'
          });
          await question2.save();
          console.log("Question2 was saved!");

      
          //as1
          //4.9
          //q3
          const question3 = new Question({
              questionTitle: "What is bar B in terms of bar A?",
              graphURL: "https://cs448-final.s3.us-west-2.amazonaws.com/0as1.png",
              questionSortOrder: 3, 
              correctAnswer: 4.9,
              soundURL: 'https://cs448-final.s3.us-west-2.amazonaws.com/q3.wav'

          });
          await question3.save();
          console.log("Question3 was saved!");

      
          //as3
          //4.1
          //q4
          const question4 = new Question({
              questionTitle: "What is bar B in terms of bar A?",
              graphURL: "https://cs448-final.s3.us-west-2.amazonaws.com/0as3.png",
              questionSortOrder: 4, 
              correctAnswer: 4.1,
              soundURL: 'https://cs448-final.s3.us-west-2.amazonaws.com/q4.wav'

          });
          await question4.save();
          console.log("Question4 was saved!");

      
          //ds2
          //4.2
          //q5
          const question5 = new Question({
              questionTitle: "What is bar B in terms of bar A?",
              graphURL: "https://cs448-final.s3.us-west-2.amazonaws.com/0ds2.png",
              questionSortOrder: 5, 
              correctAnswer: 4.2,
              soundURL: 'https://cs448-final.s3.us-west-2.amazonaws.com/q5.wav'

          });
          await question5.save();
          console.log("Question5 was saved!");

      

       //  NOT SAVED YET
          //es0
          //0
          //q6
          // const question2 = new Question({
          //     questionTitle: "What is bar B in terms of bar A?",
          //     graphURL: "https://cs448-final.s3.us-west-2.amazonaws.com/ans5.png",
          //     questionSortOrder: 6, 
          //     correctAnswer: 0,
          //soundURL: 'https://cs448-final.s3.us-west-2.amazonaws.com/q6.wav'

          // });
          // await question6.save();
          // console.log("Question6 was saved!");

      
         
          //ds5
          //3.1
          //q7
          const question7 = new Question({
              questionTitle: "What is bar B in terms of bar A?",
              graphURL: "https://cs448-final.s3.us-west-2.amazonaws.com/0ds5.png",
              questionSortOrder: 7, 
              correctAnswer: 3.1,
              soundURL: 'https://cs448-final.s3.us-west-2.amazonaws.com/q7.wav'

          });
          await question7.save();
          console.log("Question7 was saved!");

      
      
         
          //ds1
          //2.4
          //q8
          const question8 = new Question({
              questionTitle: "What is bar B in terms of bar A?",
              graphURL: "https://cs448-final.s3.us-west-2.amazonaws.com/0ds1.png",
              questionSortOrder: 8, 
              correctAnswer: 2.4,
              soundURL: 'https://cs448-final.s3.us-west-2.amazonaws.com/q8.wav'

          });
          await question8.save();
          console.log("Question8 was saved!");

      
          //as0
          //1.6
          //q9
          const question9 = new Question({
              questionTitle: "What is bar B in terms of bar A?",
              graphURL: "https://cs448-final.s3.us-west-2.amazonaws.com/0as0.png",
              questionSortOrder: 9, 
              correctAnswer: 1.6,
              soundURL: 'https://cs448-final.s3.us-west-2.amazonaws.com/q9.wav'
          });
          await question9.save();
          console.log("Question9 was saved!");

      
      
          //ds0
          //2
          //q10
          const question10 = new Question({
              questionTitle: "What is bar B in terms of bar A?",
              graphURL: "https://cs448-final.s3.us-west-2.amazonaws.com/0ds0.png",
              questionSortOrder: 10, 
              correctAnswer: 2,
              soundURL: 'https://cs448-final.s3.us-west-2.amazonaws.com/q10.wav'

          });
          await question10.save();
          console.log("Question10 was saved!");

      
      
          //as5
          //4.2
          //q11
          const question11 = new Question({
              questionTitle: "What is bar B in terms of bar A?",
              graphURL: "https://cs448-final.s3.us-west-2.amazonaws.com/0as5.png",
              questionSortOrder: 11, 
              correctAnswer: 4.2,
              soundURL: 'https://cs448-final.s3.us-west-2.amazonaws.com/q11.wav'

          });
          await question11.save();
          console.log("Question11 was saved!");

      
      
      
          //ds3
          //3.6
          //q12
          const question12 = new Question({
              questionTitle: "What is bar B in terms of bar A?",
              graphURL: "https://cs448-final.s3.us-west-2.amazonaws.com/0ds3.png",
              questionSortOrder: 12, 
              correctAnswer: 3.6,
              soundURL: 'https://cs448-final.s3.us-west-2.amazonaws.com/q12.wav'

          });
          await question12.save();
          console.log("Question12 was saved!");

      
      
          //ds4
          //1.5
          //q13
          const question13 = new Question({
              questionTitle: "What is bar B in terms of bar A?",
              graphURL: "https://cs448-final.s3.us-west-2.amazonaws.com/0ds4.png",
              questionSortOrder: 13, 
              correctAnswer: 1.5,
              soundURL: 'https://cs448-final.s3.us-west-2.amazonaws.com/q13.wav'

          });
          await question13.save();
          console.log("Question13 was saved!");

      
      
      
          //as4
          //2.6
          //q14
          const question14 = new Question({
              questionTitle: "What is bar B in terms of bar A?",
              graphURL: "https://cs448-final.s3.us-west-2.amazonaws.com/0as4.png",
              questionSortOrder: 14, 
              correctAnswer: 2.6,
              soundURL: 'https://cs448-final.s3.us-west-2.amazonaws.com/q14.wav'

          });
          await question14.save();
          console.log("Question14 was saved!");

      

         
    
         
       

        console.log("saved");
          process.exit(0);


      })
      .catch((err) => console.log("Error connecting to mongo: ", err));
})();
