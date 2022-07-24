class Forca {
  constructor(palavra) {
    this.palavraSecreta = palavra.split("");
    this.letrasChutadas = [];
    this.vidas = 6;
    this.palavra = new Array(palavra.length).fill("_");
    this.estadoDoJogo = "aguardando chute";
  }

  chutar(letra) {
    // se chutou mais de uma letra ignora a rodada
    if (letra.length > 1) {
      return;
    }

    // se a letra já estiver no array ignora a rodada
    if (this.letrasChutadas.includes(letra)) {
      return;
    }

    // adiciona uma letra ao array de letras chutadas
    this.letrasChutadas.push(letra);

    // se a letra não estiver na palavra secreta, decrementa a vida
    if (!this.palavraSecreta.includes(letra)) {
      this.vidas -= 1;
    }

    // verifica se perdeu
    if (this.vidas === 0) {
      this.estadoDoJogo = "perdeu";
      return;
    }

    // se a letra estiver na palavra secreta, substitui o "_" pelo caractere na palavra
    if (this.palavraSecreta.includes(letra)) {
      for (let i = 0; i < this.palavraSecreta.length; i += 1) {
        if (this.palavraSecreta[i] === letra) {
          this.palavra[i] = letra;
        }
      }
    }

    // se após o chute a palavra nao tiver "_" ganhou
    if (!this.palavra.includes("_")) {
      this.estadoDoJogo = "ganhou";
    }
  }

  buscarEstado() {
    // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"
    return this.estadoDoJogo;
  }

  buscarDadosDoJogo() {
    return {
      letrasChutadas: this.letrasChutadas, // Deve conter todas as letras chutadas
      vidas: this.vidas, // Quantidade de vidas restantes
      palavra: this.palavra, // Deve ser um array com as letras que já foram acertadas ou o valor "_"
    };
  }
}

module.exports = Forca;
