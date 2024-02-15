

function maquina_alimentos() {
    let productos = { "A": 270, "B": 340, "C": 390 };

    while (true) {
        let lista = "";
        for (let prod in productos) {
            lista += `${prod}:_________________${productos[prod]}\n`;

        }

        var producto = prompt(`Elija el producto \n ${lista}`).toUpperCase();
        if (["A", "B", "C"].includes(producto)) {
            break;
        } else {
            alert("Opción no valida");
        }
    };
    var acumulado = 0;

    if (producto === "A") {
        while (acumulado < 270) {
            var dinero = parseInt(prompt("Ingrese el dinero: "));
            if (dinero === 10 || dinero === 50 || dinero === 100) {
                acumulado += dinero;
            } else {
                console.log("Moneda no válida, intenta de nuevo");
            }
        }
        var vuelto = acumulado - 270;
    } else if (producto === "B") {
        while (acumulado < 340) {
            var dinero = parseInt(prompt("Ingrese el dinero: "));
            if (dinero === 10 || dinero === 50 || dinero === 100) {
                acumulado += dinero;
            } else {
                console.log("Moneda no válida, intenta de nuevo");
            }
        }
        var vuelto = acumulado - 340;
    } else if (producto === "C") {
        while (acumulado < 390) {
            var dinero = parseInt(prompt("Ingrese el dinero: "));
            if (dinero === 10 || dinero === 50 || dinero === 100) {
                acumulado += dinero;
            } else {
                console.log("Moneda no válida, intenta de nuevo");
            }
        }
        var vuelto = acumulado - 390;
    }

    console.log("Su vuelto:");

    if (vuelto === 0) {
        console.log("0");
    } else {
        while (vuelto >= 100) {
            console.log("100");
            vuelto -= 100;
        }
        while (vuelto >= 50) {
            console.log("50");
            vuelto -= 50;
        }
        while (vuelto >= 10) {
            console.log("10");
            vuelto -= 10;
        }
    }
}

// Llamada a la función
maquina_alimentos();
