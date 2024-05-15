$(document).ready(function () {
  $("#loginForm").submit(function (e) {
    // E-posta ve şifre doğrulamasını yap
    var email = $("#email").val().toLowerCase();
    var password = $("#password").val();

    // E-posta formatını kontrol et
    var emailRegex = /^[^\s@]+@ogr.sakarya.edu.tr$/;
    if (!emailRegex.test(email)) {
      alert("Maili kontrol et");
      e.preventDefault();
      return;
    }

    if (password.length < 8) {
      alert("Şifreniz en az 8 karakterden oluşmalıdır.");
      e.preventDefault();
      return;
    }
  });
});
