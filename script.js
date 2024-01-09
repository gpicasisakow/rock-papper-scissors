function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1) + min));
}

function getComputerChoice(lista) {
    let opciones_numero = random(0, 2)
    return lista[opciones_numero]
}

function getUserChoice(lista) {
    let opcion = prompt("Elija piedra, papel o tijera: ");
    let opcion2 = opcion.toLowerCase();
    
    if (!lista.includes(opcion2)) {
        console.log("Opcion incorrecta");
    } else {
        return opcion2
    }
}

function game(list) {
    let pc = 0;
    let pu = 0;
    for(let i = 0; i < 5 ; i++) {
        let uc = getUserChoice(list);
        let cc = getComputerChoice(list);

        console.log("El usuario eligio: " + uc);
        console.log("La computadora eligio: " + cc);

        if (uc === "piedra" && cc === "tijeras"){
            pu++;
            console.log("La partida va: " + pu + " Usuario   " + pc + " Computadora");
        } else if (uc === "papel" && cc === "piedra"){
            pu++;
            console.log("La partida va: " + pu + " Usuario   " + pc + " Computadora");
        } else if (uc === "tijeras" && cc === "papel"){
            pu++;
            console.log("La partida va: " + pu + " Usuario   " + pc + " Computadora");
        } else if(uc === cc){
            console.log("La partida sigue igual.");
            continue
        } else {
            pc++;
            console.log("La partida va: " + pu + " Usuario   " + pc + " Computadora");
        }

        if (((pu - pc) === -3) || ((pu - pc) === 3)) {
            break
        } else {
            continue
        }
    }

    if (pc > pu) {
        console.log("Gano la computadora");
    } else if (pu > pc) {
        console.log("Gano el usuario")
    } else {
        console.log("Empate")
    }
}

let opciones = ['piedra' , 'papel' , 'tijeras'];

console.log(game(opciones))

