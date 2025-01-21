import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="font-heading text-2xl font-bold text-primary">
          BORIS DEPRÈS
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-600 hover:text-accent transition-colors">
              Accueil
            </Link>
            <Link to="/services" className="text-gray-600 hover:text-accent transition-colors">
              Services
            </Link>
            <Link to="/realisations" className="text-gray-600 hover:text-accent transition-colors">
              Réalisations
            </Link>
            <Link to="/devis" className="bg-accent text-white px-6 py-2 rounded-md hover:bg-accent/90 transition-colors">
              Demander un devis
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-6">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-600 hover:text-accent transition-colors" onClick={() => setIsOpen(false)}>
                Accueil
              </Link>
              <Link to="/services" className="text-gray-600 hover:text-accent transition-colors" onClick={() => setIsOpen(false)}>
                Services
              </Link>
              <Link to="/realisations" className="text-gray-600 hover:text-accent transition-colors" onClick={() => setIsOpen(false)}>
                Réalisations
              </Link>
              <Link to="/devis" className="bg-accent text-white px-6 py-2 rounded-md hover:bg-accent/90 transition-colors text-center" onClick={() => setIsOpen(false)}>
                Demander un devis
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;