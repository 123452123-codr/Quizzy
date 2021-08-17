(function(){
    var database = firebase.database();
    database.ref('Info').on("value", (snapshot) => {
        var a1 = snapshot.val().q1;
        var a2 = snapshot.val().q2;
        var a3 = snapshot.val().q3;
        var a4 = snapshot.val().q4;
        var a5 = snapshot.val().q5;
        var a6 = snapshot.val().q6;
        var a7 = snapshot.val().q7;
        var a8 = snapshot.val().q8;
        var a9 = snapshot.val().q9;
        var a10 = snapshot.val().q10;
        // Functions
        function buildQuiz(){
        // variable to store the HTML output
        const output = [];
    
        // for each question...
        myQuestions.forEach(
          (currentQuestion, questionNumber) => {
    
            // variable to store the list of possible answers
            const answers = [];
    
            // and for each available answer...
            for(letter in currentQuestion.answers){
    
              // ...add an HTML radio button
              answers.push(
                `<label>
                  <input type="radio" name="question${questionNumber}" value="${letter}">
                  ${letter} :
                  ${currentQuestion.answers[letter]}
                </label>`
              );
            }
    
            // add this question and its answers to the output
            output.push(
              `<div class="slide">
                <div class="question"> ${currentQuestion.question} </div>
                <div class="answers"> ${answers.join("")} </div>
              </div>`
            );
          }
        );
    
        // finally combine our output list into one string of HTML and put it on the page
        quizContainer.innerHTML = output.join('');
      }
    
      function showResults(){
    
        // gather answer containers from our quiz
        const answerContainers = quizContainer.querySelectorAll('.answers');
    
        // keep track of user's answers
        let numCorrect = 0;
    
        // for each question...
        myQuestions.forEach( (currentQuestion, questionNumber) => {
    
          // find selected answer
          const answerContainer = answerContainers[questionNumber];
          const selector = `input[name=question${questionNumber}]:checked`;
          const userAnswer = (answerContainer.querySelector(selector) || {}).value;
    
          // if answer is correct
          if(userAnswer === currentQuestion.correctAnswer){
            // add to the number of correct answers
            numCorrect++;
    
            // color the answers green
            answerContainers[questionNumber].style.color = 'lightgreen';
          }
          // if answer is wrong or blank
          else{
            // color the answers red
            answerContainers[questionNumber].style.color = 'red';
          }
        });
    
        // show number of correct answers out of total
        resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
        const text = {Score: numCorrect};
        const send = JSON.stringify(text);
        localStorage.setItem("ScoreOfUser", send);
      }
    
      function showSlide(n) {
        slides[currentSlide].classList.remove('active-slide');
        slides[n].classList.add('active-slide');
        currentSlide = n;
        if(currentSlide === 0){
          previousButton.style.display = 'none';
        }
        else{
          previousButton.style.display = 'inline-block';
        }
        if(currentSlide === slides.length-1){
          nextButton.style.display = 'none';
          submitButton.style.display = 'inline-block';
        }
        else{
          nextButton.style.display = 'inline-block';
          submitButton.style.display = 'none';
        }
      }
    
      function showNextSlide() {
        showSlide(currentSlide + 1);
      }
    
      function showPreviousSlide() {
        showSlide(currentSlide - 1);
      }
    
      // Variables
      const quizContainer = document.getElementById('quiz');
      const resultsContainer = document.getElementById('results');
      const submitButton = document.getElementById('submit');
      const myQuestions = [
        {
          question: "How many gold medals have India won in olympics till now?",
          answers: {
            a: "8",
            b: "9",
            c: "10",
            d: "11"
          },
          correctAnswer: a1
        },
        {
          question: " In which year was softball introduced to the Olympics?",
          answers: {
            a: "2008",
            b: "2016",
            c: "1947",
            d: "1996"
          },
          correctAnswer: a2
        },
        {
          question: "In which country did the Olympics originate?",
          answers: {
            a: "India",
            b: "Greece",
            c: "Pakistan",
            d: "U.S."
          },
          correctAnswer: a3
        },
        {
            question: "What colors are the Olympic rings?",
            answers: {
              a: "Blue, yellow, black, green and red",
              b: "Yellow, pink, green, red and blue",
              c: "Black, green, white, blue and yellow",
              d: "Red, blue, yellow, black and cyan"
            },
            correctAnswer: a4
          },
          {
            question: "Which country has hosted the most Olympic games?",
            answers: {
              a: "United States",
              b: "India",
              c: "United Kingdom",
              d: "Japan"
            },
            correctAnswer: a5
          },
          {
            question: " Which four years have seen the Olympics canceled?",
            answers: {
              a: "1916, 1940, 1944 and 2020",
              b: "1900, 1926 ,2016 and 2020",
              c: "1996, 2000, 2008, 2020",
              d: "1924, 1938, 1996, 2020"
            },
            correctAnswer: a6
          },
          {
            question: "The Olympic Torch is lit where each year?",
            answers: {
              a: "Tokyo, Japan",
              b: "Olympia, Greece",
              c: "Paris, France",
              d: "New Delhi, India"
            },
            correctAnswer: a7
          },
          {
            question: " Which American athlete with a wooden leg won six gymnastics medals at the 1904 Olympics?",
            answers: {
              a: "Archie Hahn",
              b: "George Eyeser",
              c: "Vitaly Scherbo",
              d: "Andrea Keller"
            },
            correctAnswer: a8
          },
          {
            question: " Which American Olympic athlete was later a prisoner of war in World War II?",
            answers: {
              a: "Steven Redgrave",
              b: "Brigit Fischer",
              c: "Myer Prinstine",
              d: "Louis Zamperini"
            },
            correctAnswer: a9
          },
          {
            question: "Who is Neeraj Chopra's Current coach?",
            answers: {
              a: "Kostic Palamas",
              b: "Sudeer Babu",
              c: "Uwe Hohn",
              d: "Arjun Sarja"
            },
            correctAnswer: a10
          }
      ];
    
      // Kick things off
      buildQuiz();
    
      // Pagination
      const previousButton = document.getElementById("previous");
      const nextButton = document.getElementById("next");
      const slides = document.querySelectorAll(".slide");
      let currentSlide = 0;
    
      // Show the first slide
      showSlide(currentSlide);
    
      // Event listeners
      submitButton.addEventListener('click', function(){
        let obj = localStorage.getItem("ScoreOfUser");
        let parsed = JSON.parse(obj);
        var ScoreUser = parsed.Score;

        let abc = sessionStorage.getItem("Store");
        let xyz = JSON.parse(abc);
        var sendName = xyz.Name;

        database.ref(sendName).set(ScoreUser);
        showResults();
      });
      previousButton.addEventListener("click", showPreviousSlide);
      nextButton.addEventListener("click", showNextSlide);
    });
})();
  
