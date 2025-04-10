
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { submitToSupabase } from "@/utils/supabaseService";

interface EarlyAccessFormProps {
  userType: "user" | "influencer";
}

const EarlyAccessForm = ({ userType }: EarlyAccessFormProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email) {
      toast.error("Please fill in all required fields");
      return;
    }
    
    setIsSubmitting(true);
    
    const userData = {
      name,
      email,
      userType,
      category: userType === "influencer" ? category : undefined,
      message: message || undefined
    };
    
    const success = await submitToSupabase(userData);
    
    if (success) {
      // Reset form
      setName("");
      setEmail("");
      setCategory("");
      setMessage("");
    }
    
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-semibold mb-2">
        {userType === "user" ? "Join as a Fan" : "Join as an Influencer"}
      </h2>
      <p className="text-gray-600 mb-4">
        {userType === "user" 
          ? "Be the first to connect with your favorite influencers." 
          : "Start monetizing your audience with personal replies."}
      </p>
      
      <div>
        <Input 
          placeholder="Your Name" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      
      <div>
        <Input 
          type="email" 
          placeholder="Your Email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      
      {userType === "influencer" && (
        <div>
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger>
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="beauty">Beauty & Fashion</SelectItem>
              <SelectItem value="fitness">Fitness & Health</SelectItem>
              <SelectItem value="tech">Technology</SelectItem>
              <SelectItem value="gaming">Gaming</SelectItem>
              <SelectItem value="lifestyle">Lifestyle</SelectItem>
              <SelectItem value="business">Business & Finance</SelectItem>
              <SelectItem value="entertainment">Entertainment</SelectItem>
              <SelectItem value="education">Education</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
      )}
      
      <div>
        <Textarea 
          placeholder={userType === "user" 
            ? "Which influencers would you like to connect with?" 
            : "Tell us about your audience and content"
          }
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      
      <Button 
        type="submit" 
        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Join Waitlist"}
      </Button>
    </form>
  );
};

export default EarlyAccessForm;
