

document.addEventListener('DOMContentLoaded', function() {
  var moreAboutMeButton = document.querySelector('.button button');

  moreAboutMeButton.addEventListener('click', function() {
      var about2Section = document.querySelector('#about2');
      about2Section.scrollIntoView({ behavior: 'smooth' });
  });
});


