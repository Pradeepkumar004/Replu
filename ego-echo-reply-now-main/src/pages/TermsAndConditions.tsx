
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import MenuBar from "@/components/MenuBar";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <MenuBar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>
          
          <div className="prose prose-slate max-w-none">
            <p className="text-lg mb-4">Last Updated: April 10, 2025</p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
            <p>
              Welcome to EgoBid. These Terms and Conditions govern your use of the EgoBid platform 
              and services. By accessing or using our platform, you agree to be bound by these Terms.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Definitions</h2>
            <p>
              <strong>"Platform"</strong> refers to the EgoBid website and services.<br />
              <strong>"User"</strong> refers to any individual who accesses or uses the Platform.<br />
              <strong>"Fan"</strong> refers to users who bid to receive replies from Influencers.<br />
              <strong>"Influencer"</strong> refers to users who provide replies to Fans through the Platform.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">3. Service Description</h2>
            <p>
              EgoBid provides a platform that allows Fans to bid for personal replies from Influencers. 
              The highest bidder will receive a personal reply from the Influencer within a specified timeframe.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">4. User Accounts</h2>
            <p>
              To use certain features of the Platform, you must register for an account. You agree to 
              provide accurate, current, and complete information during the registration process and to 
              update such information to keep it accurate, current, and complete.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Payment Terms</h2>
            <p>
              All payments made through the Platform are processed by our payment processor. EgoBid 
              takes a commission from each successful transaction. Detailed fee structures are available 
              on the Platform.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Content Guidelines</h2>
            <p>
              All content shared on the Platform must comply with our content guidelines. EgoBid reserves 
              the right to remove any content that violates these guidelines.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Limitation of Liability</h2>
            <p>
              EgoBid shall not be liable for any indirect, incidental, special, consequential, or 
              punitive damages, including loss of profits, resulting from your use of the Platform.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">8. Changes to Terms</h2>
            <p>
              EgoBid reserves the right to modify these Terms at any time. We will provide notice of 
              significant changes to these Terms by posting the new Terms on the Platform.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">9. Contact Information</h2>
            <p>
              If you have any questions about these Terms, please contact us at support@egobid.com.
            </p>
          </div>
          
          <div className="mt-10 mb-6">
            <Button asChild className="mr-4">
              <Link to="/">Return to Home</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsAndConditions;
