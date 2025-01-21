import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">BORIS DEPRÈS</h3>
            <p className="text-gray-300">
            Auto-entrepreneur basé en Bretagne, je suis un électricien certifié en basse et haute tension, également agréé en plomberie et gaz. Fort d’une expertise polyvalente, j’interviens sur divers projets, notamment l’aménagement de salles de bain, la construction de terrasses, et la réalisation de joints en pierre. Mon objectif : offrir des solutions complètes et adaptées aux besoins de mes clients, alliant qualité, sécurité, et professionnalisme.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                <span>123 Rue de la Construction, Paris</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                <span>06 67 79 92 82</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                <span>exemple@exemple.fr</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Navigation</h3>
            <div className="space-y-2">
              <Link to="/" className="block hover:text-accent transition-colors">
                Accueil
              </Link>
              <Link to="/services" className="block hover:text-accent transition-colors">
                Services
              </Link>
              <Link to="/devis" 