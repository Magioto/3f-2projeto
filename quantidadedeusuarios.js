import { getCss } from "./comum.js";
async function quantidadeDeUsuarios(){
const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json'
const res = await fetch(url)
const dados = await res.json();
const nomeDasResdes = Object.keys(dados);
const quantidadeDeUsuarios = Object.values(dados);

const infos = [
    {
        x: nomeDasResdes,
        y: quantidadeDeUsuarios,
        type: 'bar',
        marker:{
            color: getCss('--cor-primaria')
        }
    }
]
const grafico = document.createElement('div');
grafico.className = 'grafico';
document.getElementById('graficos-container').appendChild(grafico);
Plotly.newPlot(grafico,infos);
}

quantidadeDeUsuarios();