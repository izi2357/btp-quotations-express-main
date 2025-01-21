import { Award, Clock, ThumbsUp, Users } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Expertise reconnue",
    description: "Plus de 20 ans d'expérience dans le secteur du BTP",
  },
  {
    icon: Users,
    title: "Équipe qualifiée",
    description: "Des professionnels formés et certifiés",
  },
  {
    icon: Clock,
    title: "Respect des délais",
    description: "Engagement sur des plannings précis",
  },
  {
    icon: ThumbsUp,
    title: "Satisfaction client",
    description: "Plus de 1000 projets réalisés avec succès",
  },
];

const WhyUs = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Pourquoi nous choisir ?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="text-center"
            >
              <div className="inline-block p-4 bg-secondary rounded-full mb-4">
                <reason.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;