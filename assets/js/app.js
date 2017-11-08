function (add){
  var addList=document.getElementsById('barraDeTexto');
  var table= document.getElementById('comment').value; //tablero contenedor
  document.getElementById('comment').value=""; //limpiar el valor del contenido luego de reservarlo
  var newComment=document.createElement('div')

  var txt = document.getElementById('p');// texto que ira dentro del tablero contenedor
  var contenedor= document.getElementById('contenedor'); //nuevo recuadro a la derecha que arrojara nuetra tarea.

  var nodoText=document.createTextNode(addList);

  //ahora que tenemos la familia comenzamos a assignar su parentesco
  txt.appendChild(nodoText);
  newComment.appendChild(txt);
  Almacenado.appendChild(newComment);
}
