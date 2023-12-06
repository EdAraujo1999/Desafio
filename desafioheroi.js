class heroi {
    constructor(nome, idade, especialidade){
      this.nome = nome
      this.idade = idade
      this.especialidade = especialidade
    }
  }
  
  let tipo = new heroi("edson", 12, "ninja")
  
  tipo1 = "guerreiro"
  switch (tipo.especialidade){
    case 'mago': console.log("o mago atacou usando magia");
    break;
  
    case 'guerreiro': console.log("o guerreiro atacou usando espada");
    break;
  
    case 'monge': console.log("o monge atacou usando artes marciais");
    break;
  
    case 'ninja': console.log("o ninja atacou usando shuriken");
    break;
  
    default:
      console.log("escolha apenas entre: mago, guerreiro, monge ou ninja!");
  
  }