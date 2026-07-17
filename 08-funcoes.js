// uma função é um bloco de código reutilizável
// executa uma tarefa especifica
// funções são chamadas/invocadas

/* 

function nomeDaFuncao(){
  // código da função
}

*/

// 1 - criando a função
function saudacao() {
  document.body.innerHTML = "Olá, bem vindo(a)"
}

// 2 - para a função funcionar/executar, precisamos chama-la/invocar
saudacao()


/// função com parâmetros
function cumprimento(nomeDoUsuario) {
  // o sinal de + está sendo usado para concatenar(unir/juntar) o texto de boas vindas com o texto do parâmetro nomeDoUsuario
  document.body.innerHTML = "Olá, bem vindo(a) " + nomeDoUsuario
}

// chamando/invocando uma função com parâmetro
cumprimento("Tâmara da Silva")

// exemplo de uma aplicação
let user = true
if (user === true) {
  cumprimento("Matheus Ursino")
} else {
  document.body.innerHTML = "Credenciais inválidas"
}


/* Outos exemplos de funções com parâmetros */
function soma(a, b) {
  document.body.innerHTML = a + b
}

soma(8, 20) // 8 + 20 = 28
soma("Olá ", "Victor") // "Olá " + "Victor" = "Olá Victor"


/* Exemplo de função com retorno e validação de dados */
function multiplicar(a, b) {
  // verifica se o valor do parametro A foi informado
  if (a === undefined) {
    document.body.innerHTML = "Por favor, digite o valor do número A"
    return
  }

  // verifica se o valor do parametro B foi informado
  if (b === undefined) {
    document.body.innerHTML = "Por favor, digite o valor do número B"
    return
  }

  // typeof = é um operador do JavaScript que serve para DESCOBRIR O TIPO DE UM VALOR OU UMA VARIÁVEL
  // o operador !==(diferente) avaliar se o elemento é diferente do tipo e valor
  if (typeof a !== "number") {
    document.body.innerHTML = "O valor de A precisa ser um número"
    return
  }

  if (typeof b !== "number") {
    document.body.innerHTML = "O valor de B precisa ser um número"
    return
  }

  // Number = é uma função usada para converter valores para números
  // isNaN = é uma função que serve para verificar se o valor é NaN(Not a Number)
  if (Number.isNaN(a)) {
    document.body.innerHTML = "Número inválido"
    return
  }

  if (Number.isNaN(b)) {
    document.body.innerHTML = "Número inválido"
    return
  }

  // document.body.innerHTML = "O resultado entre ${a} e ${b} é igual a ${a*b}"
  // "O resultado da multiplicação entre" + a + "e" + b + "é igual a" + (a * b)
  // `` = Template literals
  document.body.innerHTML = `O resultado da multiplicação entre ${a} e ${b} é igual a ${a * b}`

}

// multiplicar(a = 5, b = 2) // 5 * 2 = 10
// multiplicar(5, 2) // 5 * 2 = 10
multiplicar(a = 100, b = 9) // 5 * 2 = 10