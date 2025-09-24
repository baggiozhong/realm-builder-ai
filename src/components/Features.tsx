import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Shield, Globe, Rocket, Brain, Users } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Zap className="h-12 w-12 text-primary" />,
      title: "极速性能",
      description: "采用最新技术栈，确保应用运行速度比行业标准快10倍以上。"
    },
    {
      icon: <Shield className="h-12 w-12 text-primary" />,
      title: "安全可靠",
      description: "企业级安全保障，多层加密技术，保护您的数据安全无忧。"
    },
    {
      icon: <Globe className="h-12 w-12 text-primary" />,
      title: "全球部署",
      description: "支持全球多地区部署，为用户提供最优的访问体验。"
    },
    {
      icon: <Rocket className="h-12 w-12 text-primary" />,
      title: "快速上线",
      description: "从需求到上线仅需几天时间，让您的想法快速变为现实。"
    },
    {
      icon: <Brain className="h-12 w-12 text-primary" />,
      title: "智能分析",
      description: "AI驱动的数据分析，为您的业务决策提供深度洞察。"
    },
    {
      icon: <Users className="h-12 w-12 text-primary" />,
      title: "团队协作",
      description: "强大的团队协作功能，让分布式办公变得简单高效。"
    }
  ];

  return (
    <section id="features" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            为什么选择
            <span className="bg-gradient-primary bg-clip-text text-transparent"> 我们 </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            我们提供全方位的数字化解决方案，帮助您的企业在竞争中脱颖而出
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