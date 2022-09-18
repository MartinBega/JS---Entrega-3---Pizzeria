const titulo = document.getElementById("titulo")
const input = document.getElementById("input")
const precio = document.getElementById("precio")
const boton = document.getElementById("boton")
const nombrePizza = document.getElementById("nombrePizza")
const imagenPizza = document.getElementById("imagenPizza")
const ingredientePizza = document.getElementById("ingredientePizza")
const precioPizza = document.getElementById("precioPizza")

let pizzas = [
    {
        id:1,
        nombre:'MOZZARELLA',
        imagen:'./img/muzzarella.jpg',
        ingredientes:['queso mozzarella','salsa de tomate'],
        precio:550

    },
    {
        id:2,
        nombre:'NAPOLITANA',
        imagen: './img/napolitana.jpg',
        ingredientes:['queso mozzarella','salsa de tomate','rodajas de tomate'],
        precio:700

    },
    {
        id:3,
        nombre:'RUCULA',
        imagen: './img/rucula.jpg',
        ingredientes:['queso mozzarella','rucula','jamon crudo'],
        precio:650

    },
    {
        id:4,
        nombre:'PRIMAVERA',
        imagen: './img/primavera.jpg',
        ingredientes:['rodajas de tomate','huevo','morron'],
        precio:900

    },
    {
        id:5,
        nombre:'FUGAZZETTA',
        imagen: './img/fugazzetta.jpg',
        ingredientes:['queso mozzarella','salsa de tomate','cebolla'],
        precio:1100

    },
    {
        id:6,
        nombre:'ROQUEFORT',
        imagen:'./img/roque.jpg',
        ingredientes:['queso azul','salsa de tomate'],
        precio:1200

    }
]

// const resultadodelarray = pizzas.filter( elemento => elemento.id % 2 === 0)

// console.log('Punto A ,los elementos con Id par son : ',resultadodelarray);

// let pizzaBarata = pizzas => pizzas.precio < 600;

// if (pizzas.some(pizzaBarata) != true){
//     console.log("Lo sentimos, no hay pizzas que cuesten menos de $600.");} 
//     else{
//     console.log("Punto B ,Si!, tenemos pizzas por menos de $600.")}



// console.log('Punto C')
// const resultadonombres = pizzas.forEach((elemento) => {
    
//     console.log('Los nombres de las pizzas son :',elemento.nombre)
// });

// console.log('Punto D')
// const resultadoprecios = pizzas.forEach((elemento) => {
    
//     console.log('Los precios de las pizzas son :',elemento.precio)
// });

// console.log('Punto E')
// const resultadototal = pizzas.forEach((elemento) => {
    
//     console.log('El precio de la pizza ',  elemento.nombre,
//                 'es :', elemento.precio);
// });

/*---------------------------Ejercicio 3 JS-----------------------------------*/

/* Traer el localstorage */
const menues = JSON.parse(localStorage.getItem("menu"));

/* Almacenar iniformacion en el localstorage */
localStorage.setItem("menu", JSON.stringify(pizzas)); 




const renderPizza = (pizza) => {
 
 console.log(pizza.ingredientes)

 const ing = pizza.ingredientes

 console.log(ing.join(", "))
 
 




 return nombrePizza.innerHTML = `${pizza.nombre}`, 
        imagenPizza.innerHTML =  `<img src="${pizza.imagen}" alt="" class="imagen">`,
        ingredientePizza.innerHTML =  `${ing.join(" - ")}`,
        precioPizza.innerHTML =  `$${pizza.precio}`,
        input.value="";

        
        
} 




boton.addEventListener('click', e =>{
    
    e.preventDefault();

    
    
    let valor = input.value

    
    const pizza = menues.find(menues => menues.id == valor);
   



    if(!pizza) {
        
       return nombrePizza.innerHTML = `Ese id no existe`, 
              imagenPizza.innerHTML =  `<img src="./img/luigi-error-removebg-preview.png" alt="" class="imagen">`,
              ingredientePizza.innerHTML =   " ",
              precioPizza.innerHTML =  " ",
              input.value= "";
              
        
      }
    else {
        
        renderPizza(pizza)
        }
              


   
})
    


