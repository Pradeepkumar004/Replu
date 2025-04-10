
import { toast } from "sonner";

interface UserData {
  name: string;
  email: string;
  userType: "user" | "influencer";
  category?: string;
  message?: string;
}

// This is a deployment ID of a Google Apps Script web app
// You'll need to replace this with your actual deployed script ID
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID_HERE/exec";

export const submitToGoogleSheets = async (data: UserData): Promise<boolean> => {
  try {
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    
    if (!response.ok) {
      throw new Error("Failed to submit data");
    }
    
    const result = await response.json();
    
    if (result.success) {
      toast.success("Your information has been submitted successfully!");
      return true;
    } else {
      throw new Error(result.error || "Unknown error occurred");
    }
  } catch (error) {
    console.error("Error submitting to Google Sheets:", error);
    toast.error("Failed to submit your information. Please try again later.");
    return false;
  }
};
