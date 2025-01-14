function closeMenuAndGoTo(query) {
  document.querySelector('#hero-menu').classList.toggle('ft-menu--js-show')
  setTimeout(() => {
    const element = document.querySelector(query)
    window.scrollTo({
      top: element.getBoundingClientRect().top,
      behavior: 'smooth'
    })
  }, 250);
}

document.querySelector('#hero-menu').
  querySelectorAll('[href]').
  forEach(function (link) {
    link.onclick = function (event) {
      event.preventDefault()
      closeMenuAndGoTo(link.getAttribute('href'))
    }
  })
  
  /* Get the element you want displayed in fullscreen */
var elem = document.getElementById("myvideo");

/* Function to open fullscreen mode */
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}
function sendEmail() {
            submitContactForm({
                Host: "smtp.gmail.com",
                Username: "sender@email_address.com",
                Password: "Enter your password",
                To: 'receiver@email_address.com',
                From: "sender@email_address.com",
                Subject: "Sending Email using javascript",
                Body: "Well that was easy!!",
            })
                .then(function (message) {
                    alert("mail sent successfully")
                });
        }
