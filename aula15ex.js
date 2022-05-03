/* function contar () {
    var ini = document.getElementById ('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.getElementById ('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível Contar'
       // window.alert ('Erro, faltam dados ')
        
    } else {
        res.innerHTML = 'Contando...  <br>'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0) {
            alert ('Passo Inválido! Considerando PASSO 1!')
            p = 1
        }
        if (i < f) {
        for (var c = i; c <= f; c += p) { //Contangem crescente
            res.innerHTML += c + '  \u{1F449} '
            }        
        } else { //Contagem regressiva
            for (var c = i; c >=f; c-=p) {
                res.innerHTML += c + '\u{1F449}'
            }
            res.innerHTML += '\u{1F3C1}' 
        } 
    }

} */

function tabuada () {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('selTab')
    if (num.value.length) {
        alert('Por favor, digite um número')
}   else {
    
    let n = Number(num.value)
    let c = 1
    tab.innerHTML = " "
    while (c <= 10) {
        let item = document.createElement('option')
        item.text = `${num} x ${c} = ${n*c}`
        item.value = `tab${c}`
        tab.appendChild(item)
        c++
    }
}


    
}