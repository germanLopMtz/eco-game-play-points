import Sidebar from "@/components/Sidebar";
import MyProgress from "@/components/sections/Progress";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { Menu } from "lucide-react";
import logo from "@/assets/logo.png";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-white shadow-md z-40 p-4 flex justify-between items-center">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="text-gray-700"
        >
          <Menu size={24} />
        </button>
        <div className="flex items-center space-x-2">
          <img src={logo} alt="EcoPoint Logo" className="h-8 w-auto" />
          <span className="text-xl font-bold text-primary">
            <span className="text-secondary">Eco</span>Point
          </span>
        </div>
      </div>

      {/* Sidebar */}
      <div className={`fixed left-0 top-0 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } md:translate-x-0`}>
        <Sidebar onCollapse={setIsCollapsed} />
      </div>

      {/* Main Content */}
      <main className={`flex-1 transition-all duration-300 ${
        isSidebarOpen ? 'ml-64' : 'ml-0'
      } md:ml-${isCollapsed ? '16' : '64'} p-4 md:p-8 mt-16 md:mt-0`}>
        <Outlet />
      </main>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default Dashboard; 