document.addEventListener("DOMContentLoaded", function() {
    // Array de personajes 
    const personajes = [
        {
          nombre: "Albert Einstein",
          frase: "La imaginación es más importante que el conocimiento.",
          imagenUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Albert_Einstein_Head.jpg"
        },
        {
          nombre: "Martin Luther King Jr.",
          frase: "Tengo un sueño.",
          imagenUrl: "https://cdn.britannica.com/18/1918-050-0166D6BB/Martin-Luther-King-Jr.jpg"
        },
        {
          nombre: "Mahatma Gandhi",
          frase: "Sé el cambio que quieres ver en el mundo.",
          imagenUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Mahatma-Gandhi%2C_studio%2C_1931.jpg"
        },
        {
          nombre: "William Shakespeare",
          frase: "Ser o no ser, esa es la cuestión.",
          imagenUrl: "https://i.pinimg.com/originals/33/f6/88/33f688b72c28502fa62632513398c96a.jpg"
        },
        {
          nombre: "Marilyn Monroe",
          frase: "Dale a una chica los zapatos adecuados y conquistará el mundo.",
          imagenUrl: "https://aws-modapedia.vogue.es/prod/designs/v1/assets/640x764/191.jpg"
        },
        {
          nombre: "Abraham Lincoln",
          frase: "El gobierno del pueblo, por el pueblo y para el pueblo no perecerá de la Tierra.",
          imagenUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Abraham_Lincoln_O-77_matte_collodion_print.jpg/1200px-Abraham_Lincoln_O-77_matte_collodion_print.jpg"
        },
        {
          nombre: "Winston Churchill",
          frase: "Nunca en la historia de la humanidad tantos le deben tanto a tan pocos.",
          imagenUrl: "https://historia.nationalgeographic.com.es/medio/2018/11/27/4-churchill-premio-nobel-escribiendo_e9c3968c_1400x1121.jpg"
        },
        {
          nombre: "Coco Chanel",
          frase: "La moda pasa, el estilo permanece.",
          imagenUrl: "https://img2.rtve.es/i/?w=1600&i=1578644103556.jpg"
        },
        {
          nombre: "Nelson Mandela",
          frase: "La educación es el arma más poderosa que puedes usar para cambiar el mundo.",
          imagenUrl: "https://www.biografiasyvidas.com/biografia/m/fotos/mandela_nelson_5.jpg"
        },
        {
          nombre: "Steve Jobs",
          frase: "Innovación es lo que distingue a un líder de un seguidor.",
          imagenUrl: "https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2021/10/05/16334350341494.jpg"
        },
        {
          nombre: "Audrey Hepburn",
          frase: "La belleza es ser la mejor versión de ti mismo por dentro y por fuera.",
          imagenUrl: "https://s1.eestatic.com/2018/03/12/series/cine/hubert_de_givenchy-givenchy-cine_291483453_69534463_1706x1280.jpg"
        },
        {
          nombre: "Mark Twain",
          frase: "El informe de mi muerte ha sido muy exagerado.",
          imagenUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Mark_Twain_by_AF_Bradley.jpg/640px-Mark_Twain_by_AF_Bradley.jpg"
        }
      ]
  
      const selector = document.querySelector("#selector") // Selecciono el elemento con el id "selector" y lo almaceno en la variable "selector"
      
      const verPersonaje = document.querySelector("#verPersonaje") // Selecciono el elemento con el id "verPersonaje" y lo almaceno en la variable "verPersonaje"
      
      const imagenPersonaje = document.querySelector("#imagenPersonaje") // Selecciono el elemento con el id "imagenPersonaje" y lo almaceno en la variable "imagenPersonaje"
      
      const nombrePersonaje = document.querySelector("#nombrePersonaje") // Selecciono el elemento HTML con el id "nombrePersonaje" y lo almaceno en la variable "nombrePersonaje"
      
      const frasePersonaje = document.querySelector("#frasePersonaje") // Selecciono el elemento con el id "frasePersonaje" y lo almaceno en la variable "frasePersonaje"
      
      const buscador = document.querySelector("#buscador") // Selecciono el elemento con el id "buscador" y lo almaceno en la variable "buscador"
      
      const buscarFrase = document.querySelector("#buscarFrase") // Selecciono el elemento con el id "buscarFrase" y lo almaceno en la variable "buscarFrase"
      
      const resultadosBusqueda = document.querySelector("#resultadosBusqueda") // Selecciono el elemento con el id "resultadosBusqueda" y almaceno la referencia en la variable "resultadosBusqueda"
      
      // Lleno el selector con los nombres de los personajes
      personajes.forEach(personaje => {
        selector.innerHTML += `<option value="${personaje.nombre}">${personaje.nombre}</option>` // Recorro la array de personajes y agrego un option al elemento select con el id "selector" por cada personaje. El option contiene el nombre del personaje.
      })
      
      // Creo una funcion para mostrar la informacion del personaje seleccionado
      verPersonaje.addEventListener("click", function() {
        const nombreSeleccionado = selector.value // Obtengo el valor seleccionado en el elemento select con el id "selector" (nombre del personaje) y lo añado a una variable nombreSeleccionado
      
        const personajeSeleccionado = personajes.find(personaje => personaje.nombre === nombreSeleccionado) // Busco el objeto de personaje que coincide con el nombre seleccionado
      
        if (personajeSeleccionado) {
          imagenPersonaje.src = personajeSeleccionado.imagenUrl // Actualizo la imagen del personaje con la URL del personaje seleccionado
          nombrePersonaje.textContent = personajeSeleccionado.nombre // Actualizo el nombre del personaje en el h2 con el id "nombrePersonaje"
          frasePersonaje.textContent = personajeSeleccionado.frase // Actualizo la frase del personaje en el parrafo con el id "frasePersonaje"
        }
      })
      
      // Creo una funcion para buscar una palabra en la frase
      buscarFrase.addEventListener("click", function() {
        const palabraBuscar = buscador.value // Obtengo la palabra a buscar ingresada en el input con el id "buscador"
      
        const fechaHoraActual = new Date().toLocaleTimeString() // Obtengo la fecha y hora actual 
      
        const fraseActual = frasePersonaje.textContent // Obtengo la frase actual del personaje en el parrafo con el id "frasePersonaje"
      
        const fraseConMarcador = fraseActual.replace( 
          new RegExp("\\b" + palabraBuscar + "\\b", "gi"), (match) => `<span style="background-color: green">${match}</span>` // Utilizo una expresión regular para buscar la palabra exacta utilizando \\b para que sean palabras completas y gi para que sea una busqueda global sin importar mayusculas y minusculas y las marco en verde
        )
        
      
        if (fraseConMarcador !== fraseActual) {
          frasePersonaje.innerHTML = fraseConMarcador // Si se encuentran coincidencias actualizo la frase del personaje con las palabras que coinciden resaltadas
          resultadosBusqueda.innerHTML = `<p>Frase con coincidencia:</p><p>${fraseConMarcador}</p><p>Momento: ${fechaHoraActual}</p>`
        } else {
          resultadosBusqueda.innerHTML = `<p>No se encontró ninguna coincidencia.</p><p>Momento: ${fechaHoraActual}</p>` // Si no se encuentran coincidencias muestra un mensaje de error y la fecha y hora actual
        }
      })
          

    })