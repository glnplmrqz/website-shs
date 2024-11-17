// For Login Function
var attempt = 5;

function validate() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  
  if (username == "shateateam" && password == "12345") {
    alert("Welcome to SHA TEA TEAM Webpage!");
    window.location = "HTML,CSS, AND JS FILES/webpage.html";
    return false;
  } else {
    attempt--;
    alert("You have left " + attempt + " attempt!");
    if (attempt == 0) {
      document.getElementById("username").disabled = true;
      document.getElementById("password").disabled = true;
      document.getElementById("submit").disabled = true;
      return false;
    }
  }
}

// Add event listeners to the input fields
document.getElementById("username").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    validate();
  }
});

document.getElementById("password").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    validate();
  }
});

// For Logout Function
function LogOut(){
    alert("Thank you for visiting to SHA TEA TEAM Webpage!");
}

// For Navigation Bar Function
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
}

// Close menu when a menu item is clicked
document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('menu').classList.remove('active');
    });
});