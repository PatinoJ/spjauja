let menuIcon = document.querySelector('#menu-icon');

let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () =>  {
  
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');
    
    if(top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    };
    
  });
  
  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);
  
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};

ScrollReveal({ 
  //reset: true,
  distance: '80px',
  duartion: 2000,
  delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


const typed = new Typed('.multiple-text',{
  strings: ['Data scientist and data analyst', 'Web developer', 'Software engineer '],
  typeSpeed: 100,
  backSpeed: 100,
  typeDelay: 100,
  loop: true
});

document.addEventListener('DOMContentLoaded', function() {
  var readMoreButton = document.getElementById('read-more-btn');
  var extraContent = document.getElementById('extra-content');
  
  readMoreButton.addEventListener('click', function(e) {
    e.preventDefault();
    extraContent.classList.toggle('hidden');
    if (readMoreButton.textContent === 'Read More') {
      readMoreButton.textContent = 'Read Less';
    } else {
      readMoreButton.textContent = 'Read More';
    }
  });
});

/// start

document.addEventListener('DOMContentLoaded', function() {
  let readMoreButtons = document.querySelectorAll('.services-box .btn');

  readMoreButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      let serviceBox = this.parentElement;
      let mainText = serviceBox.querySelector('.main-text');
      let additionalText = serviceBox.querySelector('.additional-text');

      if (!additionalText) {
        // Crear el elemento <p> para el texto adicional
        additionalText = document.createElement('p');
        additionalText.className = 'additional-text';
        additionalText.textContent = "In addition, I offer speed and performance optimization services, online store development, search engine optimization, and ongoing maintenance to ensure that my clients' websites run smoothly and are up to date with the latest technologies and security standards. With a focus on quality, innovation, and customer satisfaction, I am here to help take my clients' online visions to the next level.";
        serviceBox.appendChild(additionalText);
        this.textContent = 'Read Less';
      } else {
        // Alternar la visibilidad del texto adicional
        additionalText.style.display = additionalText.style.display === 'none' ? 'block' : 'none';
        mainText.style.display = mainText.style.display === 'none' ? 'block' : 'none'; // Oculta el texto principal
        this.textContent = additionalText.style.display === 'none' ? 'Read More' : 'Read Less';
      }
    });
  });
});

///end

/*const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const express = require('express');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configurar el transporte SMTP
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '161881@unsaac.edu.pe', // Coloca tu dirección de correo electrónico aquí
    pass: '76512026' // Coloca tu contraseña aquí
  }
});

// Ruta para manejar el envío del formulario
app.post('/send-email', (req, res) => {
  const { name, email, mobileNumber, subject, message } = req.body;

  // Configurar el correo electrónico
  const mailOptions = {
    from: email,
    to: '161881@unsaac.edu.pe', // Coloca tu dirección de correo electrónico aquí
    subject: subject,
    text: `Nombre: ${name}\nCorreo electrónico: ${email}\nNúmero de teléfono: ${mobileNumber}\nMensaje: ${message}`
  };

  // Enviar el correo electrónico
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error al enviar el correo electrónico');
    } else {
      console.log('Correo electrónico enviado: ' + info.response);
      res.status(200).send('Correo electrónico enviado correctamente');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});*/


const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

function sendEmail() {
  
  const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> Phone Number: ${phone.value}<br> Message: ${message.value}`;
  Email.send({
    SecureToken : "10400660-7281-40d4-a59f-2a419461fae7",
    To : '161881@unsaac.edu.pe',
    From : "161881@unsaac.edu.pe",
    Subject : subject.value,
    Body : bodyMessage
}).then(
  message => {
    if (message == "OK") {
      Swal.fire({
  title: "Success!",
  text: "Message sent successfully!",
  icon: "success"
});
    }
  }
);
}

function checkInputs() {
  const items = document.querySelectorAll(".item");
  
  for (const item of items) {
    if (item.value == "") {
      item.classList.add("error");
      item.parentElement.classList.add("error");
    }
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  sendEmail();
});





