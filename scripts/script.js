
let ultimoResultado;

function obtenerDatos(){
  let elementoNum1, elementoNum2, elementoResultado;
  elementoNum1 = document.getElementById("num1").value;
  elementoNum2 = document.getElementById("num2").value;
  elementoResultado = document.getElementById("resultado");

  let num1 = parseFloat(elementoNum1);
  let num2 = parseFloat(elementoNum2);

  if (isNaN(num1) || isNaN(num2)) {
    elementoResultado.textContent = "Ingresar números válidos!";
    return;
  }

  return {num1, num2, elementoResultado};
}

function Sumar() {
  let datos = obtenerDatos();
  if(!datos) return;
  let resultado = datos.num1 + datos.num2;
  ultimoResultado = resultado;
  datos.elementoResultado.textContent = resultado;
  datos.elementoResultado.classList.add("activo");
  setTimeout(() => datos.elementoResultado.classList.remove("activo"), 1000);
}

function Restar() {
  let datos = obtenerDatos();
  if(!datos) return;
  let resultado = datos.num1 - datos.num2;
  ultimoResultado = resultado;
  datos.elementoResultado.textContent = resultado;
  datos.elementoResultado.classList.add("activo");
  setTimeout(() => datos.elementoResultado.classList.remove("activo"), 1000);
}

function Multiplicar() {
  let datos = obtenerDatos();
  if(!datos) return;
  let resultado = datos.num1 * datos.num2;
  ultimoResultado = resultado;
  datos.elementoResultado.textContent = resultado;
  datos.elementoResultado.classList.add("activo");
  setTimeout(() => datos.elementoResultado.classList.remove("activo"), 1000);
}

function Dividir() {
  let datos = obtenerDatos();
  if(!datos) return;
  if (datos.num2 === 0){
    datos.elementoResultado.textContent = "No se puede hacer divisiones entre 0";
    return
  }
  let resultado = datos.num1 / datos.num2;
  ultimoResultado = resultado;
  datos.elementoResultado.textContent = resultado;
  datos.elementoResultado.classList.add("activo");
  setTimeout(() => datos.elementoResultado.classList.remove("activo"), 1000);
}

function Potenciar() {
  let datos = obtenerDatos();
  if(!datos) return;
  let resultado = Math.pow(datos.num1, datos.num2)
  ultimoResultado = resultado;
  datos.elementoResultado.textContent = resultado;
  datos.elementoResultado.classList.add("activo");
  setTimeout(() => datos.elementoResultado.classList.remove("activo"), 1000);
}

function Raiz(){
  const datos = obtenerDatos();
  if(!datos) return;
  if (datos.num2 === 0){
    document.getElementById("resultado").textContent = "El indice de la Raiz no puede ser 0"
    return;
  }

  if((datos.num1 < 0) && (datos.num2 % 2 === 0)){
    datos.elementoResultado.textContent = "No se puede sacar raíz par de número negativo";
    return;
  }

  let resultado;
  if((datos.num1 < 0) && (datos.num2 % 2 !== 0)){
    resultado = -Math.pow(Math.abs(datos.num1), 1 / datos.num2)
  }else{
    resultado = Math.pow(datos.num1, 1 / datos.num2)
  }
  ultimoResultado = resultado;
  datos.elementoResultado.textContent = resultado;
  datos.elementoResultado.classList.add("activo");
  setTimeout(() => datos.elementoResultado.classList.remove("activo"), 1000);
}

function Redondear(tipo){
  let elementoResultado = document.getElementById("resultado");
  let numero = parseFloat(elementoResultado.textContent);
  let resultado;
  if (isNaN(numero)){
    elementoResultado.textContent = "No hay número que redondear";
    return;
  }
  
  if (tipo === "0"){
    resultado = Math.round(numero);
  }else if(tipo === "1"){
    resultado = Math.ceil(numero);
  }else if(tipo === "2"){
    resultado = Math.floor(numero);
  } else if(tipo === "3"){
    resultado = ultimoResultado
  }

  elementoResultado.textContent = resultado;
  elementoResultado.classList.add("activo");
  setTimeout(() => elementoResultado.classList.remove("activo"), 1000);
}

function Limpiar(){
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
  document.getElementById("resultado").textContent = "Resultado";;
}