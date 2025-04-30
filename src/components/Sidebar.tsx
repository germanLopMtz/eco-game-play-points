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
  User,
  BarChart2,
  ChevronLeft
} from "lucide-react";
import logo from "@/assets/logo.png";
import { useState, useEffect } from "react";

interface SidebarProps {
  onCollapse?: (isCollapsed: boolean) => void;
}

const menuItems = [
  { label: "Mi Progreso", icon: BarChart2, href: "/dashboard" },
  { label: "Mapa", icon: Map, href: "/dashboard/map" },
  { label: "Aliados", icon: Users, href: "/dashboard/partners" },
  { label: "Contenedor 3D", icon: Box, href: "/dashboard/model" },
  { label: "Contacto", icon: Mail, href: "/dashboard/contact" }
];

const Sidebar = ({ onCollapse }: SidebarProps) => {
  const navigate = useNavigate();
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    onCollapse?.(isCollapsed);
  }, [isCollapsed, onCollapse]);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/');
  };

  return (
    <div className="h-full">
      <div className="flex flex-col h-full">
        <div className="p-4 border-b flex items-center justify-between">
          {!isCollapsed && (
            <div className="flex items-center space-x-2">
              <img src={logo} alt="EcoPoint Logo" className="h-8 w-auto" />
              <span className="text-xl font-bold text-primary">
                <span className="text-secondary">Eco</span>Point
              </span>
            </div>
          )}
          <Button
            variant="ghost"
            size="icon"
            className="ml-auto"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            <ChevronLeft className={`h-5 w-5 transition-transform duration-300 ${
              isCollapsed ? 'rotate-180' : ''
            }`} />
          </Button>
        </div>

        {!isCollapsed && (
          <div className="p-4 border-b">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                <User className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-medium">German Lopez</p>
                <p className="text-sm text-gray-500">germanlopez@gmail.com</p>
              </div>
            </div>
          </div>
        )}
        
        <nav className="flex-1 overflow-y-auto">
          {menuItems.map((item) => (
            <Link key={item.href} to={item.href}>
              <Button
                variant="ghost"
                className={`w-full justify-start space-x-2 text-gray-700 hover:text-primary hover:bg-primary/10 ${
                  isCollapsed ? 'justify-center' : ''
                }`}
              >
                <item.icon className="h-5 w-5" />
                {!isCollapsed && (
                  <>
                    <span>{item.label}</span>
                    <ChevronRight className="h-4 w-4 ml-auto" />
                  </>
                )}
              </Button>
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t">
          <Button
            variant="ghost"
            className={`w-full justify-start space-x-2 text-gray-700 hover:text-red-500 hover:bg-red-50 ${
              isCollapsed ? 'justify-center' : ''
            }`}
            onClick={handleLogout}
          >
            <LogOut className="h-5 w-5" />
            {!isCollapsed && <span>Cerrar Sesión</span>}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar; 