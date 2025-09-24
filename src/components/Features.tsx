import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Shield, Target, Rocket, Brain, Users } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Shield className="h-12 w-12 text-primary" />,
      title: "全面业务安全",
      description: "ISO27001认证的安全保护体系，确保业务数据和AI模型的安全可控。"
    },
    {
      icon: <Zap className="h-12 w-12 text-primary" />,
      title: "高效赋能",
      description: "一键接入芯AI能力助手，高效助力芯片设计，让AI成为研发得力助手。"
    },
    {
      icon: <Brain className="h-12 w-12 text-primary" />,
      title: "持续优化",
      description: "基于实际业务数据持续训练，确保AI模型在企业环境中不断进化。"
    },
    {
      icon: <Users className="h-12 w-12 text-primary" />,
      title: "专业团队",
      description: "拥有深厚AI技术背景的专业团队，为客户提供全方位技术支持。"
    },
    {
      icon: <Target className="h-12 w-12 text-primary" />,
      title: "行业专精",
      description: "深耕芯片设计和AI治理领域，提供针对性的行业解决方案。"
    },
    {
      icon: <Rocket className="h-12 w-12 text-primary" />,
      title: "快速部署",
      description: "成熟的产品化方案，支持快速部署和集成，快速见效。"
    }
  ];

  return (
    <section id="features" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            核心
            <span className="bg-gradient-primary bg-clip-text text-transparent"> 优势 </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            专注AI可信技术研究，为企业提供安全可靠的AI解决方案
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-card border-border hover:shadow-card transition-all duration-300 hover:scale-105"
            >
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-center">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;