import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504307651254-35680f356dfd')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Votre partenaire de confiance en construction
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Plus de 20 ans d'expertise dans le BTP au service de vos projets
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/devis"
              className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-md inline-flex items-center justify-center group transition-colors"
            >
              Demander un devis gratuit
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/services"
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-md inline-flex items-center justify-center transition-colors"
            >
              Découvrir nos services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;