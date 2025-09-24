import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            TechCorp
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">首页</a>
            <a href="#features" className="text-foreground hover:text-primary transition-colors">功能</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">关于我们</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">联系我们</a>
            <Button variant="default" size="sm">
              开始使用
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-foreground hover:text-primary">首页</a>
              <a href="#features" className="block px-3 py-2 text-foreground hover:text-primary">功能</a>
              <a href="#about" className="block px-3 py-2 text-foreground hover:text-primary">关于我们</a>
              <a href="#contact" className="block px-3 py-2 text-foreground hover:text-primary">联系我们</a>
              <div className="px-3 py-2">
                <Button variant="default" size="sm" className="w-full">
                  开始使用
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;