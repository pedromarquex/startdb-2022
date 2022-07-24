class Forca {
  chutar(letra) {}

  buscarEstado() {
    return "";
  } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

  buscarDadosDoJogo() {
    return {
      letrasChutadas: [], // Deve conter todas as letras chutadas
      vidas: 6, // Quantidade de vidas restantes
      palavra: [], // Deve ser um array com as letras que já foram acertadas ou o valor "_"
    };
  }
}

module.exports = Forca;
