let isMember = false;
const writeStyle = "<head><link rel='stylesheet' href='style.css'></head>";

document.getElementById("register").onclick = () => { isMember = true, alert("Voce foi registrado") };
document.getElementById("loadGal").onclick = () => { (isMember ? loadGallery(prompt("Digite o universo: ").toUpperCase(), prompt("Digite o heroi: ").toUpperCase(), prompt("Digite a quantidade de vezes para repetir o heroi: ")) : alert("Voce não possui uma conta")) };

function loadGallery(universe, hero, maxI) {
    if (universe == "MARVEL") {
        switch (hero) {
            case "HOMEM DE FERRO":
                for (let i = 0; i <= maxI; i++) {
                    document.write(writeStyle + "<img src='imgs/hdf.webp'>");
                }
                break;
            case "HULK":
                for (let i = 0; i <= maxI; i++) {
                    document.write(writeStyle + "<img src='imgs/hulk.webp'>");
                }
                break;
            case "CAPITAO AMERICA":
                for (let i = 0; i <= maxI; i++) {
                    document.write(writeStyle + "<img src='imgs/cptamerica.webp'>");
                }
                break;
            case "HOMEM ARANHA":
                for (let i = 0; i <= maxI; i++) {
                    document.write(writeStyle + "<img src='imgs/spiderman.webp'>");
                }
                break;
            case "THOR":
                for (let i = 0; i <= maxI; i++) {
                    document.write(writeStyle + "<img src='imgs/thor.webp'>");
                }
                break;
            default:
                alert("Digite um heroi valido");
                break;
        }
    }
    else if (universe == "DC") {
        switch (hero) {
            case "BATMAN":
                for (let i = 0; i <= maxI; i++) {
                    document.write("<head><link rel='stylesheet' href='style.css'><img src='imgs/batman.webp'>");
                }
                break;
            case "BRUCE WAYNE":
                for (let i = 0; i <= maxI; i++) {
                    document.write("<head><link rel='stylesheet' href='style.css'><img src='imgs/brucewayne.jpg'>");
                }
                break;
            case "LANTERNA VERDE":
                for (let i = 0; i <= maxI; i++) {
                    document.write("<head><link rel='stylesheet' href='style.css'><img src='imgs/lanternaverde.webp'>");
                }
                break;
            case "SCOOBY DOO":
                for (let i = 0; i <= maxI; i++) {
                    document.write("<head><link rel='stylesheet' href='style.css'><img src='imgs/scoobydoo.png'>");
                }
                break;
            case "SUPERMAN":
                for (let i = 0; i <= maxI; i++) {
                    document.write("<head><link rel='stylesheet' href='style.css'><img src='imgs/superman.webp'>");
                }
                break;
            default:
                alert("Digite um heroi valido");
                break;
        }
    }
    else {
        alert("Digite um universo valido");
    }
}