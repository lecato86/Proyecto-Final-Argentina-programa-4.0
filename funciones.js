$.ajax({
    url: 'https://randomuser.me/api/',
    dataType: 'json',
    success: function(data) {
      console.log(data.results[0]);
      cargardatos(data);
    }
  });

function cargardatos(data) {
    const cv = data.results[0]
    mostrar("titulo", "Curriculum Vitae "+ cv.name.first + " " + cv.name.last)
    cargarImagen("imagenPersonal", cv.picture.medium)
    mostrar("nombre", cv.name.first)
    mostrar("apellido", cv.name.last)
    mostrar("telefono", cv.phone)
    mostrar("email", cv.email)
    mostrar("genero", cv.gender)
    mostrar("direccion", cv.location.street.name + " " + cv.location.street.number)
    mostrar("ciudad", cv.location.city)
    mostrar("provincia", cv.location.state)
    mostrar("pais", cv.location.country)
    mostrar("edad", cv.dob.age)
    mostrarFecha("fecha_de_nacimiento", cv.dob.date)
    configurarEnvioDeMail(cv.email);
}

function mostrar(identificador, contenido) {
  document.getElementById(identificador).innerHTML=contenido

}

function cargarImagen(identificador, urlPicture) {
  document.getElementById(identificador).src=urlPicture
}

function mostrarFecha(identificador, fecha){
  d=new Date(fecha).toLocaleDateString() 
  document.getElementById(identificador).innerHTML=d
}

function configurarEnvioDeMail(mail) {
  document.getElementById("botonMail").addEventListener("click", function(){
    location.href="mailto:" + mail;
  })
}
