
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import MenuBar from "@/components/MenuBar";

const RefundPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <MenuBar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Refund Policy</h1>
          
          <div className="prose prose-slate max-w-none">
            <p className="text-lg mb-4">Last Updated: April 10, 2025</p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Overview</h2>
            <p>
              This Refund Policy outlines the terms and conditions for refunds on the EgoBid platform. 
              We strive to ensure all users have a positive experience, but understand there may be 
              circumstances where a refund is appropriate.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Eligible Refunds</h2>
            <p>
              Refunds may be issued in the following circumstances:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>The Influencer fails to respond within the specified timeframe</li>
              <li>Technical issues on our platform prevented the service from being delivered</li>
              <li>The content of the response violates our content guidelines</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">3. Refund Process</h2>
            <p>
              To request a refund:
            </p>
            <ol className="list-decimal pl-6 mb-4">
              <li>Contact customer support within 7 days of the issue</li>
              <li>Provide the transaction ID and reason for requesting a refund</li>
              <li>Our team will review your request within 3 business days</li>
            </ol>
            <p>
              If approved, refunds will be processed to the original payment method within 5-10 business days.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Non-Refundable Situations</h2>
            <p>
              Refunds will not be issued in the following circumstances:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>The Fan is dissatisfied with the response but the Influencer fulfilled their obligation</li>
              <li>The request violates our platform guidelines</li>
              <li>More than 7 days have passed since the transaction</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Special Circumstances</h2>
            <p>
              We understand that unique situations may arise. For special circumstances not covered by 
              this policy, please contact our support team for case-by-case evaluation.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Changes to This Policy</h2>
            <p>
              We reserve the right to modify this Refund Policy at any time. Changes will be effective 
              immediately upon posting to our platform.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Contact Us</h2>
            <p>
              If you have any questions about this Refund Policy, please contact us at support@egobid.com.
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

export default RefundPolicy;
