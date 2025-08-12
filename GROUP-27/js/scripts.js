document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you for contacting Coffee Haven! We'll get back to you soon.");
  this.reset();
});

