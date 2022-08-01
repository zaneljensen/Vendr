


function _draw() {
    let values = ProxyState.values;
    let cardsTemplate = ''
    values.forEach(v => cardsTemplate += v.CardTemplate)
    document.getElementById("app").innerHTML = app