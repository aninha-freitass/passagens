var readline =require('readline-sync');

var escolha = 1

while(escolha != 0){
console.log("+_ _ _ _ _ _ Passagens áereas_ _ _ _ _ _ + ")
console.log("|                                          |")
console.log("|      1 - Comprar Passagens               |")
console.log("|      2 - Consultar Voos                  |")
console.log("|      3 - Mapa Assentos                   |")
console.log("|      4 - Emitir Tickit                   |")
console.log("|      0 - Encerrar o progama              |")
console.log("+_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ +")

 escolha = readline.question ("Digite sua escolha....")

if(escolha == 1){
    var nome = readline.question ("Digite seu nome: ")
    var sobrenome = readline.question ("Digite seu sobrenome: ")
    var idade = readline.question ("Digite sua idade: ")
    var assento = readline.question ("Digite seu assento: ")
    var origem = readline.question ("Digite sua origem: ")
    var destino = readline.question ("Digite seu destino: ")

    console.log("+ _ _ _ _ _ _ Passagens áereas _ _ _ _ _ _")
    console.log("Você está em -> comprar Passagem  ")
    console.log("nome:" + nome) 
    console.log("sobrenome:" + sobrenome)
    console.log("idade:" + idade)
    console.log("assento:" + assento)
    console.log("origem:" + origem)
    console.log("destino:" + destino)
    var certo = readline.question("Informacoes corretas? sim/nao")  
    if(certo = "sim"){
        console.log("+ _ _ _ _ _ _  Passagens Aéreas _ _ _ _ _ _ _ +")
        console.log("")
        console.log("*Resumo da Compra*")
        console.log("")
        console.log("Cliente: "+ nome +" "+ sobrenome)
        console.log("Idade:"+ idade)
        console.log("Assento: "+ assento)
        console.log("Voo: "+ origem + " x "+ destino  )
        console.log("Status do Voo: confirmado")
        console.log("")
        console.log("Valor: R$800,00")
    }
    else if(certo = "não"){

    }
}
if(escolha == 2){
    console.log("+ _ _ _ _ _ _  Passagens Áereas _ _ _ _ _ _ _ +")
    console.log("Você está em -> Consulta de Voos ")
    console.log("")
    console.log("Origem             x               Destino")
    console.log("_______________________________________________")
    console.log("")
    console.log("Presidente Prudente                São Paulo")
    console.log("São Paulo                Presidente Prudente")
    console.log("Presidente Prudente                    Santa Catarina")
    console.log("Presidente Prudente                    Coréia do Sul")
}
if(escolha == 3){
    console.log("+ _ _ _ _ _ _  Passagens Áereas _ _ _ _ _ _ _ +")
    console.log("Você está em -> Mapas de assentos")
    console.log("")
    console.log("---------------------------------------")
    console.log("A1 A2 A3 A4 A5 A6 A7 A8 A9 A10 A11 A12")
    console.log("B1 B2 B3 B4 B5 B6 B7 B8 B9 B10 B11 B12")
    console.log("---------------------------------------")
}
if(escolha == 4){
    console.log("+ _ _ _ _ _ _  Passagens Áereas _ _ _ _ _ _ _ +")
    console.log("")
    console.log("Você está em -> emitir ticket")
    console.log("**************************************")
    console.log(" OBRIGADO POR VIAJAR CONOSCO")
    console.log("")
    console.log("*  Cliente: "+ nome+"                               *")
    console.log("*  Idade: "+idade+"     Assento: "+assento+".        *")
    console.log("*  Origem/Destino: "+origem+" > "+destino+".          *")
    console.log("*  Status do Voo: confirmado                       *")
    console.log("****************************************************")

}
else if (escolha !=1 && escolha !=2 && escolha !=3 && escolha!=4 && escolha !=0){
    console.log("escolha inexistence")
}
console.log("+_ _ _ _ _ _ Passagens áereas _ _ _ _ _ _ + ")
console.log("|                                          |")
console.log("|      1 - Comprar Passagens               |")
console.log("|      2 - Consultar Voos                  |")
console.log("|      3 - Mapa Assentos                   |")
console.log("|      4 - Emitir Tickit                   |")
console.log("|      0 - Encerrar o progama              |")
console.log("+_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ +")

 escolha = readline.question ("Digite sua escolha....")

}




 