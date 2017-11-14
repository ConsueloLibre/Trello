function trello(){//la que hace el click
  var contiene=document.getElementById('contiene'); //llamamos al padre, lo creamos, en donde se va a encontrar
  var button= document.createElement('button');//crear boton que hace la funcion
  var input=document.createElement('input'); // crear cajita que contendra texto Ingresado
  var nodoText=document.createTextNode('Guardar');// el texto que contendra

  //atributos
  input.setAttribute('id','valor');
  //asociar a la familia se crean los nodos
  button.appendChild(nodoText);
  contiene.appendChild(button);
  contiene.appendChild(input);

  //logica de orden en DOM
//ahora el texto ingresado se guardara luego de presionar el "guardar"
 button.addEventListener('click',function(){
    var guardado=document.getElementById('valor').value; // con esto rescatamos el valor del input "guardar"
    document.getElementById('valor').value="";// para limpiar input
    var cajaContiene=document.getElementById('cajaContiene');//llamar a div para que lo guarde

    var parrafo=document.createElement('p');//lo que se rescata se transforma en nodo de texto, para que exista
    var textNuevo=document.createTextNode('guardado');//texto del input pasa al parrafo

    parrafo.appendChild(textNuevo);//el texto pasa a ser hijo del parrafo
    cajaContiene.appendChild(parrafo);// el parrafo es hijo de cajaContiene

    var add=document.createElement('a');  // desde aca crea al elemento a
    add.setAttribute=('href','#');
    var textAdd=document.createTextNode('Añadir tarjeta');// se agraga el texto al nuevo elemento

    add.appendChild(textAdd); //text add es hijo de elemento a
    cajaContiene.appendChild(add);

    //hasta aca crea todo para añadir tarjeta
    add.addEventListener('click', function() {// al hacer click en agregar tarjeta estoy realizando el evento
      var textarea=document.createElement('textarea');//creo un textarea
      textarea.setAttribute('id','cuadro');

      cajaContiene.appendChild(textarea);//textarea es hijo de caja contien

      var add2=document.createElement('a');//un nuevo elemento para agregar una nueva tarjeta
      add2.setAttribute('href','#');//otorgo nuevamente los atributos
      var textarea2=document.createTextNode('Añadir Tarjeta');

      add2.appendChild(textarea2); // textarea2 es hijo de a
      cajaContiene.appendChild(add2);

    })
  })

}
