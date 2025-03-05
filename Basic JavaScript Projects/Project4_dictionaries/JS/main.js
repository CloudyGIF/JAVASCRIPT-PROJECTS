function dictionary(){
    var PC = {
        Processor: "Intel",
        GPU: "NVIDIA GeForce Ti 2100",
        RAM: 64
    }

    document.getElementById("dictionary").innerHTML = PC.GPU;
}

function dictionary2(){
    var PC = {
        Processor: "Intel",
        GPU: "NVIDIA GeForce Ti 2100",
        RAM: 64
    }

    delete PC.RAM;

    document.getElementById("dictionary2").innerHTML = PC.RAM;
}