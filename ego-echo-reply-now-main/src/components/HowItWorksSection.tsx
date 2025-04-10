
import { CircleDollarSign, MessageCircle, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: <CircleDollarSign className="h-10 w-10 text-blue-600" />,
      title: "Place Your Bid",
      description: "Set your price for a personal reply from your favorite influencer. Higher bids get priority attention."
    },
    {
      icon: <MessageCircle className="h-10 w-10 text-blue-600" />,
      title: "Get a Personal Reply",
      description: "When your bid is accepted, the influencer sends you a personalized response directly."
    },
    {
      icon: <Award className="h-10 w-10 text-blue-600" />,
      title: "Build Connections",
      description: "Form meaningful connections with influencers who inspire you through genuine interactions."
    }
  ];

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {steps.map((step, index) => (
        <Card key={index} className="border-2 border-gray-100">
          <CardContent className="pt-6">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 p-3 bg-blue-50 rounded-full">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600">
                {step.description}
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default HowItWorksSection;
