
function validarDatos() {
    $("#msjNombre").text("");
    $("#msjApellido").text("");

  let nombre = $("#name").val();
  let apellido = $("#apellido").val();
  const email = document.getElementById("email");
  const numero = document.getElementById("num");
  const form = document.getElementById("form");
  const parrafo1 = document.getElementById("warnings");
  const parrafo2 = document.getElementById("msjEnviado");
  if (nombre == ""){
    $("#msjNombre").text("Complete este campo")
  }
  if (apellido == ""){
    $("#msjApellido").text("Complete este campo")
  }
  form.addEventListener("submit", e=>{
    e.preventDefault(); //evita que se recargue la pág antes de validar los datos
    let warnings = "";
    let enviar = false;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/ ;
    parrafo1.innerHTML = "";
    parrafo2.innerHTML = "";

    if (!regexEmail.test(email.value)){
        warnings +="El mail no es válido o es un campo vacío.";
        enviar = true;
    }
    if (enviar){
        parrafo1.innerHTML = warnings;
    }else{
        parrafo2.innerHTML = "Enviado"
    }
})

}