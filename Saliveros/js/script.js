var submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", function(event) {
  event.preventDefault(); // prevent the default form submission

  var kind = document.getElementById("kind").value;
  var code = document.getElementById("code").value;
  var quantity = document.getElementById("quantity").value;

  if (kind === "" || code === "" || quantity === "" ) {
    $('#staticBackdrop1').modal('show'); // open the modal using jQuery
  } else {
    $('#staticBackdrop2').modal('show'); // open the modal using jQuery
  }
});

