function temperatura() {
    var txtv = window.document.querySelector('input#txtvel');
    var res = window.document.querySelector('h1#res');
    var temp = Number(txtv.value); 

    if (temp < 0) {
        res.innerHTML = `Está muito frio! Vista um casaco pesado.`;
    } else if (temp < 15) {
        res.innerHTML = `Está frio. Vista um casaco.`;
    } else if (temp < 25) {
        res.innerHTML = `O tempo está agradável. Vista roupas leves.`;
    } else {
        res.innerHTML = `Está quente. Vista roupas bem leves e beba bastante água.`;
    }
}
