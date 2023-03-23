function gerar() {

    var numero = document.querySelector('input#txtnumero')
    var tab = document.querySelector('select#txttab')

    if (numero.value.length == 0) {
        alert('[ERRO , Verifique o Número e tente novamente!]')
    } else {

        var n = Number(numero.value)
        var c = 1;
        tab.innerHTML = ''

        for (c; c < 11; c++) {
            var item = document.createElement('option')
            item.text = ` ${n} x ${c} = ${n * c}`
            tab.appendChild(item)


        }
    }
}




