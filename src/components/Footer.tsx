
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-secondary">Eco</span>
              <span className="text-primary">Point</span>
            </h3>
            <p className="mb-6 max-w-md text-gray-300">
              Transformando la forma en que interactuamos con nuestros residuos. 
              Cuida tu ciudad, juega y gana mientras contribuyes al medio ambiente.
            </p>
            <div className="flex space-x-4">
              {["facebook", "x", "instagram", "youtube"].map((social) => (
                <a 
                  key={social}
                  href="#"
                  className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
                >
                  <img
                    src={`https://cdn.simpleicons.org/${social}/ffffff`}
                    alt={`${social} icon`}
                    className="w-4 h-4"
                  />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-lg">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              {[
                { label: "Inicio", href: "#home" },
                { label: "Cómo Funciona", href: "#how-it-works" },
                { label: "Contenedor", href: "#progress" },
                { label: "Mapa", href: "#map" },
                { label: "Empresas Aliadas", href: "#partners" },
              ].map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-lg">Contacto</h4>
            <ul className="space-y-2 text-gray-400">
              <li>contacto@ecopoint.com</li>
              <li>+123 456 7890</li>
              <li>Av. Tecnologico, Hermosillo</li>
            </ul>
            
            <div className="mt-6">
              <h4 className="font-semibold mb-2">Descarga la App</h4>
              <div className="flex space-x-2">
                <a href="#" className="bg-gray-800 hover:bg-gray-700 transition-colors rounded px-3 py-2 text-xs flex items-center">
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.05 20.28c-.98.95-2.05.7-3.08.32-1.09-.41-2.09-.42-3.25 0-1.43.52-2.26.35-3.08-.32C3.79 16.47 5.66 8.42 10.06 8.42c1.03 0 1.97.39 2.66.39.88 0 2.24-.56 3.38-.56 3.78 0 5.38 7.26 1.09 12.03zM10.69 7.61c.92-1.21 1.61-2.96 1.36-4.74-1.39.08-2.89 1-3.67 2.22-.86 1.33-1.47 3.01-1.27 4.74 1.43.1 2.85-.87 3.58-2.22z"></path>
                  </svg>
                  App Store
                </a>
                <a href="#" className="bg-gray-800 hover:bg-gray-700 transition-colors rounded px-3 py-2 text-xs flex items-center">
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.5 12c0 .76-.19 1.47-.5 2.09l3.22 3.22c.82-1.46 1.29-3.15 1.29-4.96 0-1.8-.46-3.5-1.28-4.96l-3.22 3.22c.3.62.49 1.33.49 2.09z"></path>
                    <path d="M12 17.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"></path>
                    <path d="M8.5 12c0-.76.19-1.47.5-2.09L5.78 6.69C4.96 8.15 4.5 9.85 4.5 11.65c0 1.8.46 3.5 1.28 4.96l3.22-3.22c-.31-.62-.5-1.33-.5-2.09z"></path>
                    <path d="M12 6.5c-2.33 0-4.31 1.46-5.11 3.5h10.22c-.8-2.04-2.78-3.5-5.11-3.5z"></path>
                    <circle cx="12" cy="12" r="2.5"></circle>
                  </svg>
                  Google Play
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>© 2025 EcoPoint. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
