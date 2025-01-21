import { Building2, Home, Factory, Warehouse } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Construction résidentielle",
    description: "Maisons individuelles, rénovations et extensions pour particuliers",
  },
  {
    icon: Building2,
    title: "Construction commerciale",
    description: "Bureaux, commerces et bâtiments professionnels",
  },
  {
    icon: Factory,
    title: "Travaux industriels",
    description: "Usines, entrepôts et installations industrielles",
  },
  {
    icon: Warehouse,
    title: "Génie civil",
    description: "Infrastructures, ouvrages d'art et aménagements urbains",
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Nos services
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <service.icon className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;