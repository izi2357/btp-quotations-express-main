import { Building2, Home, Factory, Warehouse } from "lucide-react";
import { Link } from "react-router-dom";

const servicesDetailed = [
  {
    icon: Home,
    title: "Construction résidentielle",
    description: "Construction et rénovation de maisons individuelles, extensions, surélévations...",
    details: [
      "Construction de maisons individuelles",
      "Rénovation complète",
      "Extensions et surélévations",
      "Aménagement de combles",
    ],
  },
  {
    icon: Building2,
    title: "Construction commerciale",
    description: "Réalisation de projets commerciaux et professionnels sur mesure",
    details: [
      "Bureaux et espaces de travail",
      "Commerces et boutiques",
      "Restaurants et hôtels",
      "Centres commerciaux",
    ],
  },
  {
    icon: Factory,
    title: "Travaux industriels",
    description: "Construction et aménagement d'installations industrielles",
    details: [
      "Usines et sites de production",
      "Entrepôts logistiques",
      "Installations techniques",
      "Réhabilitation de sites",
    ],
  },
  {
    icon: Warehouse,
    title: "Génie civil",
    description: "Réalisation d'infrastructures et d'ouvrages d'art",
    details: [
      "Ouvrages d'art",
      "Infrastructures routières",
      "Aménagements urbains",
      "Travaux publics",
    ],
  },
];

const Services = () => {
  return (
    <main className="pt-20">
      <div className="bg-secondary py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-6">Nos Services</h1>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Découvrez notre gamme complète de services en construction et BTP
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {servicesDetailed.map((service) => (
              <div key={service.title} className="bg-white p-8 rounded-lg shadow-lg">
                <service.icon className="w-12 h-12 text-accent mb-4" />
                <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.details.map((detail) => (
                    <li key={detail} className="flex items-center">
                      <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/devis"
              className="bg-accent text-white px-8 py-3 rounded-md inline-flex items-center hover:bg-accent/90 transition-colors"
            >
              Demander un devis
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Services;