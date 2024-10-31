import { getCss, tickfont } from "./comum.js";
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
    },
    xaxis:{
        tickfont: tickfont,
        title: {
            text: 'Nome das redes sociais',
            font:{
                color: getCss('--cor-secundaria')
            }
        }
    },
    yaxis:{
        tickfont: tickfont,
        title: {
            text: 'Milhões de usuários ativos',
            font:{
                color: getCss('--cor-secundaria')
             }
        }
     }
}
const grafico = document.createElement('div');
grafico.className = 'grafico';
document.getElementById('graficos-container').appendChild(grafico);
Plotly.newPlot(grafico,infos,layout);
}

quantidadeDeUsuarios();