const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");

botones.forEach(boton =>{
    boton.addEventListener("click", () => {
        const botonApretado = boton.textContent;

        if (boton.id === "c") {
            pantalla.textContent= "0";
            return;
        }

        if (boton.id === "borrar") {
            if(pantalla.textContent.length === 1 || pantalla.textContent === "Error!"){
                pantalla.textContent = "0";
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return;
        }

        if(boton.id === "igual"){
            try{
            pantalla.textContent = eval(pantalla.textContent); //evalua conjunto string de operaciones matematicas
        }catch{
            pantalla.textContent = "Error!";
        }
            return;
        }

        if (pantalla.textContent === "0" || pantalla.textContent === "Error!") {
            pantalla.textContent = botonApretado; //reemplaza el cero
        }else{
            pantalla.textContent += botonApretado; //boton apretado mas los siguientes botones apretados
        }
    })
})

//buscar eliminar el contenido tras iniciar una operacion nueva con numeros en lugar de agregar