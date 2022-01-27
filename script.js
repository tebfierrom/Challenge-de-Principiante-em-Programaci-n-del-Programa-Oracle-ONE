
var Palabra = document.querySelector("input");
var pEncriptada = document.querySelector("#in2");
var conta ="";


function encriptar(){
    
    
    var tPalabra = Palabra.value;
    var contenedor="";
    for(var i = 0; i < tPalabra.length; i++){
        if(tPalabra[i]=="o"){
            contenedor=contenedor+"ober";
        }
        else if(tPalabra[i]=="a"){
            contenedor=contenedor+"ai";
        }
        else if(tPalabra[i]=="e"){
            contenedor=contenedor+"enter";
        }
        else if(tPalabra[i]=="i"){
            contenedor=contenedor+"imes";
        }
        else if(tPalabra[i]=="u"){
            contenedor=contenedor+"ufat";
        }
        else{
            contenedor=contenedor+tPalabra[i];
        }
    } 
    pEncriptada.value = contenedor;
}

function desencriptar(){
    var tPalabra = Palabra.value;
    var contenedor="";

    for(var i = 0; i < tPalabra.length; i++){
        if((tPalabra[i]=="a")&&(tPalabra[i+1] =="i")){
            contenedor=contenedor+"a";
            i=i+1;
        }
        else if((tPalabra[i]=="e")&&(tPalabra[i+1]=="n")&&(tPalabra[i+2]=="t")&&(tPalabra[i+3]=="e")&&(tPalabra[i+4]=="r")){
            contenedor=contenedor+"e";
            i=i+4;
        }
        else if((tPalabra[i]=="i")&&(tPalabra[i+1]=="m")&&(tPalabra[i+2]=="e")&&(tPalabra[i+3]=="s")){
            contenedor=contenedor+"i";
            i=i+3;
        }
        else if((tPalabra[i]=="o")&&(tPalabra[i+1]=="b")&&(tPalabra[i+2]=="e")&&(tPalabra[i+3]=="r")){
            contenedor=contenedor+"o";
            i=i+3;
        }
        else if((tPalabra[i]=="u")&&(tPalabra[i+1]=="f")&&(tPalabra[i+2]=="a")&&(tPalabra[i+3]=="t")){
            contenedor=contenedor+"u";
            i=i+3;
        }
        else{
            contenedor=contenedor+tPalabra[i];
        }
    } 
    pEncriptada.value = contenedor;

}

function copy() {
    var copyText = document.querySelector("#in2");
    copyText.select();
    document.execCommand("copy");
}
  
document.querySelector("#b3").addEventListener("click", copy);

var bEncriptar = document.querySelector("button");
bEncriptar.addEventListener("click",encriptar);
var bDesencriptar = document.querySelector("#b2");
bDesencriptar.addEventListener("click",desencriptar);


