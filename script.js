//Validar Formulario

document.getElementById('contact-form').addEventListener('submit', function(e){
  e.preventDefault();// Evita envio real

  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const message = document.getElementById('message');

  if(!name.value.trim()|| !email.value.trim() || !message.value.trim()){
    alert('Por favor, completa todos los campos');
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(!emailRegex.test(email.value)){
    alert('Por favor, ingrese un correo válido.')
    return;
  }

  alert('Gracias por tu mensaje, ' +name.value + '!')

  name.value = '';
  email.value = '';
  message.value = '';
});
