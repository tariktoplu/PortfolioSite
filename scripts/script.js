document.addEventListener("DOMContentLoaded", function () {
  var moreAboutMeButton = document.querySelector(".button button");

  moreAboutMeButton.addEventListener("click", function () {
    var about2Section = document.querySelector("#about2");
    about2Section.scrollIntoView({ behavior: "smooth" });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var sakaryaButton = document.getElementById("sakaryaUniButton");
  sakaryaButton.addEventListener("click", function () {
    window.location.href = "https://www.sakarya.edu.tr/";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var sakaryaButton = document.getElementById("imibutton");
  sakaryaButton.addEventListener("click", function () {
    window.location.href = "https://www.imikoleji.k12.tr/";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var sakaryaButton = document.getElementById("tabletennismatch");
  sakaryaButton.addEventListener("click", function () {
    window.location.href = "https://www.youtube.com/watch?v=F5H-Eq_Kcxw";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var moreAboutMeButton = document.querySelector(".about2 .button button");

  moreAboutMeButton.addEventListener("click", function () {
    window.location.href = "resume.html";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var moreAboutMeButton = document.querySelector(".about4 .button button");

  moreAboutMeButton.addEventListener("click", function () {
    window.location.href =
      "https://www.wikiloc.com/trails/hiking/turkey/mugla-province";
  });
});
