const inputs = document.querySelectorAll("input[name = 'entrada']")
const botao = document.getElementById("botao")
const mensagens = document.getElementsByClassName("mensagem")

botao.addEventListener('click', function () {
    for (let i = 0; i < inputs.length; i++) {
        let estaNeutro = inputs[i].value == ""
        let estaPreenchido = !estaNeutro
        let estaVermelho = inputs[i].classList.contains("vermelho")
        let textarea = document.getElementById("mensagem-input")
        let areaVazia = textarea.value == ""
        let areaPreenchida = !areaVazia
        let areaVermelha = textarea.classList.contains("vermelho")
        
        if (estaNeutro && estaVermelho) {
            inputs[i].classList.remove("neutro")
            inputs[i].classList.remove("verde")
            inputs[i].classList.add("vermelho")
            mensagens[i].textContent = "campo obrigatório"
            mensagens[i].style.color = "#F52E2E"
        }  else if (estaNeutro) {
            inputs[i].classList.remove("neutro")
            inputs[i].classList.add("vermelho")
            mensagens[i].textContent = "campo obrigatório"
            mensagens[i].style.color = "#F52E2E"
        } else if (estaPreenchido && estaVermelho) {
            inputs[i].classList.remove("vermelho")
            inputs[i].classList.add("verde")
            mensagens[i].textContent = " "
        } else if (estaPreenchido) {
            inputs[i].classList.remove("neutro")
            inputs[i].classList.add("verde")
            mensagens.textContent = " "
        }
        
        if (areaVazia && areaVermelha) {
            textarea.classList.remove("neutro")
            textarea.classList.remove("verde")
            textarea.classList.add("vermelho")
            mensagens[inputs.length - 1].textContent = "campo obrigatório"
            mensagens[inputs.length - 1].style.color = "#F52E2E"
        } else if (areaVazia) {
            textarea.classList.remove("neutro")
            textarea.classList.add("vermelho")
            mensagens[inputs.length - 1].textContent = "campo obrigatório"
            mensagens[inputs.length - 1].style.color = "#F52E2E"
        } else if (areaPreenchida && areaVermelha) {
            textarea.classList.remove("vermelho")
            textarea.classList.add("verde")
            mensagens[inputs.length - 1].textContent = ""
        } else if (estaPreenchido) {
            textarea.classList.remove("neutro")
            textarea.classList.add("verde")
            mensagens[inputs.length - 1].textContent = ""
        }

        
    }
})

