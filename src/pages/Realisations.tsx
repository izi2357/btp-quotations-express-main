import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const realisations = [
  {
    title: "Rénovation complète de murs en pierre",
    description: "Restauration et rejointoiement des murs en pierre traditionnels",
    details: "Travail minutieux de restauration des joints sur des murs en pierre ancestraux, respectant les techniques traditionnelles tout en assurant une isolation et une étanchéité optimales.",
    image: "/lovable-uploads/651c91c3-6488-4939-a262-07255de9f1cc.png"
  },
  {
    title: "Terrassement et préparation de terrain",
    description: "Travaux de terrassement pour aménagement extérieur",
    details: "Utilisation d'équipements spécialisés pour des travaux de terrassement précis, permettant la création d'espaces extérieurs fonctionnels et esthétiques.",
    image: "/lovable-uploads/d8fb61a7-f6ed-4ca6-b0b1-03412ee553d8.png"
  },
  {
    title: "Rénovation de façade traditionnelle",
    description: "Restauration complète de façade en pierre avec mise en valeur du patrimoine",
    details: "Intervention sur une façade traditionnelle en pierre, incluant le nettoyage, la réparation des joints et la mise en valeur des éléments architecturaux d'origine.",
    image: "/lovable-uploads/aeb2f8a5-6163-41f5-b3dc-22670bcad63f.png"
  }
];

const Realisations = () => {
  return (
    <main className="pt-20">
      <div className="bg-secondary py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-6">Nos Réalisations</h1>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Découvrez nos travaux récents et l'expertise de nos équipes à travers ces projets
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {realisations.map((realisation, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={realisation.image}
                    alt={realisation.title}
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{realisation.title}</CardTitle>
                  <CardDescription>{realisation.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{realisation.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-8">
              Vous avez un projet similaire ? N'hésitez pas à nous contacter pour en discuter.
            </p>
            <a
              href="/devis"
              className="bg-accent text-white px-8 py-3 rounded-md inline-flex items-center hover:bg-accent/90 transition-colors"
            >
              Demander un devis
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Realisations;