let nomeDoPersonagem = "Fallen"
let nivelDoPersonagem = (10030)
let rankingDoPersonagem = nivelDoPersonagem



if (nivelDoPersonagem < 1000) {
    rankingDoPersonagem = "Ferro"
    console.log("O Herói de nome " + nomeDoPersonagem + " está no nível de " + rankingDoPersonagem +
        " com " + nivelDoPersonagem + " de exp.")

}
else if (nivelDoPersonagem >= 1001 && nivelDoPersonagem <= 2000) {
    rankingDoPersonagem = "Bronze"
    console.log("O Herói de nome " + nomeDoPersonagem + " está no nível de " + rankingDoPersonagem +
        " com " + nivelDoPersonagem + " de exp.")

} else if (nivelDoPersonagem >= 2001 && nivelDoPersonagem <= 5000) {
    rankingDoPersonagem = "Prata"
    console.log("O Herói de nome " + nomeDoPersonagem + " está no nível de " + rankingDoPersonagem +
        " com " + nivelDoPersonagem + " de exp.")
}
else if (nivelDoPersonagem >= 5001 && nivelDoPersonagem <= 7000) {
    rankingDoPersonagem = "Ouro"
    console.log("O Herói de nome " + nomeDoPersonagem + " está no nível de " + rankingDoPersonagem +
        " com " + nivelDoPersonagem + " de exp.")
}
else if (nivelDoPersonagem >= 7001 && nivelDoPersonagem <= 8000) {
    rankingDoPersonagem = "Platina"
    console.log("O Herói de nome " + nomeDoPersonagem + " está no nível de " + rankingDoPersonagem +
        " com " + nivelDoPersonagem + " de exp.")
}
else if (nivelDoPersonagem >= 8001 && nivelDoPersonagem <= 9000) {
    rankingDoPersonagem = "Ascendente"
    console.log("O Herói de nome " + nomeDoPersonagem + " está no nível de " + rankingDoPersonagem +
        " com " + nivelDoPersonagem + " de exp.")
}
else if (nivelDoPersonagem >= 9001 && nivelDoPersonagem <= 10000) {
    rankingDoPersonagem = "Imortal"
    console.log("O Herói de nome " + nomeDoPersonagem + " está no nível de " + rankingDoPersonagem +
        " com " + nivelDoPersonagem + " de exp.")
}
else if (nivelDoPersonagem >= 10001) {
    rankingDoPersonagem = "Radiante"
    console.log("O Herói de nome " + nomeDoPersonagem + " está no nível de " + rankingDoPersonagem +
        " com " + nivelDoPersonagem + " de exp.")
}

