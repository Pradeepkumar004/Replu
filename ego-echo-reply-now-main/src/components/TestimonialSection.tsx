
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const TestimonialSection = () => {
  const testimonials = [
    {
      name: "Alex M.",
      role: "Early Tester",
      text: "This concept is brilliant! I've always wanted to get personalized advice from my favorite fitness influencer, and EgoBid made it happen.",
      stars: 5
    },
    {
      name: "Sarah J.",
      role: "Content Creator",
      text: "As an influencer, I love the idea of connecting with my most dedicated followers while being compensated for my time and expertise.",
      stars: 5
    },
    {
      name: "Michael T.",
      role: "Tech Enthusiast",
      text: "Finally got tech recommendations specifically for MY needs from a YouTuber I've followed for years. Worth every penny!",
      stars: 4
    }
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {testimonials.map((testimonial, index) => (
        <Card key={index} className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex mb-2">
              {[...Array(testimonial.stars)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-gray-600 italic mb-4">"{testimonial.text}"</p>
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold text-sm">
                {testimonial.name[0]}
              </div>
              <div className="ml-3">
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default TestimonialSection;
