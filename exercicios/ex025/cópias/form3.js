function enviar() {
    var nota = document.getElementById('inota')
    var res = document.getElementById('res')
    var n = Number(nota.value)
    if (n >= 760 ) {
        res.innerHTML = "Você foi APROVADO!"
    } else {
        res.innerHTML = 'Você foi REPROVADO!'
    }
}