const getCss = (variavel) => {
    return getComputedStyle (document.body).getPropertyValue(variavel)
}

const tickfont = {
    color: getCss('--cor-primaria'),
    size: 16,
    family: getCss('--font')
}

export{
    getCss, tickfont
}