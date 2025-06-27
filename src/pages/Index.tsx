import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowDown, ArrowUp, Users, Target, Sprout, Globe, Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensaje enviado",
      description: "Gracias por tu interés en REDIAG. Te contactaremos pronto.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/51107672-7d70-480f-8f4c-8c08ad0e1d2e.png" 
              alt="Audita2 Logo" 
              className="h-12 w-auto"
            />
            <div>
              <h1 className="text-xl font-bold text-gray-900">REDIAG – Audita2</h1>
              <p className="text-sm text-gray-600">Red Digital de Asesorías y Gestorías para el Desarrollo Rural</p>
            </div>
          </div>
          <nav className="hidden md:flex space-x-6">
            <button onClick={() => scrollToSection('inicio')} className="text-gray-700 hover:text-green-600 font-medium">Inicio</button>
            <button onClick={() => scrollToSection('sobre-rediag')} className="text-gray-700 hover:text-green-600 font-medium">Sobre REDIAG</button>
            <button onClick={() => scrollToSection('objetivos')} className="text-gray-700 hover:text-green-600 font-medium">Objetivos</button>
            <button onClick={() => scrollToSection('contacto')} className="text-gray-700 hover:text-green-600 font-medium">Contacto</button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-green-900/90 to-blue-900/90">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-30"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Revitalizando el Mundo Rural
          </h1>
          <h2 className="text-2xl md:text-3xl mb-4 animate-fade-in">
            a través de la Conexión Digital
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in">
            Impulsando el emprendimiento y la economía local en municipios con baja densidad poblacional
          </p>
          <div className="mb-8">
            <Button 
              size="lg" 
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={() => scrollToSection('sobre-rediag')}
            >
              Descubre REDIAG
            </Button>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
            <p className="text-lg font-medium">
              "Potenciando recursos endógenos a través de gestorías y asesorías digitales"
            </p>
          </div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="w-8 h-8 text-white opacity-70" />
          </div>
        </div>
      </section>

      {/* ¿Qué es REDIAG? */}
      <section id="sobre-rediag" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">¿Qué es REDIAG?</h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              REDIAG es una iniciativa innovadora enfocada en municipios de <strong>2.500–5.000 habitantes</strong> y 
              densidad poblacional menor a <strong>25 hab/km²</strong> en España, diseñada para revitalizar 
              el tejido económico rural a través de la digitalización y el desarrollo sostenible.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <Card className="border-green-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Target className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Estructura Productiva</h3>
                  <p className="text-gray-600">Fortalecimiento del desarrollo económico local</p>
                </CardContent>
              </Card>
              <Card className="border-blue-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Redes de Economía Local</h3>
                  <p className="text-gray-600">Creación de sinergias y colaboraciones</p>
                </CardContent>
              </Card>
              <Card className="border-purple-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Sprout className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Innovación Territorial</h3>
                  <p className="text-gray-600">Impulso de nuevas oportunidades de negocio</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Líneas de Actuación */}
      <section id="objetivos" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Nuestras Líneas de Actuación</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="bg-gradient-to-br from-green-100 to-green-50 border-green-200">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-green-800 mb-6">Línea 1: Plan Estratégico RER</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                    <span className="text-gray-700"><strong>Talleres con asesorías:</strong> Formación especializada para emprendedores locales</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                    <span className="text-gray-700"><strong>Plataforma digital colaborativa:</strong> Herramientas tecnológicas para la gestión</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                    <span className="text-gray-700"><strong>Proyectos piloto:</strong> Diversificación económica territorial</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-100 to-blue-50 border-blue-200">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-blue-800 mb-6">Línea 2: Formación e Implementación</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <span className="text-gray-700"><strong>Planes de negocio:</strong> Desarrollo de estrategias empresariales viables</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <span className="text-gray-700"><strong>IA y recursos locales:</strong> Integración de tecnología avanzada</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <span className="text-gray-700"><strong>Escalabilidad:</strong> Replicación de iniciativas exitosas</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impacto y Sostenibilidad */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Impacto y Sostenibilidad</h2>
          
          {/* Métricas */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">Métricas Esperadas</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              <Card className="text-center border-green-200">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-green-600 mb-2">110</div>
                  <p className="text-gray-700">Personas formadas</p>
                </CardContent>
              </Card>
              <Card className="text-center border-blue-200">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-blue-600 mb-2">25</div>
                  <p className="text-gray-700">Nuevos empleos<br/>(70% consolidados)</p>
                </CardContent>
              </Card>
              <Card className="text-center border-purple-200">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-purple-600 mb-2">+5</div>
                  <p className="text-gray-700">Nuevas empresas</p>
                </CardContent>
              </Card>
              <Card className="text-center border-orange-200">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-orange-600 mb-2">+5%</div>
                  <p className="text-gray-700">Retención poblacional</p>
                </CardContent>
              </Card>
              <Card className="text-center border-red-200">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-red-600 mb-2">+15%</div>
                  <p className="text-gray-700">Comercio y autónomos</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Innovaciones */}
          <div>
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">Innovaciones Clave</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-gradient-to-br from-cyan-50 to-blue-50 border-cyan-200">
                <CardContent className="p-6">
                  <Globe className="w-10 h-10 text-cyan-600 mb-4" />
                  <h4 className="text-lg font-semibold mb-3">IA con LLMs y ERPs</h4>
                  <p className="text-gray-700">Integración de inteligencia artificial avanzada para optimizar procesos</p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-emerald-50 to-green-50 border-emerald-200">
                <CardContent className="p-6">
                  <Target className="w-10 h-10 text-emerald-600 mb-4" />
                  <h4 className="text-lg font-semibold mb-3">Plataforma Digital Replicable</h4>
                  <p className="text-gray-700">Solución escalable adaptable a diferentes territorios rurales</p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-violet-50 to-purple-50 border-violet-200">
                <CardContent className="p-6">
                  <Users className="w-10 h-10 text-violet-600 mb-4" />
                  <h4 className="text-lg font-semibold mb-3">Red Autosostenible</h4>
                  <p className="text-gray-700">Modelo de colaboración que se mantiene y crece autónomamente</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Nuestro Compromiso */}
      <section className="py-16 bg-gradient-to-r from-green-100 to-blue-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Nuestro Compromiso</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👩‍💼</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Igualdad de Género</h3>
                <p className="text-gray-700">60% participación femenina</p>
              </CardContent>
            </Card>
            <Card className="bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Inclusión</h3>
                <p className="text-gray-700">Diversidad funcional y colectivos vulnerables</p>
              </CardContent>
            </Card>
            <Card className="bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌱</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Medio Ambiente</h3>
                <p className="text-gray-700">Huella de carbono y economía circular</p>
              </CardContent>
            </Card>
            <Card className="bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💻</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Digitalización</h3>
                <p className="text-gray-700">Cierre de brechas tecnológicas</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">¿Quieres saber más o unirte a la red REDIAG?</h2>
            <p className="text-xl text-center text-gray-700 mb-12">Estamos aquí para ayudarte a formar parte de esta transformación digital rural</p>
            
            <div className="grid lg:grid-cols-2 gap-12">
              <Card>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name" className="text-base font-medium">Nombre completo</Label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="mt-2"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-base font-medium">Correo electrónico</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="mt-2"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="message" className="text-base font-medium">Mensaje</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="mt-2"
                        rows={4}
                        placeholder="Cuéntanos cómo podemos ayudarte o cómo te gustaría participar en REDIAG..."
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white py-3">
                      Enviar Mensaje
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <div className="space-y-8">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Información de Contacto</h3>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Mail className="w-5 h-5 text-green-600" />
                        <span>info@audita2.com</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="w-5 h-5 text-green-600" />
                        <span>+34 XXX XXX XXX</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <MapPin className="w-5 h-5 text-green-600" />
                        <span>España</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-green-50 to-blue-50">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-3">¿Eres gestoría o asesoría?</h3>
                    <p className="text-gray-700 mb-4">Únete a nuestra red y amplía tus servicios con herramientas digitales innovadoras.</p>
                    <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                      Más información
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">REDIAG – Audita2</h3>
              <p className="text-gray-300">Red Digital de Asesorías y Gestorías para el Desarrollo Rural</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Enlaces</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-green-400">Política de Privacidad</a></li>
                <li><a href="#" className="hover:text-green-400">Aviso Legal</a></li>
                <li><a href="#" className="hover:text-green-400">Cookies</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Proyecto subvencionado por:</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <p>Ministerio para la Transición Ecológica y el Reto Demográfico</p>
                <p>Gobierno de España</p>
                <p>Secretaría General para el Reto Demográfico</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Logos Institucionales</h4>
              <div className="bg-white rounded-lg p-2">
                <img 
                  src="/lovable-uploads/b18d4a69-5916-424e-881e-ab8a51fb5b7d.png" 
                  alt="Gobierno de España - Ministerio para la Transición Ecológica y el Reto Demográfico - Secretaría General para el Reto Demográfico" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8">
            <div className="text-center text-gray-300">
              <p className="mb-2">© 2025 Audita2. Todos los derechos reservados.</p>
              <p className="text-sm italic">
                "Proyecto subvencionado por el Ministerio para la Transición Ecológica y el Reto Demográfico"
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
