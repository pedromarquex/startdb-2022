class Forca {
  constructor(palavra) {
    this.palavraSecreta = palavra.split("");
    this.letrasChutadas = [];
    this.vidas = 6;
    this.palavra = new Array(palavra.length).fill("_");
    this.estadoDoJogo = "aguardando chute";
  }

  // se a letra estiver na palavra secreta, substitui o "_" pelo caractere na palavra
  substituirLetraNaPalavra(letra) {
    if (this.palavraSecreta.includes(letra)) {
      this.palavraSecreta.forEach((letraSecreta, index) => {
        if (letraSecreta === letra) {
          this.palavra[index] = letra;
        }
      });
    }
  }

  // se a palavra nao tiver "_", entao ganhou
  verificaSeGanhou() {
    if (!this.palavra.includes("_")) {
      this.estadoDoJogo = "ganhou";
    }
  }

  // se as vidas chegaram a 0, entao perdeu
  verificaSePerdeu() {
    if (this.vidas === 0) {
      this.estadoDoJogo = "perdeu";
      return true;
    }
    return false;
  }

  chutar(letra) {
    // se for chutada mais de uma letra, ignora a rodada
    // se a letra já estiver no array ignora a rodada
    if (letra.length > 1 || this.letrasChutadas.includes(letra)) {
      return;
    }

    this.letrasChutadas.push(letra);

    // se a letra não estiver na palavra secreta, perde uma vida
    if (!this.palavraSecreta.includes(letra)) {
      this.vidas -= 1;
    }

    if (this.verificaSePerdeu()) {
      return;
    }

    this.substituirLetraNaPalavra(letra);

    this.verificaSeGanhou();
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
