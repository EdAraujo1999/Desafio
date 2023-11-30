let vitorias = 90;
let derrotas = 0;
saldo = vitorias - derrotas;

if (saldo <= 10) {
    let nivel = "Ferro" // variaveis internas 
    console.log ("O héroi tem saldo de " + saldo + " de vitorias está no nível de: "+ nivel)
}
else if(saldo > 11 && saldo <= 20){
  let nivel = "Bronze"
  console.log ("O héroi tem saldo de " + saldo + " de vitorias está no nível de: "+ nivel)
}

else if(saldo > 21 && saldo <= 50){
  let nivel = "Prata"
  console.log ("O héroi tem saldo de " + saldo + " de vitorias está no nível de: "+ nivel)
}

else if(saldo > 51 && saldo <= 80){
  let nivel = "Ouro"
  console.log ("O héroi tem saldo de " + saldo + " de vitorias está no nível de: "+ nivel)
}

else if(saldo > 81 && saldo <= 91){
  let nivel = "Diamante"
  console.log ("O héroi tem saldo de " + saldo + " de vitorias está no nível de: "+ nivel)
}

else if(saldo > 91 && saldo <= Lendário){
  let nivel = "Lendário"
  console.log ("O héroi tem saldo de " + saldo + " de vitorias está no nível de: "+ nivel)
}

else if(saldo => 101){
  let nivel = "IMORTAL"
  console.log ("O héroi tem saldo de " + saldo + " de vitorias está no nível de: "+ nivel)
}
