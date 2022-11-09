let totalCompra = 0,
    seguirComprando = true
const CARRITO = []
const PRODUCTOS = []

class Instrumento {
    constructor(id, marca, modelo, precio, stock){
        this.id = id;
        this.marca = marca;
        this.precio = precio;
        this.modelo = modelo;
        this.stock = stock;
    }
}

const Guitarra = new Instrumento (1, "Fender", "Gibson", 9999, 35)
const Piano = new Instrumento (2, "Rhodes", "Yamaha", 2000, 50)
const Bajo = new Instrumento (3, "Mustang", "Guild", 4999, 10)
const Sintetizador = new Instrumento (4, "Korg", "Arturia", 1300, 80)
PRODUCTOS.push(Guitarra)
PRODUCTOS.push(Piano)
PRODUCTOS.push(Bajo)
PRODUCTOS.push(Sintetizador)

console.log(PRODUCTOS);

function descuento(cantidad, totalCompra) {
    let totalCompra2 = totalCompra;
    if (cantidad >= 2 && cantidad < 5) {
        let descuento = (totalCompra * 10) / 100;
        console.log(descuento);
        totalCompra2 -= descuento;
    } else if (cantidad >= 5) {
        let descuento = (totalCompra * 20) / 100;
        console.log(descuento);
        totalCompra2 -= descuento;
    }
    console.log(totalCompra2);
    return totalCompra2;
}

const  iniciarCompra = () => {
    while (seguirComprando) {
        let producto = parseInt(prompt('Elegí el producto que deseas: 1.Guitarra - 2.Piano - 3.Bajo- 4.Sintetizador'))
        while (producto !== 1 && producto !== 2 && producto !== 3 && producto !== 4){
            producto = parseInt(prompt('Elegí el producto que deseas: 1.Guitarra - 2.Piano - 3.Bajo- 4.Sintetizador'))
        }
        CARRITO.push(PRODUCTOS[producto - 1])
        let seguir = parseInt(prompt('¿Queres seguir comprando?: 1.SI - 2.NO'))
        while (seguir !== 1 && seguir !== 2){
            seguir = parseInt(prompt('¿Queres seguir comprando?: 1.SI - 2.NO'))
        }
        if (seguir === 2) {
            seguirComprando = false
        }
    }
    console.log(CARRITO);

    totalCompra = CARRITO.map(producto => producto.precio).reduce((a, b) => a + b)
    console.log(totalCompra);
    alert(`El total de tu compra es $${totalCompra}`)
    if(CARRITO.length > 1){
        let discount = descuento(CARRITO.length, totalCompra)
        alert(`Con el descuento aplicado, pagas: $${discount}`)
    }
}

iniciarCompra()