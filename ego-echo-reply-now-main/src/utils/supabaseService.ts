
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface UserData {
  name: string;
  email: string;
  userType: "user" | "influencer";
  category?: string;
  message?: string;
}

export const submitToSupabase = async (data: UserData): Promise<boolean> => {
  try {
    const { error } = await supabase
      .from("early_access")
      .insert({
        name: data.name,
        email: data.email,
        user_type: data.userType,
        category: data.category || null,
        message: data.message || null
      });
    
    if (error) {
      if (error.code === '23505') {
        // Unique violation error code
        toast.error("This email is already registered. Thank you for your interest!");
      } else {
        throw error;
      }
      return false;
    }
    
    toast.success("Your information has been submitted successfully!");
    return true;
  } catch (error) {
    console.error("Error submitting to Supabase:", error);
    toast.error("Failed to submit your information. Please try again later.");
    return false;
  }
};

export const subscribeToNewsletter = async (email: string): Promise<boolean> => {
  try {
    const { error } = await supabase
      .from("newsletter_subscribers")
      .insert({ email });
    
    if (error) {
      if (error.code === '23505') {
        // Unique violation error code
        toast.success("You're already subscribed! Thank you for your support.");
      } else {
        throw error;
      }
      return false;
    }
    
    toast.success("Thanks for subscribing! We'll keep you updated.");
    return true;
  } catch (error) {
    console.error("Error subscribing to newsletter:", error);
    toast.error("Failed to subscribe. Please try again later.");
    return false;
  }
};
