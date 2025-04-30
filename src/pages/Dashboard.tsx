import Sidebar from "@/components/Sidebar";
import MyProgress from "@/components/sections/Progress";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        <Sidebar />
        <main className="flex-1 ml-64 p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Dashboard; 