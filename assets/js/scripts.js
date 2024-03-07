// this is a placeholder to ensure the page is linked
var headerName = document.getElementById("name");
headerName.style.color = "black";

// functions to show you clicked on the social media links

/* github link */
var gitHub = document.getElementById("gitHub");
gitHub.addEventListener("click", function() {
  alert("Github button has been clicked")
});

/* linkedIn link */
var linkedIn = document.getElementById("linkedIn");
linkedIn.addEventListener("click", function() {
  alert("LinkedIn button has been clicked")
});

/*instagram link */
var instagram = document.getElementById("instagram");
instagram.addEventListener("click", function() {
  alert("Instagram button has been clicked")
  console.log(instagram, "testing, this has been clicked. working on debugging")
});

/* function to show personal contact information */
var contactMe = document.getElementById("contactMe");
contactMe.addEventListener("click", function() {
  alert("email: fredmcwilliams92@gmail.com.\n" +
        "phone: please email for cell info")
})
