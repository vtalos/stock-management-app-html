
function redirectToHomePage() {
    var email = document.getElementById("email1").value;
    var password = document.getElementById("password1").value;

    if (email === "" || password === ""  ) {
        $('#staticBackdrop1').modal('show'); // open the modal using jQuery
      } else {
        window.location.href = "HomePage.html";
      }
  }
