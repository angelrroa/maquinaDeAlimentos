let productos = {"A":270,"B":340,"C":390};

while (true){
    let lista ="";
    for(let producto in productos){
        lista += `${producto}:_________________${productos[producto]}\n`;
    }

    let opc = prompt(`Elija el producto \n ${lista}`);
}