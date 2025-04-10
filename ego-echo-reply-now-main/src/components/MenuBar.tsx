
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { Users, User, Home, Info } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface MenuBarProps {
  activeTab?: "user" | "influencer";
  setActiveTab?: (tab: "user" | "influencer") => void;
}

const MenuBar = ({ activeTab = "user", setActiveTab }: MenuBarProps) => {
  // Create local state if setActiveTab is not provided
  const [localActiveTab, setLocalActiveTab] = useState<"user" | "influencer">(activeTab);
  
  // Use either the provided setter or the local one
  const handleTabChange = (tab: "user" | "influencer") => {
    if (setActiveTab) {
      setActiveTab(tab);
    } else {
      setLocalActiveTab(tab);
    }
  };
  
  // Use either the provided activeTab or the local one
  const currentTab = setActiveTab ? activeTab : localActiveTab;
  
  return (
    <div className="w-full bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
      <div className="container mx-auto px-4 flex justify-between items-center py-3">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mr-10">
            EgoBid
          </h1>
          
          <Menubar className="border-none bg-transparent">
            <MenubarMenu>
              <Link to="/">
                <MenubarTrigger className="cursor-pointer text-gray-600 hover:text-blue-600 transition-colors">
                  <div className="flex items-center gap-2">
                    <Home className="h-4 w-4" />
                    <span>Home</span>
                  </div>
                </MenubarTrigger>
              </Link>
            </MenubarMenu>
            
            <MenubarMenu>
              <Link to="/how-it-works">
                <MenubarTrigger className="cursor-pointer text-gray-600 hover:text-blue-600 transition-colors">
                  <div className="flex items-center gap-2">
                    <Info className="h-4 w-4" />
                    <span>How It Works</span>
                  </div>
                </MenubarTrigger>
              </Link>
            </MenubarMenu>
            
            <MenubarMenu>
              <MenubarTrigger className={cn(
                "cursor-pointer transition-colors",
                currentTab === "user" ? "text-blue-600 font-medium" : "text-gray-600"
              )}>
                <div className="flex items-center gap-2" onClick={() => handleTabChange("user")}>
                  <Users className="h-4 w-4" />
                  <Link to="/"></Link>
                  <span>For Fans</span>
                </div>
              </MenubarTrigger>
            </MenubarMenu>
            
            <MenubarMenu>
              <MenubarTrigger className={cn(
                "cursor-pointer transition-colors",
                currentTab === "influencer" ? "text-purple-600 font-medium" : "text-gray-600"
              )}>
                <div className="flex items-center gap-2" onClick={() => handleTabChange("influencer")}>
                  <User className="h-4 w-4" />
                  <Link to="/"></Link>
                  <span>For Influencers</span>
                </div>
              </MenubarTrigger>
            </MenubarMenu>
          </Menubar>
        </div>
        
        <div className="flex gap-4">
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <Info className="h-4 w-4" />
            <span>About</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
