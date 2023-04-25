let INDEX_PREGUNTA = 0;
let puntaje = 0


cargarPregunta(INDEX_PREGUNTA);


function cargarPregunta(index){
    objetoPregunta = baseDePreguntas[index]

    opciones = [...objetoPregunta.distractores]
    opciones.push(objetoPregunta.respuesta)
    for (let i = 0; i < 4; i++) {
        opciones.sort(()=> Math.random() - 0.5);
        
    }
    document.getElementById("pregunta").innerHTML = objetoPregunta.pregunta
    document.getElementById("imagen").src = objetoPregunta.imagen
    document.getElementById("opcion-1").innerHTML = opciones[0]
    document.getElementById("opcion-2").innerHTML = opciones[1]
    document.getElementById("opcion-3").innerHTML = opciones[2]
    document.getElementById("opcion-4").innerHTML = opciones[3]
}

async function seleccionarOpcion(index){
let validezRespuesta = opciones[index] == objetoPregunta.respuesta
if (validezRespuesta) {
    await swal.fire({
        title:"Respuesta correcta",
        text:"La respuesta ha sido correcta",
        icon: "success",
        
    });
    puntaje++
}else{
    await swal.fire({
        title:"respuesta Incorrecta",
        text:`La respuesta correcta es "${objetoPregunta.respuesta}"`,
        icon:"error",
    });
}
INDEX_PREGUNTA ++;
if (INDEX_PREGUNTA >= baseDePreguntas.length){
    await swal.fire({
        title: "Juego terminado",
        text: `Tu puntaje fue de:${puntaje}/${baseDePreguntas.length}`,
    })
    INDEX_PREGUNTA =0;
    puntaje = 0
}
    cargarPregunta(INDEX_PREGUNTA);
}

function ayuda() {
    Swal.fire({
        title:"Ayuda",
        text: objetoPregunta.ayuda,
    
    });
}