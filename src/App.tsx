import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import MyProgress from "./components/sections/Progress";
import Hero from "./components/sections/Hero";
import HowItWorks from "./components/sections/HowItWorks";
import ModelSection from "./components/sections/ModelSection";
import MapSection from "./components/sections/MapSection";
import Partners from "./components/sections/Partners";
import Contact from "./components/sections/Contact";

const queryClient = new QueryClient();

const isAuthenticated = () => {
  return localStorage.getItem('isAuthenticated') === 'true';
};

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  return isAuthenticated() ? <>{children}</> : <Navigate to="/login" />;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          >
            <Route index element={<MyProgress />} />
            <Route path="home" element={<Hero />} />
            <Route path="how-it-works" element={<HowItWorks />} />
            <Route path="map" element={<MapSection />} />
            <Route path="partners" element={<Partners />} />
            <Route path="model" element={<ModelSection />} />
            <Route path="contact" element={<Contact />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
