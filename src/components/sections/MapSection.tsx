
import { useState, useEffect } from "react";
import { Map, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Container {
  id: number;
  name: string;
  location: string;
  address: string;
  isActive: boolean;
  lat: number;
  lng: number;
}

const MapSection = () => {
  const [activeContainer, setActiveContainer] = useState<Container | null>(null);
  const [containers, setContainers] = useState<Container[]>([
    {
      id: 1,
      name: "Contenedor Parque Central",
      location: "Parque Central",
      address: "Av. Principal #123",
      isActive: true,
      lat: 19.432608,
      lng: -99.133209
    },
    {
      id: 2,
      name: "Contenedor Plaza Mayor",
      location: "Plaza Mayor",
      address: "Calle Comercio #456",
      isActive: true,
      lat: 19.435608,
      lng: -99.137209
    },
    {
      id: 3,
      name: "Contenedor Universidad",
      location: "Campus Universitario",
      address: "Av. Universidad #789",
      isActive: false,
      lat: 19.431608,
      lng: -99.131209
    },
    {
      id: 4,
      name: "Contenedor Mercado Verde",
      location: "Mercado Verde",
      address: "Calle Orgánica #234",
      isActive: true,
      lat: 19.438608,
      lng: -99.135209
    }
  ]);

  return (
    <section id="map" className="section-container bg-gradient-to-br from-green-50 to-white">
      <h2 className="section-title">
        Mapa de <span className="text-primary">Contenedores</span>
      </h2>
      
      <div className="grid md:grid-cols-3 gap-8">
        {/* Contenedores List */}
        <div className="md:col-span-1">
          <div className="bg-white rounded-xl shadow-lg p-4 h-96 md:h-[500px] overflow-y-auto">
            <h3 className="font-semibold text-lg mb-4">Contenedores Cercanos</h3>
            
            <div className="space-y-3">
              {containers.map((container) => (
                <div 
                  key={container.id} 
                  className={`p-3 rounded-lg border transition-colors cursor-pointer ${
                    activeContainer?.id === container.id 
                      ? 'border-primary bg-primary/5' 
                      : 'border-gray-200 hover:border-primary/50'
                  }`}
                  onClick={() => setActiveContainer(container)}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium">{container.name}</h4>
                      <p className="text-sm text-gray-600">{container.address}</p>
                    </div>
                    <div className={`px-2 py-1 rounded-full text-xs ${
                      container.isActive 
                        ? 'bg-green-100 text-green-600' 
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      {container.isActive ? 'Disponible' : 'En mantenimiento'}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Map */}
        <div className="md:col-span-2">
          <div className="bg-white rounded-xl shadow-lg p-4 h-96 md:h-[500px] overflow-hidden">
            <div className="relative h-full w-full rounded-lg bg-gray-100 overflow-hidden">
              {/* Esta es una representación visual del mapa. En una implementación real, 
                  se utilizaría Google Maps, Mapbox u otra biblioteca de mapas */}
              <div className="absolute inset-0 bg-[#E8F4EA]">
                <div className="absolute h-1 w-full top-1/4 left-0 bg-gray-300"></div>
                <div className="absolute h-1 w-full top-2/4 left-0 bg-gray-300"></div>
                <div className="absolute h-1 w-full top-3/4 left-0 bg-gray-300"></div>
                
                <div className="absolute w-1 h-full top-0 left-1/4 bg-gray-300"></div>
                <div className="absolute w-1 h-full top-0 left-2/4 bg-gray-300"></div>
                <div className="absolute w-1 h-full top-0 left-3/4 bg-gray-300"></div>
                
                {/* Marcadores de ejemplo */}
                {containers.map((container) => (
                  <div 
                    key={container.id}
                    className={`absolute transform -translate-x-1/2 -translate-y-1/2 ${
                      activeContainer?.id === container.id ? 'z-20 scale-125' : 'z-10'
                    }`}
                    style={{ 
                      top: `${(container.lat - 19.43) * 5000 + 50}%`, 
                      left: `${(container.lng + 99.13) * 2000 + 50}%`
                    }}
                  >
                    <div 
                      className={`p-1 rounded-full ${
                        container.isActive ? 'bg-primary' : 'bg-gray-400'
                      } ${
                        activeContainer?.id === container.id ? 'animate-bounce-slow' : ''
                      }`}
                    >
                      <MapPin 
                        size={activeContainer?.id === container.id ? 24 : 20} 
                        className="text-white"
                      />
                    </div>
                  </div>
                ))}
                
                {/* Círculos decorativos */}
                <div className="absolute top-[20%] left-[30%] w-16 h-16 rounded-full bg-green-200/30"></div>
                <div className="absolute top-[70%] left-[80%] w-24 h-24 rounded-full bg-purple-200/30"></div>
                <div className="absolute top-[40%] left-[60%] w-12 h-12 rounded-full bg-yellow-200/30"></div>
              </div>
              
              {/* Controles del mapa */}
              <div className="absolute bottom-4 right-4 flex flex-col space-y-2">
                <button className="w-8 h-8 rounded-lg bg-white shadow flex items-center justify-center">+</button>
                <button className="w-8 h-8 rounded-lg bg-white shadow flex items-center justify-center">−</button>
              </div>
              
              {/* Nota informativa */}
              <div className="absolute bottom-4 left-4 bg-white/80 rounded-lg p-2 text-xs text-gray-600 max-w-[200px]">
                Esta es una visualización de ejemplo. En la app real, se mostrará un mapa interactivo con ubicaciones precisas.
              </div>
            </div>
          </div>
          
          {activeContainer && (
            <div className="mt-4 p-4 bg-white rounded-xl shadow-lg">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-lg">{activeContainer.name}</h3>
                  <p className="text-gray-600">{activeContainer.address}</p>
                </div>
                <div className={`px-3 py-1 rounded-full text-sm ${
                  activeContainer.isActive 
                    ? 'bg-green-100 text-green-600' 
                    : 'bg-gray-100 text-gray-600'
                }`}>
                  {activeContainer.isActive ? 'Disponible Ahora' : 'En mantenimiento'}
                </div>
              </div>
              
              <div className="mt-4 flex justify-between">
                <Button 
                  className="eco-button bg-secondary hover:bg-secondary/90 text-white"
                  disabled={!activeContainer.isActive}
                >
                  <Map size={18} className="mr-2" />
                  Cómo llegar
                </Button>
                <Button 
                  variant="outline" 
                  className="eco-button border-primary text-primary hover:bg-primary/10"
                >
                  Ver detalles
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MapSection;
