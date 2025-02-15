let max= 3;
let min= 1;

function getComputerChoice() {
    let rando= Math. floor(Math. random() * (max - min + 1)) + min;
    switch (rando) {
        case 1: 
        rando="Rock"
        break;
        case 2: 
        rando="Paper"
        break;
        case 3:
        rando="Scissors"
        break;
    }
    return rando
}