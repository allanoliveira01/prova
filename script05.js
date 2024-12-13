let x = [3, 8, 4, 2, 1, 6, 8, 7, 11, 9]
let y = [2, 1, 5, 12, 3, 0, 1, 4, 5, 6]
let intersecao = []

for(let i = 0; i < x.length; i++){
    for(let j = 0; j < x.length; j++){
        if(x[i] == y[j]){
            intersecao[i] = x[i]
        }
    }
}

console.log(`${intersecao}`)
