
import MenuBar from "@/components/MenuBar";
import HowItWorksSection from "@/components/HowItWorksSection";
import Footer from "@/components/Footer";

const HowItWorks = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-slate-100">
      <MenuBar />
      
      <main className="flex-grow">
        <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-6">How EgoBid Works</h1>
            <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
              EgoBid connects fans with their favorite influencers through a simple bidding process. 
              Here's how it works in three easy steps:
            </p>
            <HowItWorksSection />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default HowItWorks;
