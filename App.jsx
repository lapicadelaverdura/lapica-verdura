import React, { useEffect, useState } from 'react';

function App() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  // Datos locales de productos
  const localProducts = [
    // FRUTAS
    { id: 1, name: "Piña", price: "$2.200 c/u", category: "Frutas", image: "https://placehold.co/300x200?text=Piña" },
    { id: 2, name: "Manzana Fuji", price: "$1.200/kg", category: "Frutas", image: " https://placehold.co/300x200?text=Manzana+Fuji" },
    { id: 3, name: "Manzana Verde", price: "$1.200/kg", category: "Frutas", image: " https://placehold.co/300x200?text=Manzana+Verde" },
    { id: 4, name: "Manzana Pink Lady", price: "$1.200/kg", category: "Frutas", image: " https://placehold.co/300x200?text=Pink+Lady" },
    { id: 5, name: "Peras", price: "$1.200/kg", category: "Frutas", image: " https://placehold.co/300x200?text=Peras" },
    { id: 6, name: "Naranjas", price: "$1.000 x 2kg", category: "Frutas", image: " https://placehold.co/300x200?text=Naranjas" },
    { id: 7, name: "Mandarina", price: "$1.200/kg", category: "Frutas", image: " https://placehold.co/300x200?text=Mandarina" },
    { id: 8, name: "Membrillo", price: "$1.200/kg", category: "Frutas", image: " https://placehold.co/300x200?text=Membrillo" },
    { id: 9, name: "Plátano", price: "$1.300/kg", category: "Frutas", image: " https://placehold.co/300x200?text=Plátano" },
    { id: 10, name: "Pepino", price: "$1.300/kg", category: "Frutas", image: " https://placehold.co/300x200?text=Pepino" },
    { id: 11, name: "Kiwi", price: "$1.200/kg", category: "Frutas", image: " https://placehold.co/300x200?text=Kiwi" },

    // VERDURAS
    { id: 12, name: "Papas", price: "$9.000 (25kg aprox)", category: "Verduras", image: " https://placehold.co/300x200?text=Papas" },
    { id: 13, name: "Papas", price: "$400/kg", category: "Verduras", image: " https://placehold.co/300x200?text=Papas" },
    { id: 14, name: "Pimentón Verde", price: "2 x $1.000", category: "Verduras", image: " https://placehold.co/300x200?text=Pimentón+Verde" },
    { id: 15, name: "Pimentón Rojo", price: "4 x $1.000", category: "Verduras", image: " https://placehold.co/300x200?text=Pimentón+Rojo" },
    { id: 16, name: "Cebolla malla", price: "$6.000 (16kg aprox)", category: "Verduras", image: " https://placehold.co/300x200?text=Cebolla+malla" },
    { id: 17, name: "Cebolla", price: "$700/kg", category: "Verduras", image: " https://placehold.co/300x200?text=Cebolla" },
    { id: 18, name: "Cebolla Morada", price: "$1.000/kg", category: "Verduras", image: " https://placehold.co/300x200?text=Cebolla+Morada" },
    { id: 19, name: "Ajos", price: "5 x $1.000", category: "Verduras", image: " https://placehold.co/300x200?text=Ajos" },
    { id: 20, name: "Paltas Hass", price: "$4.500/kg", category: "Verduras", image: " https://placehold.co/300x200?text=Palta+Hass" },
    { id: 21, name: "Palta Peruana", price: "$3.000/kg", category: "Verduras", image: " https://placehold.co/300x200?text=Palta+Peruana" },
    { id: 22, name: "Betarraga", price: "$800/cada una", category: "Verduras", image: " https://placehold.co/300x200?text=Betarraga" },
    { id: 23, name: "Cilantro", price: "$500/unidad", category: "Verduras", image: " https://placehold.co/300x200?text=Cilantro" },
    { id: 24, name: "Perejil", price: "$500/unidad", category: "Verduras", image: " https://placehold.co/300x200?text=Perejil" },
    { id: 25, name: "Acelgas", price: "4 x $1.000", category: "Verduras", image: " https://placehold.co/300x200?text=Acelgas" },
    { id: 26, name: "Zanahoria", price: "$800/kg", category: "Verduras", image: " https://placehold.co/300x200?text=Zanahoria" },
    { id: 27, name: "Zanahoria saco", price: "$12.000/saco", category: "Verduras", image: " https://placehold.co/300x200?text=Zanahoria+saco" },
    { id: 28, name: "Zapallo Italiano", price: "2 x $1.000", category: "Verduras", image: " https://placehold.co/300x200?text=Zapallo+Italiano" },
    { id: 29, name: "Zapallo Camote", price: "$1.200/kg", category: "Verduras", image: " https://placehold.co/300x200?text=Zapallo+Camote" },
    { id: 30, name: "Pepino Ensalada", price: "2 x $1.500 o $800/cada uno", category: "Verduras", image: " https://placehold.co/300x200?text=Pepino+Ensalada" },
    { id: 31, name: "Limón", price: "$500/kg (sin cámara)", category: "Verduras", image: " https://placehold.co/300x200?text=Limón" },
    { id: 32, name: "Lechuga Escarola", price: "$500/cada una", category: "Verduras", image: " https://placehold.co/300x200?text=Lechuga+Escarola" },
    { id: 33, name: "Lechuga Milanesa", price: "$4.500/caja (15 unidades)", category: "Verduras", image: " https://placehold.co/300x200?text=Lechuga+Milanesa" },
    { id: 34, name: "Tomate Normal", price: "$1.000/kg", category: "Verduras", image: " https://placehold.co/300x200?text=Tomate" },
    { id: 35, name: "Caja de Tomate", price: "$12.000/caja (18kg aprox)", category: "Verduras", image: " https://placehold.co/300x200?text=Caja+de+Tomate" },
    { id: 36, name: "Aji", price: "5 x $1.000", category: "Verduras", image: " https://placehold.co/300x200?text=Aji" },
    { id: 37, name: "Repollo", price: "$800/cada uno", category: "Verduras", image: " https://placehold.co/300x200?text=Repollo" },
    { id: 38, name: "Espinaca", price: "2 x $1.000", category: "Verduras", image: " https://placehold.co/300x200?text=Espinaca" },

    // OTROS
    { id: 39, name: "Dulces de Menta con Propolio", price: "2 x $1.000", category: "Otros", image: " https://placehold.co/300x200?text=Dulce+de+Menta" },
    { id: 40, name: "Aceite de Oliva", price: "$5.000/medio litro", category: "Otros", image: " https://placehold.co/300x200?text=Aceite+de+Oliva" },
    { id: 41, name: "Miel", price: "$5.000/frasco", category: "Otros", image: " https://placehold.co/300x200?text=Miel" },
    { id: 42, name: "Tortitas de Higo y Nuez", price: "$1.000/cada una o $4.000/bolsa (5 u.)", category: "Otros", image: " https://placehold.co/300x200?text=Tortitas+Higo" },
    { id: 43, name: "Huevos Extra", price: "$7.000/bandeja", category: "Otros", image: " https://placehold.co/300x200?text=Huevos" },
    { id: 44, name: "Huevos Extra Caja", price: "$40.000/caja", category: "Otros", image: " https://placehold.co/300x200?text=Huevos+Caja" },
  ];

  // Cargar productos al iniciar
  useEffect(() => {
    setProducts(localProducts);
  }, []);

  // Añadir producto al carrito
  const addToCart = (product) => {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      setCart(
        cart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Eliminar producto del carrito
  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  // Calcular total
  const getTotal = () => {
    return cart.reduce((total, item) => total + parseFloat(item.price.replace(/[^0-9.-]+/g,"")) * item.quantity, 0).toFixed(0);
  };

  // Agrupar por categorías
  const categories = [...new Set(products.map(p => p.category))];

  return (
    <div className="font-sans text-gray-800">
      {/* Header */}
      <header className="bg-green-700 text-white p-4 shadow-md fixed w-full z-50">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img
              src=" https://i.imgur.com/1si3ya1si3ya1si3.jpg "
              alt="Logo La Picá de la Verdura"
              className="h-10 rounded-lg object-cover"
            />
            <h1 className="text-xl md:text-2xl font-bold">La Picá de la Verdura</h1>
          </div>

          <nav className="space-x-6 hidden md:flex">
            <a href="#inicio" className="hover:underline">Inicio</a>
            <a href="#categorias" className="hover:underline">Categorías</a>
            <a href="#productos" className="hover:underline">Productos</a>
            <a href="#nosotros" className="hover:underline">Nosotros</a>
            <a href="#contacto" className="hover:underline">Contacto</a>
          </nav>
        </div>
      </header>

      {/* Banner Promocional */}
      <section className="mt-20 bg-gradient-to-r from-green-400 to-green-600 py-8 text-white text-center rounded-b-lg shadow-md">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-extrabold">¡Oferta Especial!</h2>
          <p className="text-lg mt-2">Compra hoy y recibe un 10% de descuento en frutas orgánicas.</p>
          <a
            href="#productos"
            className="inline-block mt-4 bg-white text-green-700 px-5 py-2 rounded-full font-semibold hover:bg-green-50 transition"
          >
            Ver Ofertas
          </a>
        </div>
      </section>

      {/* Hero Section */}
      <section id="inicio" className="bg-green-50 pt-12 pb-16 md:py-20 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-green-800 mb-4">Frutas y Verduras Frescas</h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-8">
            Entregamos a domicilio las mejores frutas y verduras del mercado local. ¡Sabor natural y calidad garantizada!
          </p>
          <a
            href="#productos"
            className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full transition transform hover:scale-105"
          >
            Ver Productos
          </a>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categorias" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-10">Nuestras Categorías</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map(category => (
              <div key={category} className="bg-green-100 p-6 rounded-lg shadow text-center hover:shadow-xl transition">
                <img
                  src={`https://placehold.co/150x100?text=${category}`}
                  alt={category}
                  className="mx-auto mb-4 rounded"
                />
                <h3 className="text-xl font-semibold text-green-800">{category}</h3>
                <a
                  href={`#${category.toLowerCase()}`}
                  className="block mt-2 text-green-600 hover:underline"
                >
                  Ver productos
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cart Preview */}
      <div className="fixed top-24 right-4 bg-white shadow-lg rounded-lg p-4 w-72 max-h-96 overflow-y-auto z-50 border border-green-200">
        <h3 className="font-semibold text-green-800 mb-2">Tu Carrito</h3>
        {cart.length === 0 ? (
          <p className="text-sm text-gray-500">Tu carrito está vacío.</p>
        ) : (
          <>
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between items-center mb-2">
                <span className="text-sm">{item.name} x{item.quantity}</span>
                <div>
                  <button onClick={() => removeFromCart(item.id)} className="text-red-500 text-xs mr-1">–</button>
                  <span>${(parseFloat(item.price.replace(/[^0-9.-]+/g,"")) * item.quantity)}</span>
                </div>
              </div>
            ))}
            <hr className="my-2" />
            <div className="font-semibold text-green-700">Total: ${getTotal()}</div>
          </>
        )}
      </div>

      {/* Products Section */}
      <section id="productos" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-10">Nuestros Productos</h2>
          {categories.map(category => (
            <div key={category} className="mb-12">
              <h3 id={category.toLowerCase()} className="text-2xl font-bold text-green-800 mb-6">{category}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {products
                  .filter(product => product.category === category)
                  .map((product) => (
                    <div
                      key={product.id}
                      className="bg-white border rounded-lg shadow-md overflow-hidden transform transition hover:shadow-xl hover:-translate-y-1"
                    >
                      <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                      <div className="p-4">
                        <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
                        <p className="text-green-600 font-medium mt-1">{product.price}</p>
                        <button
                          onClick={() => addToCart(product)}
                          className="mt-2 w-full bg-green-600 hover:bg-green-700 text-white py-1 rounded text-sm"
                        >
                          Añadir al carrito
                        </button>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WhatsApp Button */}
      <a
        href=" https://wa.me/56965737672?text=Hola%20estoy%20interesado%20en%20comprar"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition z-50"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.627 0-12 5.373-12 12 0 2.067.525 4.015 1.437 5.707l-1.437 5.293 5.293-1.437a11.952 11.952 0 005.707 1.437c6.627 0 12-5.373 12-12s-5.373-12-12-12zm-1.999 16.943c-.275 0-.548-.036-.816-.109l-2.44-1.22a1.014 1.014 0 01-.37-.632c-.101-.35-.063-.724.103-1.047l1.575-3.15c.166-.323.457-.556.804-.644.083-.021.168-.031.252-.031.22 0 .44.075.61.223l2.85 2.415c.203.172.325.418.339.676.014.258-.08.506-.263.689l-2.146 2.146c-.19.19-.442.294-.706.294z"/>
        </svg>
      </a>

      {/* Footer */}
      <footer className="bg-green-700 text-white p-8 text-center">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <img
              src=" https://i.imgur.com/1si3ya1si3ya1si3.jpg "
              alt="Logo La Picá de la Verdura"
              className="h-10 inline-block rounded"
            />
            <h3 className="text-lg font-bold mt-2">La Picá de la Verdura</h3>
          </div>
          <div>
            <p>&copy; 2025 Todos los derechos reservados.</p>
            <p className="text-sm mt-1">ventas@lapicadelaverdura.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
