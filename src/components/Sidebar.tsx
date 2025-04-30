import { Link, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import {
  Home,
  Info,
  Map,
  Users,
  Box,
  Mail,
  ChevronRight,
  LogOut,
  User
} from "lucide-react";
import logo from "@/assets/logo.png";

const menuItems = [
  { label: "Inicio", icon: Home, href: "/dashboard/home" },
  { label: "Cómo Funciona", icon: Info, href: "/dashboard/how-it-works" },
  { label: "Mapa", icon: Map, href: "/dashboard/map" },
  { label: "Aliados", icon: Users, href: "/dashboard/partners" },
  { label: "Contenedor 3D", icon: Box, href: "/dashboard/model" },
  { label: "Contacto", icon: Mail, href: "/dashboard/contact" }
];

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/');
  };

  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-white shadow-lg">
      <div className="flex flex-col h-full">
        <div className="p-4 border-b">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="EcoPoint Logo" className="h-8 w-auto" />
            <span className="text-xl font-bold text-primary">
              <span className="text-secondary">Eco</span>Point
            </span>
          </div>
        </div>

        <div className="p-4 border-b">
          <div className="flex items-center space-x-3">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
              <User className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="font-medium">Usuario</p>
              <p className="text-sm text-gray-500">usuario@ejemplo.com</p>
            </div>
          </div>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => (
            <Link key={item.href} to={item.href}>
              <Button
                variant="ghost"
                className="w-full justify-start space-x-2 text-gray-700 hover:text-primary hover:bg-primary/10"
              >
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
                <ChevronRight className="h-4 w-4 ml-auto" />
              </Button>
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t">
          <Button
            variant="ghost"
            className="w-full justify-start space-x-2 text-gray-700 hover:text-red-500 hover:bg-red-50"
            onClick={handleLogout}
          >
            <LogOut className="h-5 w-5" />
            <span>Cerrar Sesión</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar; 