import React, { useState } from "react";

export default function App() {
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const products = [
    { id: 1, name: "Piña", price: 2200, image: "https://placehold.co/300x200?text=Piña" },
    { id: 2, name: "Manzana Fuji", price: 1200, image: " https://placehold.co/300x200?text=Manzana+Fuji" },
    { id: 3, name: "Zanahoria", price: 800, image: " https://placehold.co/300x200?text=Zanahoria" },
    { id: 4, name: "Lechuga Escarola", price: 500, image: " https://placehold.co/300x200?text=Lechuga+Escarola" },
    { id: 5, name: "Aceite Oliva", price: 5000, image: " https://placehold.co/300x200?text=Aceite+Oliva" },
    { id: 6, name: "Miel", price: 5000, image: " https://placehold.co/300x200?text=Miel" },
  ];

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-green-50 font-sans text-gray-800">
      {/* Header */}
      <header className="bg-green-700 text-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img
              src=" https://i.imgur.com/9QvqfLH.png "
              alt="Logo"
              className="w-10 h-10 rounded-full"
            />
            <h1 className="text-xl md:text-2xl font-bold">La Picá de la Verdura</h1>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <input
              type="text"
              placeholder="Buscar productos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="py-1 px-3 rounded-md text-sm text-black focus:outline-none"
            />
            <span className="relative cursor-pointer">
              🛒{" "}
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cart.length}
              </span>
            </span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-green-100 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-4 text-green-800">
            Frutas y Verduras Frescas
          </h2>
          <p className="text-base md:text-lg max-w-xl mx-auto text-gray-700 mb-6">
            Compra lo más fresco directo del campo a tu mesa. Entregas rápidas y precios justos.
          </p>
          <a
            href="#products"
            className="inline-block bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-full shadow-md transition duration-300"
          >
            Ver Productos
          </a>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10 text-green-800">
            Nuestros Productos
          </h2>
          <div className="mb-6">
            <input
              type="text"
              placeholder="Buscar productos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1 border border-green-100"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-green-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-green-700 font-bold">${product.price}</p>
                  <button
                    onClick={() => addToCart(product)}
                    className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md transition duration-300"
                  >
                    Añadir al carrito
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cart Section */}
      <section className="py-12 bg-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-green-800">
            Tu Carrito
          </h2>
          {cart.length === 0 ? (
            <p className="text-center text-gray-600">Tu carrito está vacío.</p>
          ) : (
            <ul className="space-y-4 max-w-2xl mx-auto">
              {cart.map((item, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center bg-white p-4 rounded shadow-sm"
                >
                  <span>{item.name}</span>
                  <span className="font-semibold text-green-700">
                    ${item.price}
                  </span>
                  <button
                    onClick={() => removeFromCart(index)}
                    className="text-red-500"
                  >
                    ✕
                  </button>
                </li>
              ))}
              <li className="flex justify-between items-center mt-4 font-bold text-lg">
                <span>Total:</span>
                <span className="text-green-800">
                  $
                  {cart
                    .reduce((total, item) => total + item.price, 0)
                    .toFixed(2)}
                </span>
              </li>
              <button className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md transition duration-300">
                Finalizar Compra
              </button>
            </ul>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-700 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 La Picá de la Verdura. Todos los derechos reservados.</p>
          <p className="mt-2 text-sm opacity-80">
            Entregamos frescura directamente desde el campo a tu hogar.
          </p>
        </div>
      </footer>
    </div>
  );
}
