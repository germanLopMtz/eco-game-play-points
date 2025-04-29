
const Partners = () => {
  const partners = [
    { name: "Café Verde", category: "Alimentación" },
    { name: "CineEco", category: "Entretenimiento" },
    { name: "Parque Aventura", category: "Recreación" },
    { name: "EcoFashion", category: "Moda" },
    { name: "LibroVerde", category: "Educación" },
    { name: "Pizza Orgánica", category: "Alimentación" },
    { name: "EcoTech", category: "Tecnología" },
    { name: "GreenHotel", category: "Hospedaje" }
  ];

  const categories = ["Todos", "Alimentación", "Entretenimiento", "Recreación", "Moda", "Educación", "Tecnología", "Hospedaje"];

  return (
    <section id="partners" className="section-container bg-gradient-to-br from-purple-50 to-white">
      <h2 className="section-title">
        Empresas <span className="text-secondary">Aliadas</span>
      </h2>
      
      <div className="mb-10">
        <div className="flex justify-center flex-wrap gap-2 mb-8">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                index === 0 
                  ? "bg-secondary text-white" 
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {partners.map((partner, index) => (
            <div key={index} className="eco-card flex flex-col items-center p-6 text-center hover:scale-105 transition-transform duration-300">
              <div className="w-20 h-20 mb-4 rounded-full bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center">
                <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  {partner.name.split(' ').map(word => word[0]).join('')}
                </div>
              </div>
              <h3 className="text-lg font-semibold">{partner.name}</h3>
              <p className="text-sm text-gray-500">{partner.category}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="max-w-3xl mx-auto text-center">
        <h3 className="text-2xl font-semibold mb-4">¿Eres una empresa?</h3>
        <p className="text-gray-700 mb-6">
          Únete a nuestra red de empresas aliadas y forma parte de esta iniciativa que promueve 
          el cuidado del medio ambiente mientras ofreces beneficios a tus clientes.
        </p>
        <button className="eco-button bg-primary text-white hover:bg-primary/90">
          Conviértete en Aliado
        </button>
      </div>
    </section>
  );
};

export default Partners;
