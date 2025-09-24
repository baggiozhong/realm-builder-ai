import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            TriSource
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/#home" className="text-foreground hover:text-primary transition-colors">首页</a>
            <a href="/#features" className="text-foreground hover:text-primary transition-colors">优势</a>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-foreground hover:text-primary transition-colors bg-transparent">
                    产品
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-4 w-[400px]">
                      <NavigationMenuLink asChild>
                        <a
                          href="/semiseek"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">SemiSeek</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            芯片研发AI助手
                          </p>
                        </a>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <a
                          href="/ai-governance"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">GenAI治理解决方案</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            AI治理管理平台
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <a href="/#about" className="text-foreground hover:text-primary transition-colors">关于</a>
            <a href="/#contact" className="text-foreground hover:text-primary transition-colors">联系</a>
            <Button variant="default" size="sm">开始合作</Button>
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
              <a href="/#home" className="block px-3 py-2 text-foreground hover:text-primary">首页</a>
              <a href="/#features" className="block px-3 py-2 text-foreground hover:text-primary">优势</a>
              <div className="px-3 py-2">
                <div className="text-foreground font-medium mb-2">产品</div>
                <div className="pl-4 space-y-1">
                  <a href="/semiseek" className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary">SemiSeek</a>
                  <a href="/ai-governance" className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary">GenAI治理解决方案</a>
                </div>
              </div>
              <a href="/#about" className="block px-3 py-2 text-foreground hover:text-primary">关于</a>
              <a href="/#contact" className="block px-3 py-2 text-foreground hover:text-primary">联系</a>
              <div className="px-3 py-2">
                <Button variant="default" size="sm" className="w-full">开始合作</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;