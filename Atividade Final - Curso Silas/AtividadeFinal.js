let cesta = 0

function colocar(){
    cesta = cesta + 1
    alert(cesta)
    sessionStorage.setItem('cesta',cesta)
}

function irCarrinho(){
    document.write("<h1>"+sessionStorage.getItem('cesta')+"<h1>")
}


