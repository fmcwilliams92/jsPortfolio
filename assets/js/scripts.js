// this is a placeholder to ensure the page is linked
var headerName = document.getElementById("name");
headerName.style.color = "black";

// links
var gitHub = document.getElementById("gitHub");
gitHub.addEventListener("click", function() {
  alert("Github button has been clicked")
});


var linkedIn = document.getElementById("linkedIn");
linkedIn.addEventListener("click", function() {
  alert("LinkedIn button has been clicked")
});

var instagram = document.getElementById("instagram");
instagram.addEventListener("click", function() {
  alert("Instagram button has been clicked")
  console.log(instagram, "this has been clicked")
});
