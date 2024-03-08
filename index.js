const respostaElement = document.querySelector('#resposta')
const inputPergunta = document.querySelector('#inputPergunta')
const buttomPerguntar= document.querySelector("#buttomPerguntar")
const respostas = [
  "Certeza!",
  "Não tenho tanta certeza.",
  "É decididamente assim.",
  "Não conte com isso.",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "A meu ver, sim.",
  "Minhas fontes dizem não.",
  "Provavelmente.",
  "Não é possível prever agora.",
  "Perspectiva boa.",
  "As perspectivas não são tão boas.",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim.",
]


function fazerPergunta() {

  if (inputPergunta.value == "")  {
    alert('digite uma pergunta, por favor mewo.')
    return
  }       

  buttomPerguntar.setAttribute("disabled", true) 

  const pergunta = "<div>" + inputPergunta.value  +
  "</div>"

const TotalResposta = respostas.length
const numeroAleatorio = Math.floor(Math.random() * TotalResposta)

  respostaElement.innerHTML = pergunta + respostas[numeroAleatorio]

respostaElement.style.opacity= 1;
  setTimeout(function( ) {
    respostaElement.style.opacity= 0;
    buttomPerguntar.removeAttribute("disabled")

  },3000)
}
  
 
