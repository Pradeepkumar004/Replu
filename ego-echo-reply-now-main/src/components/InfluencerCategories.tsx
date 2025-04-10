
import { Card, CardContent } from "@/components/ui/card";
import { Music, Dumbbell, ShoppingBag, MonitorSmartphone, TrendingUp, Film } from "lucide-react";

const InfluencerCategories = () => {
  const categories = [
    {
      name: "Entertainment",
      icon: <Film className="h-8 w-8 text-purple-500" />,
      description: "Connect with actors, musicians, and entertainers"
    },
    {
      name: "Fitness",
      icon: <Dumbbell className="h-8 w-8 text-green-500" />,
      description: "Interact with fitness coaches and wellness experts"
    },
    {
      name: "Fashion & Beauty",
      icon: <ShoppingBag className="h-8 w-8 text-pink-500" />,
      description: "Engage with fashion influencers and beauty gurus"
    },
    {
      name: "Tech & Gaming",
      icon: <MonitorSmartphone className="h-8 w-8 text-blue-500" />,
      description: "Message top tech reviewers and gaming streamers"
    },
    {
      name: "Business",
      icon: <TrendingUp className="h-8 w-8 text-amber-500" />,
      description: "Connect with entrepreneurs and business leaders"
    },
    {
      name: "Music",
      icon: <Music className="h-8 w-8 text-red-500" />,
      description: "Interact with your favorite musicians and producers"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {categories.map((category, index) => (
        <Card key={index} className="hover:shadow-lg transition-shadow border-2 border-gray-100">
          <CardContent className="flex flex-col items-center p-6 text-center">
            <div className="p-3 rounded-full bg-gray-50 mb-4">
              {category.icon}
            </div>
            <h3 className="text-lg font-semibold mb-2">{category.name}</h3>
            <p className="text-gray-600 text-sm">{category.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default InfluencerCategories;
