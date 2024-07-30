const atletas = [
  {
    nome: "Cesar Abascal",
    notas: [10, 9.34, 8.42, 10, 7.88]
  },
  {
    nome: "Fernando Puntel",
    notas: [8, 10, 10, 7, 9.33]
  },
  {
    nome: "Daiane Jelinsky",
    notas: [7, 10, 9.5, 9.5, 8]
  },
  {
    nome: "Bruno Castro",
    notas: [10, 10, 10, 9, 9.5]
  }
];


function calcularMedia(notas) {
  const notasOrdenadas = notas.sort((a, b) => a - b);
  
  const notasComputadas = notasOrdenadas.slice(1, 4);
 
  let soma = 0;
  notasComputadas.forEach(nota => {
    soma += nota;
  });
  

  const media = soma / notasComputadas.length;
  return media;
}


function exibirResultados(atletas) {
  atletas.forEach(atletas => {
    const mediaValida = calcularMedia(atletas.notas);
    console.log(`Atleta: ${atletas.nome}`);
    console.log(`Notas Obtidas: ${atletas.notas.join(",")}`);
    console.log(`Média Válida: ${mediaValida}`);
    console.log("");
  });
}


exibirResultados(atletas);
