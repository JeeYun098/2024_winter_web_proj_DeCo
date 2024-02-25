document.addEventListener("DOMContentLoaded", function() {
  var loginForm = document.getElementById("loginForm");

  loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    var id = document.getElementsByName("id")[0].value;
    var password = document.getElementsByName("pwd")[0].value;

    var destination = "myproject.html?username=" + encodeURIComponent(id);
    window.location.href = destination;
  });
});