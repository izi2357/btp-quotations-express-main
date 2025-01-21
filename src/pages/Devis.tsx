import DevisForm from "@/components/DevisForm";

const Devis = () => {
  return (
    <main className="pt-32 pb-20 bg-secondary min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-6">
          Demandez votre devis gratuit
        </h1>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Remplissez le formulaire ci-dessous et nous vous contacterons dans les plus brefs délais
        </p>
        
        <DevisForm />
      </div>
    </main>
  );
};

export default Devis;