let messages = {
    erro1: "Por favor, preencha todos os campos.",
    erro2: "Infelizmente, ainda não tem tempo suficiente para se aposentar."
};

function calcular() {

    const genderElement = document.querySelector('input[name="gender"]:checked');
    const ageInput = document.querySelector('input[name="age"]').value;
    const salaryInput = document.querySelector('input[name="salary"]').value;

    if (!genderElement || !ageInput || !salaryInput) {
        alert(messages.erro1);
        return;
    }

    const gender = genderElement.value;
    let age = Number(ageInput);
    const salary = Number(salaryInput);

    let Tmin = gender === "male" ? 20 : 15;

    if (age < Tmin) {
        alert(messages.erro2);
        return;
    }

    let anosExtras = age - Tmin;
    let percentual = 0.60 + 0.02 * anosExtras;
    let aposentadoria = salary * percentual;

    let result = document.getElementById("result");
    result.innerText = "R$: " + aposentadoria.toFixed(2);
}
