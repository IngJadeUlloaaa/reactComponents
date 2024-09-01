import React, { useState } from 'react';

function FoodCard() {
    const [priceProduct, setPriceProduct] = useState(''); // Precio como string inicialmente
    const [quantityProduct, setQuantityProduct] = useState(''); // Cantidad como string inicialmente
    const [product, setProduct] = useState([]);
    const [productName, setProductName] = useState('');

    const addProduct = () => {
        if (productName.trim() === '' || priceProduct === '' || quantityProduct === '') return;
        
        const newProduct = {
            nombre: productName,
            precio: parseFloat(priceProduct), // Convertir a número
            cantidad: parseInt(quantityProduct), // Convertir a número
        };

        setProduct([...product, newProduct]); // Aquí se actualiza el array de productos
        setProductName('');
        setPriceProduct(''); // Limpiar el campo de precio
        setQuantityProduct(''); // Limpiar el campo de cantidad
    };

    return (
        <div>
            <h1>Carrito de Compras</h1>
            <input 
                type="text" 
                placeholder="Nombre del producto" 
                value={productName} 
                onChange={(e) => setProductName(e.target.value)} 
            />
            <input 
                type="number" 
                placeholder="Precio" 
                value={priceProduct} 
                onChange={(e) => setPriceProduct(e.target.value)} 
            />
            <input 
                type="number" 
                placeholder="Cantidad" 
                value={quantityProduct} 
                onChange={(e) => setQuantityProduct(e.target.value)} 
            />
            <button onClick={addProduct}>Añadir Producto</button>

            <ul>
                {product.map((prod, index) => (
                    <li key={index}>
                        {prod.nombre} - ${prod.precio} x {prod.cantidad}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FoodCard;
