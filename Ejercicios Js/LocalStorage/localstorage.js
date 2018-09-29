'use strict'


//Comprobar si el localStorage está Habilitado
if(typeof(Storage) != 'undefined'){
  alert("Storage Habilitado");
}
else{
  alert("Storage Inhabilitado");
}


//Guardar una variable en el localStorage
localStorage.setItem("variable","Contenido de la variable");
