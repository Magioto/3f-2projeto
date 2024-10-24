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
const layout = {
    plot_bgcolor: getCss('--cor-de-fundo'),
    paper_bgcolor: getCss('--cor-de-fundo'),
    title: {
        Text: 'Redes socias com mais usuários no mundo',
        x:0,
        font: {
            color: getCss('--cor-primaria'),
            family: getCss('--font'),
            size: 30
        }
    }
}
const grafico = document.createElement('div');
grafico.className = 'grafico';
document.getElementById('graficos-container').appendChild(grafico);
Plotly.newPlot(grafico,infos,layout);
}

quantidadeDeUsuarios();