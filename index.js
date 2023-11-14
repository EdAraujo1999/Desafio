let nome = "Edson" //variáveis publicas
let xp = 10000

//tomada de decisão
if (xp <= 1000) {
    let nivel = "Ferro" // variaveis internas 
    console.log ("O héroi de nome " + nome + ", está no nível de " + nivel)
}

else if(xp > 1000 && xp <= 2000){
  let nivel = "Bronze"
  console.log ("O héroi de nome " + nome + ", está no nível de " + nivel)
}

else if(xp > 2000 && xp <= 5000){
  let nivel = "Prata"
  console.log ("O héroi de nome " + nome + ", está no nível de " + nivel)
}

else if(xp > 5000 && xp <= 7000){
  let nivel = "Ouro"
  console.log ("O héroi de nome " + nome + ", está no nível de " + nivel)
}

else if(xp > 7000 && xp <= 8000){
  let nivel = "Platina"
  console.log ("O héroi de nome " + nome + ", está no nível de " + nivel)
}

else if(xp > 8000 && xp <= 9000){
  let nivel = "Ascendente"
  console.log ("O héroi de nome " + nome + ", está no nível de " + nivel)
}

else if(xp > 9000 && xp <= 10000){
  let nivel = "Imortal"
  console.log ("O héroi de nome " + nome + ", está no nível de " + nivel)
}

else if(xp => 10000){
  let nivel = "Diamante"
  console.log ("O héroi de nome " + nome + ", está no nível de " + nivel)
}