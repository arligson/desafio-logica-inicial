// para adicionar git add .
// para comitar git commit -m "mensagem"
// para encviar para o repositorio remoto git push -u origin main
// para clonar -> copia o link no github e coloca no terminal com o comando git clone "link"
// depois muda a pasta com "cd + o nome da pasta" depois para executar node/src para abri a pasta

// switch (nivelDoPersonagem) {
//     case nivelDoPersonagem >= 1001:
//     case nivelDoPersonagem <= 2000:
//         console.log(nivelDoPersonagem + "bronze")

// }




// XP for menor do que 1.000 = Ferro
// Se XP for entre 1.001 e 2.000 = Bronze

// Se XP for entre 2.001 e 5.000 = Prata

// Se XP for entre 5.001 e 7.000 = Ouro
// Se XP for entre 7.001 e 8.000 = Platina
// Se XP for entre 8.001 e 9.000 = Ascendente
// Se XP for entre 9.001 e 10.000= Imortal
// Se XP for maior ou igual a 10.001 = Radiante




let nomeDoPersonagem = "Capesca"
let nivelDoPersonagem = 7100
let rankingDoPersonagem = nivelDoPersonagem



if (nivelDoPersonagem < 1000) {
    rankingDoPersonagem = "Ferro"
    console.log(rankingDoPersonagem)

}
else if (nivelDoPersonagem >= 1001 && nivelDoPersonagem <= 2000); {
    rankingDoPersonagem = "Bronze"
    console.log(rankingDoPersonagem)

    // }else if (nivelDoPersonagem >= 2.001 && nivelDoPersonagem <= 5000); {
    //     rankingDoPersonagem = "Prata"
    //     console.log(rankingDoPersonagem)
    // }
    // else if (nivelDoPersonagem >= 5.001 && nivelDoPersonagem <= 7000); {
    //     rankingDoPersonagem = "ouro"
    //     console.log(rankingDoPersonagem)
    // }
    // else (nivelDoPersonagem >= 7.001 && nivelDoPersonagem <= 8000); {
    //     rankingDoPersonagem = "platina"
    //     console.log(rankingDoPersonagem)
}
for (nivelDoPersonagem >= 7.001 && nivelDoPersonagem <= 8000; rankingDoPersonagem); {
    rankingDoPersonagem = "platina"
    console.log(rankingDoPersonagem)
}