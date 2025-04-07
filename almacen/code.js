class Product{
    constructor(nombre,price)
    {
        this.nombre = nombre
        this.price = price
    }
}


class UI{
    addProduct(product){
        const productList = document.getElementById('resultado');
        const element = document.createElement('div');
        element.innerHTML=`
        <div>
        ${product.nombre} = ${product.price} pesos
        </div>
        `
        productList.appendChild(element);
        this.reserForm();

    }
    reserForm(){
        document.getElementById('miFormulario').reset();
    }
    deleteProduct(){

    }
    showMessege(){

    }
}

// DOM evento
document.getElementById('miFormulario').addEventListener('submit', function(e){
    const productos = document.getElementById('producto').value
    const precios= document.getElementById('precio').value
    const product = new Product(productos,precios);
    
    const ui = new UI();
    ui.addProduct(product);
    e.preventDefault();
})
