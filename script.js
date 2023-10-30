let jogador = "x"

function marcar(cell){

    if (cell.innerHTML === "") {
        cell.innerHTML = jogador;
    } else {
        return
    }

    if (jogador == "x") {
        jogador = "o";
    } else {
        jogador = "x"
    }

}




    

    
