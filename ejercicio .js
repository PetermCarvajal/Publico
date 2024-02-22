enchufle = false;
enchufle ? console.log("Esta Encendido"):console.log("Esta Apagado");

let edad=9;
 edad>=18 ? console.log("Es Mayor de Edad..."):console.log("Es Menor de Edad.");

 let numero=-3;
  numero>0 ? console.log("Número Positivo"):console.log("Número Negativo");

   let ocupacionCancha=true;
   let NombreCancha="Arena";
    let mensaje=ocupacionCancha ? "La Cancha Llamada ${nombreCancha} Esta Ocupada":"La Cancha Llamada ${NombreCancha}  Esta Disponible" ;
     console.log(mensaje);

     const email="arleth64@gmail.com";
     const contraseña="1234";

     email=="arleth64@gmail.com" && contraseña =="1234"?
      console.log("Señor Usuario con Correo ${email} Bienvenido al sistema"):console.log("El Correo ${email} Y La contraseña digitada es Incorrecta");

    let ColorSemaforo="Amarillo";
     ColorSemaforo=="Verde"?console.log("El Semaforo esta en ${ColorSemaforo} Puede Seguir"):
      ColorSemaforo=="Rojo"?console.log("El Semaforo esta en ${ColorSemaforo} Debe Parar"):
       ColorSemaforo=="Amarillo"?console.log("aliste motores"):console.log("muestra color ${ColorSemaforo} , Esta Dañado");   

 let temperatura=40;
  if(temperatura>=40){ console.log("Usted Tiene Fiebre,Su temperatura es Mayor a ${temperatura} Grados")};

  let tipoCliente="normal";
  if(tipoCliente=="normal"){
    console.log("Va a ser atendido en el modulo 1,por ser cliente  ${tipoCliente}");
   }else if(tipoCliente=="Preferencial"){
    console.log("Esta Habilitado los módulos 2 y 3 para su atención");
   }else{
    console.log("Usted no es cliente del banco,por favor dirijase al modulo 4");
   }

let emailBaseDatos ="arleth64@gmail.com";
let ClaveBaseDatos="1234";
let emailIngresado="arle@gmail.com";
let claveIngresada="Juan";
let NombreUsuario="Juan";

if(emailBaseDatos==emailIngresado && ClaveBaseDatos==claveIngresada){
    console-log("${NombreUsuario} Bienvenido!,Seleccione Opciones del Sistema");
}else{console.log("Acceso Denegado");}

let derecha=true;
let izquierda=false;
let arriba=false;
let abajo=false;

if(derecha){
    console.log("Robot Moviendose Hacia La Derecha");
}else if ("izquierda"){
    console.log("Robot Moviendose Hacia la Izquierda");
}else if ("arriba"){
    console.log("Robot Moviendose Hacia Arriba");
}else if("abajo"){
    console.log("Robot Moviendose Hacia Abajo");
}else{
    console.log("Movienviento Extraño");
}

let encendido=true;
let velocidad=32;
if (encendido){
    console.log("Su Carro esta Encencido");
    if(velocidad == 0){
        console.log("Carro Freno");
    }else if(velocidad>0 && velocidad<=100){
            console.log("Carro en Marcha...")
        }else{
            console.log("Evitese Un Accidente .. Exceso de Velocidad")
        }
}else {
    console.log("Encienda Su Vehiculo...");

}

let dia="miercoles";
let clase="Algoritmos";
if(dia=="miercoles"){
    console.log("La Clase de Hoy Es ${clase}")
}