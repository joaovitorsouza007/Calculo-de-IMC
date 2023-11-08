let descricao;

const form = document.getElementById("form");

form.addEventListener("submit", function(event) {

    // previne o comportamento padrão do evento submit do js, ou seja impede o recarregamento da página

    event.preventDefault();

    const peso = document.getElementById("weight").value;

    const altura = document.getElementById("height").value;

    const imc = peso/(altura*altura);
    
    document.getElementById("infos").classList.remove("hidden")

    //Condições do IMC

    const campoImc = document.getElementById("value"); //aonde aparece o numero

    campoImc.textContent = imc.toFixed(2);

    campoImc.classList.add("attention");

    if (imc < 18.5) {

        descricao = "Cuidado! Você está abaixo do peso!";
        campoImc.style.color="orange";

    } else if ((imc >= 18.5) && (imc < 24.9)) {

        descricao = "Você tem um peso ideal!";
        campoImc.style.color="green";

    } else if ((imc >= 25) && (imc < 29.9) ){

        descricao =  "Você está sobreposto!";
        campoImc.style.color="yellow";

    } else if ((imc >= 30) && (imc < 34.9)){

        descricao = "Você está obeso!";
        campoImc.style.color="purple";

    } else if ((imc >=35) && (imc < 39.9)){
        campoImc.style.color="red";
        descricao = "Você está com obesidade severa!";


    } else {
        campoImc.style.color="red";
        descricao = "Você está com obesidade morbida procure um medico!";

    }

    document.getElementById("description").textContent = descricao;
})                                                                                                                                                                                                                                                                                                                                                                                                             