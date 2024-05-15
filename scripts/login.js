$(document).ready(function () {
  $("#loginForm").submit(function (e) {
    e.preventDefault();

    var email = $("#email").val().toLowerCase();
    var password = $("#password").val();

    // E-posta formatını kontrol et
    var emailRegex = /^[^\s@]+@sakarya.edu.tr$/;
    if (!emailRegex.test(email)) {
      alert("Maili kontrole et");
      return;
    }

    if (password.length < 10) {
      alert("Şifreniz en az 10 karakterden oluşmalıdır.");
      return;
    }

    var upperCaseRegex = /[A-Z]/;
    var specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
    if (!upperCaseRegex.test(password) || !specialCharRegex.test(password)) {
      alert(
        "Şifrenizde en az bir büyük harf ve bir özel karakter içermelidir."
      );
      return;
    }

    alert("Başarıyla giriş yaptınız!");

    $("#loginForm")[0].reset();
  });
});
