/*let  num  = [5, 8, 2, 9, 3]
num.sort ()
num.push(1)
console.log(num)
console.log ('O numero de posições do nosso vetor é ' + num.length)
*/

let valores = [8, 1, 7, 4, 2, 9]

valores.sort()

//console.log(valores[0])

/*for (let pos = 0; pos < valores.length; pos++) {
    console.log ('A posição ' + pos + ' tem o valor ' + valores[pos])
} */

for (let pos in valores) {
    console.log ('A posição ' + pos + ' tem o valor ' + valores[pos])
}