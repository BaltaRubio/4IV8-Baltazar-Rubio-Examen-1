function validar(formulario){

    var checkOK = "0123456789";

    var checkStr = formulario.meses.value;

    var allValido = true;

if(!allValido){
    alert("Escriba unicamente numeros en el campo de meses");
    formulario.meses.focus();
    return false;
}
}