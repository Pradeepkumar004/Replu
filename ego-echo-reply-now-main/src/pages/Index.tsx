
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { DollarSign, Star, Heart, Users, MessageCircle } from "lucide-react";
import EarlyAccessForm from "@/components/EarlyAccessForm";
import InfluencerCategories from "@/components/InfluencerCategories";
import TestimonialSection from "@/components/TestimonialSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import Footer from "@/components/Footer";
import MenuBar from "@/components/MenuBar";

const Index = () => {
  const [activeTab, setActiveTab] = useState<"user" | "influencer">("user");

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Menu Bar */}
      <MenuBar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      {/* Hero Section */}
      <header className="container mx-auto px-4 pt-10 pb-6 md:pt-20 md:pb-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Pay to Get <span className="text-blue-600">Personal Replies</span> from Your Favorite Influencers
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              The first platform that lets fans bid for direct responses from celebrities and creators. Join the waitlist to be first in line.
            </p>
            
            <div className="flex gap-4 flex-wrap mb-6">
              <div className="flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-blue-600" />
                <span>Place bids</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5 text-blue-600" />
                <span>Get personal replies</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-blue-600" />
                <span>Connect with influencers</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-xl p-6 border border-gray-200">
            <EarlyAccessForm userType={activeTab} />
          </div>
        </div>
      </header>

      {/* Influencer Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Discover Influencers Across Categories</h2>
          <InfluencerCategories />
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How EgoBid Works</h2>
          <HowItWorksSection />
        </div>
      </section>

      {/* Testimonials (Hypothetical) */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why People Are Excited</h2>
          <TestimonialSection />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">How does bidding work?</h3>
              <p className="text-gray-600">Fans place bids for personal replies from their favorite influencers. The highest bids get prioritized responses, ensuring meaningful connections.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">What types of influencers can I find?</h3>
              <p className="text-gray-600">Our platform supports creators from all categories: fitness, beauty, gaming, business, tech, entertainment, and more.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">I'm an influencer. How do I get started?</h3>
              <p className="text-gray-600">Join our waitlist for creators. We're onboarding influencers in waves to ensure a quality experience for both fans and creators.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">When will the platform launch?</h3>
              <p className="text-gray-600">We're planning to launch in Q2 2024. Early access will be given to users on our waitlist first, so sign up today!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
