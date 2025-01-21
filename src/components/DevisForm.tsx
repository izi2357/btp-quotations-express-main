import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const DevisForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    typeProjet: "residential",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici vous pourriez ajouter la logique d'envoi du formulaire
    toast({
      title: "Demande envoyée",
      description: "Nous vous contacterons dans les plus brefs délais.",
    });
    setFormData({
      nom: "",
      email: "",
      telephone: "",
      typeProjet: "residential",
      description: "",
    });
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Demande de devis gratuit</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">Nom complet</label>
          <input
            type="text"
            required
            className="w-full p-3 border rounded-md"
            value={formData.nom}
            onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Email</label>
          <input
            type="email"
            required
            className="w-full p-3 border rounded-md"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Téléphone</label>
          <input
            type="tel"
            required
            className="w-full p-3 border rounded-md"
            value={formData.telephone}
            onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Type de projet</label>
          <select
            className="w-full p-3 border rounded-md"
            value={formData.typeProjet}
            onChange={(e) => setFormData({ ...formData, typeProjet: e.target.value })}
          >
            <option value="residential">Construction résidentielle</option>
            <option value="commercial">Construction commerciale</option>
            <option value="industrial">Travaux industriels</option>
            <option value="civil">Génie civil</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Description du projet</label>
          <textarea
            required
            className="w-full p-3 border rounded-md h-32"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-accent text-white py-3 rounded-md hover:bg-accent/90 transition-colors"
        >
          Envoyer la demande
        </button>
      </form>
    </div>
  );
};

export default DevisForm;