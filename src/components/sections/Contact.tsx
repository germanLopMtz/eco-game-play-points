
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Aquí iría la lógica para enviar el formulario a un endpoint
    console.log("Form submitted:", form);
    
    // Mostrar toast de confirmación
    toast({
      title: "¡Formulario enviado!",
      description: "Nos pondremos en contacto contigo pronto.",
    });
    
    // Limpiar formulario
    setForm({
      name: "",
      email: "",
      company: "",
      message: ""
    });
  };

  return (
    <section id="contact" className="section-container bg-gradient-to-br from-green-50 to-white">
      <h2 className="section-title">
        <span className="text-primary">Contacto</span> / Únete
      </h2>
      
      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <div>
          <h3 className="text-2xl font-semibold mb-4">¿Interesado en EcoGame?</h3>
          <p className="text-gray-700 mb-6">
            Si eres un negocio y deseas ser parte de nuestra red de aliados, o si tienes 
            alguna pregunta o sugerencia, completa el formulario y nos pondremos en contacto contigo.
          </p>
          
          <div className="space-y-6 mb-8">
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <div>
                <h4 className="font-medium">Email</h4>
                <p className="text-gray-600">contacto@ecogame.com</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
              </div>
              <div>
                <h4 className="font-medium">Teléfono</h4>
                <p className="text-gray-600">+123 456 7890</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <div>
                <h4 className="font-medium">Dirección</h4>
                <p className="text-gray-600">Av. Ecológica 123, Ciudad Verde</p>
              </div>
            </div>
          </div>
          
          <div className="flex space-x-4">
            {["facebook", "twitter", "instagram", "linkedin"].map((social) => (
              <a 
                key={social}
                href="#"
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <img
                  src={`https://cdn.simpleicons.org/${social}/4CAF50`}
                  alt={`${social} icon`}
                  className="w-5 h-5"
                />
              </a>
            ))}
          </div>
        </div>
        
        <div>
          <form onSubmit={handleSubmit} className="eco-card p-6 md:p-8">
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre
                </label>
                <Input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="eco-input"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  className="eco-input"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                  Empresa (opcional)
                </label>
                <Input
                  id="company"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  className="eco-input"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Mensaje
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className="eco-input min-h-[120px]"
                  required
                />
              </div>
              
              <div className="pt-2">
                <Button 
                  type="submit" 
                  className="eco-button w-full bg-primary hover:bg-primary/90 text-white"
                >
                  Enviar Mensaje
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
