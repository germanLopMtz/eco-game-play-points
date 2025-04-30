import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Inicio", href: "#home" },
  { label: "Cómo Funciona", href: "#how-it-works" },
  { label: "Mapa", href: "#map" },
  { label: "Aliados", href: "#partners" },
  { label: "Contenedor 3D", href: "#model" },
  { label: "Contacto", href: "#contact" }
];

const Navbar = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ['home', 'how-it-works', 'map', 'partners', 'model', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop && 
            scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/');
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/95 shadow-md py-2" : "bg-transparent py-4"
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-xl md:text-2xl font-bold text-primary">
            <span className="text-secondary">Eco</span>Point
          </span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`font-medium transition-colors ${
                activeSection === item.href.replace('#', '') ? 'text-primary' : 'text-gray-700 hover:text-primary'
              }`}
            >
              {item.label}
            </a>
          ))}
          {isAuthenticated ? (
            <>
              <Link to="/dashboard">
                <Button variant="ghost" className="text-gray-700 hover:text-primary">
                  Mi Progreso
                </Button>
              </Link>
              <Button 
                variant="ghost" 
                onClick={handleLogout}
                className="text-gray-700 hover:text-primary"
              >
                Cerrar Sesión
              </Button>
            </>
          ) : (
            <Link to="/login">
              <Button className="bg-primary hover:bg-primary/90">
                Iniciar Sesión
              </Button>
            </Link>
          )}
        </div>
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu size={24} />
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block py-2 font-medium text-gray-700 hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            {isAuthenticated ? (
              <>
                <Link to="/dashboard" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="ghost" className="text-gray-700 hover:text-primary w-full">
                    Mi Progreso
                  </Button>
                </Link>
                <Button 
                  variant="ghost" 
                  onClick={() => {
                    handleLogout();
                    setMobileMenuOpen(false);
                  }}
                  className="text-gray-700 hover:text-primary w-full"
                >
                  Cerrar Sesión
                </Button>
              </>
            ) : (
              <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                <Button className="bg-primary hover:bg-primary/90 w-full">
                  Iniciar Sesión
                </Button>
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
