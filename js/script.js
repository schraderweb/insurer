document.addEventListener("DOMContentLoaded", function () {
  let currentQuestionIndex = 1;

  // Function to show the next question
  function nextQuestion(nextIndex) {
    const currentQuestion = document.querySelector(`#question${currentQuestionIndex}`);
    const nextQuestion = document.querySelector(`#question${nextIndex}`);
  
    if (currentQuestion) {
      currentQuestion.style.opacity = 0;
      setTimeout(() => {
        currentQuestion.style.display = "none"; // Hide the current question
        if (nextQuestion) {
          nextQuestion.style.display = "block"; // Show the next question
          setTimeout(() => {
            nextQuestion.style.opacity = 1;
            currentQuestionIndex = nextIndex;
          }, 10);
        }
        if (nextIndex === 4) {
          showSections();
        }
      }, 1000); // Match the transition duration in your CSS
    }
  }
  
  // Function to show sections 1, 2, and 3 one by one
  function showSections() {
    const sections = ["section1", "section2", "section3"];
    let currentSectionIndex = 0;

    function showNextSection() {
      if (currentSectionIndex < sections.length) {
        const currentSection = document.querySelector(`#${sections[currentSectionIndex]}`);
        if (currentSection) {
          currentSection.style.display = "block";
          setTimeout(() => {
            currentSection.style.opacity = 1;
          }, 10);

          // Hide the current section and show the next one after a delay
          setTimeout(() => {
            currentSection.style.opacity = 0;
            setTimeout(() => {
              currentSection.style.display = "none";
              currentSectionIndex++;
              showNextSection();
            }, 1000); // Match the transition duration in your CSS
          }, 2000); // Adjust this delay as needed
        }
      } else {
        // After section3, display the final section
        const finalSection = document.querySelector("#finalSection");
        if (finalSection) {
          finalSection.style.display = "block";
          setTimeout(() => {
            finalSection.style.opacity = 1;
          }, 10);
        }
      }
    }

    showNextSection();
  }

  // Assign the nextQuestion function to the buttons
  document.querySelectorAll(".answer-button").forEach(button => {
    button.addEventListener("click", function () {
      nextQuestion(currentQuestionIndex + 1);
    });
  });
});



function startCountdown(duration, display) {
  let timer = duration, minutes, seconds;
  const interval = setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = minutes + ":" + seconds;

      if (--timer < 0) {
          clearInterval(interval);
          display.textContent = "00:00";
      }
  }, 1000);
}

document.addEventListener("DOMContentLoaded", function () {
  const finalSection = document.getElementById("finalSection");
  finalSection.addEventListener("transitionend", function () {
      if (window.getComputedStyle(finalSection).opacity === "1") {
          const countdownDuration = 2 * 60; // 2 minutes in seconds
          const display = finalSection.querySelector("h4 span");
          startCountdown(countdownDuration, display);
      }
  });
});
