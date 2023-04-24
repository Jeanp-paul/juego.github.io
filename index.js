
cargarPregunta(0)


function cargarPregunta(index){
    objetoPregunta = baseDePreguntas[index]

    let opciones = [...objetoPregunta.distractores]
    opciones.push(objetoPregunta.respuesta)
    for (let i = 0; i < 4; i++) {
        opciones.sort(()=> Math.random() - 0.5);
        
    }
    document.getElementById("pregunta").innerHTML = objetoPregunta.pregunta
    document.getElementById("opcion-1").innerHTML = opciones[0]
    document.getElementById("opcion-2").innerHTML = opciones[1]
    document.getElementById("opcion-3").innerHTML = opciones[2]
    document.getElementById("opcion-4").innerHTML = opciones[3]
}
function ayuda() {
    Swal.fire({
        title:"ayuda",
        Text: objetoPregunta.ayuda,
    
    });
}