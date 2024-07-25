$(document).ready(function () {
  $(".q1-btn").on("click", function () {
    $("#q1").fadeOut(500);
    $("#q2").delay(500).fadeIn(500);
  });

  $(".q2-btn").on("click", function () {
    $("#q2").fadeOut(500);
    $("#q3").delay(500).fadeIn(500);
  });

  $(".q3-btn").on("click", function () {
    waitingInfo();
  });
});

function waitingInfo() {
  q3.style.display = "none";
  loading1.style.display = "block";
  loading1.classList.add("fade-in");
  window.setTimeout(function () {
    loading1.classList.add("fade-out");
    window.setTimeout(function () {
      loading1.style.display = "none";
      loading2.style.display = "block";
      loading2.classList.add("fade-in");
      window.setTimeout(function () {
        loading2.classList.add("fade-out");
        window.setTimeout(function () {
          loading2.style.display = "none";
          loading3.style.display = "block";
          loading3.classList.add("fade-in");
          window.setTimeout(function () {
            loading3.classList.add("fade-out");
            window.setTimeout(function () {
              loading3.style.display = "none";
              qualify.style.display = "block";
              qualify.classList.add("fade-in");
              //counting();
              countdown();
            }, 500);
          }, 1700);
        }, 500);
      }, 1700);
    }, 500);
  }, 1700);
}

var interval;

function countdown() {
  clearInterval(interval);
  interval = setInterval(function () {
    var timer = $("#countingItem").html();
    timer = timer.split(":");
    var minutes = timer[0];
    var seconds = timer[1];
    seconds -= 1;
    if (minutes < 0) return;
    else if (seconds < 0 && minutes != 0) {
      minutes -= 1;
      seconds = 59;
    } else if (seconds < 10 && length.seconds != 2) seconds = "0" + seconds;
    else if (minutes < 1) minutes = "00";

    $("#countingItem").html(minutes + ":" + seconds);

    if (minutes == 0 && seconds == 0) clearInterval(interval);
  }, 1000);
}
