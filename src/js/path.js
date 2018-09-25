
//funcion para mostrar seccion perfil
function openMe() {
  document.getElementById('containerMe').style.display = 'block';
  document.getElementById('containerProjects').style.display = 'none';
  document.getElementById('containerSkills').style.display = 'none';
  document.getElementById('containerWelcome').style.display = 'none';
  document.getElementById('containerContact').style.display = 'none';
}

function openProjects() {
  document.getElementById('containerMe').style.display = 'none';
  document.getElementById('containerProjects').style.display = 'block';
  document.getElementById('containerSkills').style.display = 'none';
  document.getElementById('containerWelcome').style.display = 'none';
  document.getElementById('containerContact').style.display = 'none';
}

//funcion para mostrar seccion skills
function openSkills() {
  document.getElementById('containerMe').style.display = 'none';
  document.getElementById('containerProjects').style.display = 'none';
  document.getElementById('containerSkills').style.display = 'block';
  document.getElementById('containerWelcome').style.display = 'none';
  document.getElementById('containerContact').style.display = 'none';
}

//funcion para mostrar seccion Contacto
function openContact() {
  document.getElementById('containerMe').style.display = 'none';
  document.getElementById('containerProjects').style.display = 'none';
  document.getElementById('containerSkills').style.display = 'none';
  document.getElementById('containerWelcome').style.display = 'none';
  document.getElementById('containerContact').style.display = 'block';
}

//funcion para mostrar seccion Welcome
function openWelcome() {
  document.getElementById('containerMe').style.display = 'block';
  document.getElementById('containerProjects').style.display = 'none';
  document.getElementById('containerSkills').style.display = 'none';
  document.getElementById('containerWelcome').style.display = 'none';
  document.getElementById('containerContact').style.display = 'none';
}

//funcion para mostrar seccion Welcome
function openInicio() {
  location.reload();
}

