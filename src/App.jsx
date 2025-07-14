import React, { useState } from "react";

export default function App() {
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const products = [
    // Frutas
    { id: 1, name: "Piña", price: 2200, image: " https://placehold.co/300x200/28A745/FFFFFF?text=Piña", category: "frutas" },
    { id: 2, name: "Manzana Fuji", price: 1200, image: " https://placehold.co/300x200/F9C74F/333333?text=Manzana+Fuji", category: "frutas" },
    { id: 3, name: "Manzana Verde", price: 1200, image: " https://placehold.co/300x200/6AB04C/FFFFFF?text=Verde", category: "frutas" },
    { id: 4, name: "Manzana Pink Lady", price: 1200, image: " https://placehold.co/300x200/FF6B6B/FFFFFF?text=Pink+Lady", category: "frutas" },
    { id: 5, name: "Peras", price: 1200, image: " https://placehold.co/300x200/E2E2B6/333333?text=Peras", category: "frutas" },
    { id: 6, name: "Naranjas (2k x $1000)", price: 1000, image: " https://placehold.co/300x200/FFA500/FFFFFF?text=Naranjas", category: "frutas" },
    { id: 7, name: "Mandarina", price: 1200, image: " https://placehold.co/300x200/FFCC33/333333?text=Mandarina", category: "frutas" },
    { id: 8, name: "Membrillo", price: 1200, image: " https://placehold.co/300x200/D2691E/FFFFFF?text=Membrillo", category: "frutas" },
    { id: 9, name: "Plátano", price: 1300, image: " https://placehold.co/300x200/F4D03F/333333?text=Plátano", category: "frutas" },
    { id: 10, name: "Pepino", price: 1300, image: " https://placehold.co/300x200/7CFC00/333333?text=Pepino", category: "frutas" },
    { id: 11, name: "Kiwi", price: 1200, image: " https://placehold.co/300x200/7CB9A8/333333?text=Kiwi", category: "frutas" },

    // Verduras
    { id: 12, name: "Papas (25k app)", price: 9000, image: " https://placehold.co/300x200/D2B48C/333333?text=Papas", category: "verduras" },
    { id: 13, name: "Papas (kg)", price: 400, image: " https://placehold.co/300x200/D2B48C/333333?text=Papas", category: "verduras" },
    { id: 14, name: "Pimentón Verde (2 x $1000)", price: 1000, image: " https://placehold.co/300x200/50C878/FFFFFF?text=Pimentón+Verde", category: "verduras" },
    { id: 15, name: "Pimentón Rojo (4 x $1000)", price: 1000, image: " https://placehold.co/300x200/FF0000/FFFFFF?text=Pimentón+Rojo", category: "verduras" },
    { id: 16, name: "Cebolla Malla (16k app)", price: 6000, image: " https://placehold.co/300x200/AC926D/333333?text=Cebolla", category: "verduras" },
    { id: 17, name: "Cebolla (kg)", price: 700, image: " https://placehold.co/300x200/AC926D/333333?text=Cebolla", category: "verduras" },
    { id: 18, name: "Cebolla Morada (kg)", price: 1000, image: " https://placehold.co/300x200/8E4585/FFFFFF?text=Cebolla+Morada", category: "verduras" },
    { id: 19, name: "Ajos (5 x $1000)", price: 1000, image: " https://placehold.co/300x200/FFFDD0/333333?text=Ajos", category: "verduras" },
    { id: 20, name: "Paltas (Hass kg)", price: 4500, image: " https://placehold.co/300x200/5E7D4A/FFFFFF?text=Paltas", category: "verduras" },
    { id: 21, name: "Betarraga", price: 800, image: " https://placehold.co/300x200/BE0032/FFFFFF?text=Betarraga", category: "verduras" },
    { id: 22, name: "Cilantro", price: 500, image: " https://placehold.co/300x200/00A94F/FFFFFF?text=Cilantro", category: "verduras" },
    { id: 23, name: "Perejil", price: 500, image: " https://placehold.co/300x200/8FBC8F/333333?text=Perejil", category: "verduras" },
    { id: 24, name: "Acelgas (4 x $1000)", price: 1000, image: " https://placehold.co/300x200/76923C/FFFFFF?text=Acelgas", category: "verduras" },
    { id: 25, name: "Zanahoria", price: 800, image: " https://placehold.co/300x200/ED9121/FFFFFF?text=Zanahoria", category: "verduras" },
    { id: 26, name: "Zanahoria Saco", price: 12000, image: " https://placehold.co/300x200/ED9121/FFFFFF?text=Zanahoria+Saco", category: "verduras" },
    { id: 27, name: "Zapallo Italiano (2 x 1000)", price: 1000, image: " https://placehold.co/300x200/F5DEB3/333333?text=Zapallo+Italiano", category: "verduras" },
    { id: 28, name: "Zapallo Camote (kg)", price: 1200, image: " https://placehold.co/300x200/F5DEB3/333333?text=Camote", category: "verduras" },
    { id: 29, name: "Pepino Ensalada (2 x $1500 o $800 c/u)", price: 1500, image: " https://placehold.co/300x200/7CFC00/333333?text=Pepino", category: "verduras" },
    { id: 30, name: "Limón (Eureka de huerto no cámara)", price: 500, image: " https://placehold.co/300x200/FFF44F/333333?text=Limón", category: "verduras" },
    { id: 31, name: "Lechuga Escarola", price: 500, image: " https://placehold.co/300x200/77DD77/333333?text=Lechuga", category: "verduras" },
    { id: 32, name: "Tomate Normal (kg)", price: 1000, image: " https://placehold.co/300x200/FF6347/FFFFFF?text=Tomate", category: "verduras" },
    { id: 33, name: "Aji (5 x $1000)", price: 1000, image: " https://placehold.co/300x200/B22222/FFFFFF?text=Aji", category: "verduras" },
    { id: 34, name: "Repollo", price: 800, image: " https://placehold.co/300x200/66BB6A/333333?text=Repollo", category: "verduras" },
    { id: 35, name: "Espinaca (2 x $1000)", price: 1000, image: " https://placehold.co/300x200/3EB489/FFFFFF?text=Espinaca", category: "verduras" },

    // Otros
    { id: 36, name: "Dulces de Menta con Propolio (2 x $1000)", price: 1000, image: " https://placehold.co/300x200/98FB98/333333?text=Dulces", category: "otros" },
    { id: 37, name: "Aceite Oliva ($5000 el 1/2lt)", price: 5000, image: " https://placehold.co/300x200/808000/FFFFFF?text=Aceite+Oliva", category: "otros" },
    { id: 38, name: "Miel", price: 5000, image: " https://placehold.co/300x200/FFD700/333333?text=Miel", category: "otros" },
    { id: 39, name: "Tortitas de Higo Nuez (c/u o bolsa de 5 x $4000)", price: 1000, image: " https://placehold.co/300x200/8B4513/FFFFFF?text=Tortitas", category: "otros" },
    { id: 40, name: "Huevos Extra Caja", price: 40000, image: " https://placehold.co/300x200/FFFFF0/333333?text=Huevos+Caja", category: "otros" },
    { id: 41, name: "Huevos ($7000 bandeja extra)", price: 7000, image: " https://placehold.co/300x200/FFFFF0/333333?text=Huevos", category: "otros" },
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
            <img src=" https://i.imgur.com/9QvqfLH.png " alt="Logo" className="w-10 h-10 rounded-full" />
            <h1 className="text-xl md:text-2xl font-bold">La Picá de la Verdura</h1>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <input
              type="text"
              placeholder="Buscar productos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="py-1 px-3 rounded-md text-black focus:outline-none"
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
            className="inline-block bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-full shadow-md transition duration-300"
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
              className="w-full p-2 border rounded focus:ring-2 focus:ring-green-400"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl border border-green-100 transition-transform transform hover:-translate-y-1"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-green-900 mb-2">{product.name}</h3>
                  <p className="text-green-700 font-bold">${product.price}</p>
                  <button
                    onClick={() => addToCart(product)}
                    className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded transition duration-300"
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
                  <span>${item.price}</span>
                  <button onClick={() => removeFromCart(index)} className="text-red-500">
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
