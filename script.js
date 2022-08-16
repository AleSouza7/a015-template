/*
let num = Number(prompt("Digite um numero. Para sair digite zero"))
let soma = 0
//enquanto a condição for verdadeira ela continura no loop
while(num!==0){
    soma =soma + num
    num =Number(prompt("Digite um numero. Para sair digite zero"))
}
alert(`A soma dos numeros ${soma}`)

// exercioo 2

let num = Number(prompt("insira um numero"))

//for precisa de um contador ele vai para no numero que o usuario digitou
for(let i = 0; i <= num; i++){
    document.write(`-${i}
    `)
}

// exercicio 3

const array= [7,6,5,4,3,2,1]

for(let i = 0; i <= array.length;i++){
    console.log(`O indice ${i} é = ${array[i]}`)
}

//Exercicio de fixação

let tipo = prompt("Digite um tipo de Usuário A:Administrador B:Usuário Comum C:Usuário assinante").toUpperCase()

while(tipo!=="A"){
    alert("Acesso Negado")
    prompt("Digite o tipo Usário admin").toUpperCase()
}
alert("Boa-vindas, admin!")

//exercicio 2
let num = Number(prompt("Digite a tabuada"))

for(let i = 0; i <=10; i++){
    num= i*2
    console.log(num);
}*/

//EXERCICIO

let arraystring=["bolacha","arroz","azeite","feijão"]

for(let i = 0; i < arraystring.length; i++){
    console.log(`O indice ${i} é ${arraystring[i]}`.toUpperCase())
}