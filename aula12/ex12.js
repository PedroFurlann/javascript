var agora = new Date
var hora = agora.getHours()


console.log ('Agora são exatamente ' + hora + ' horas')
if (hora < 12) {
    console.log ('Bom dia são ' +hora+ ' horas')
} else if (hora <= 18) {
    console.log('Boa tarde são ' + hora + ' horas')
} else {
    console.log('Boa noite são 0 ' + hora + ' horas')
}