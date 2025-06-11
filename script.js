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


//Scroll suave al hacer click en los enlaces del nanbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target){
      target.scrollIntoView({behavior: 'smooth'});

    }
  });
});


// Cargar proyectos desde JSON y mostrarlos dinámicamente
const proyectos = [
  {
    titulo: "Proyecto 1",
    descripcion: "App de tareas",
    enlace: "https://github.com/JonZepeda/app-tareas"
  },
  {
    titulo: "Proyecto 2",
    descripcion: "Blog con Bootstrap",
    enlace: "https://jz-blog.netlify.app"
  }
];

// Reemplaza el fetch por un bucle directo
const contenedor = document.querySelector('#projects .row');
proyectos.forEach(p => {
  const html = `
    <div class="col-md-4">
      <div class="card mb-4">
        <div class="card-body">
          <h5 class="card-title">${p.titulo}</h5>
          <p class="card-text">${p.descripcion}</p>
          <a href="${p.enlace}" target="_blank" class="btn btn-primary">Ver proyecto</a>
        </div>
      </div>
    </div>
  `;
  contenedor.innerHTML += html;
});

