import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Cpu, Shield, BarChart3, Users, Zap, Target } from "lucide-react";

const Products = () => {
  const products = [
    {
      title: "SemiSeek",
      subtitle: "芯片研发AI助手",
      description: "芯片行业智能化的深度探索",
      icon: <Cpu className="h-16 w-16 text-primary" />,
      features: [
        "主要功能包括芯片设计流程优化",
        "技术架构优势领先行业标准", 
        "理解与回应能力超越传统工具",
        "深度集成EDA工具链"
      ],
      stats: [
        { label: "设计效率提升", value: "300%" },
        { label: "错误率降低", value: "85%" },
        { label: "开发周期缩短", value: "50%" }
      ]
    },
    {
      title: "GenAI治理解决方案",
      subtitle: "AI治理管理平台",
      description: "Creating The AI We Can Trust",
      icon: <Shield className="h-16 w-16 text-primary" />,
      features: [
        "AI Portal统一管理入口",
        "应用实用户权限控制",
        "Copilot机器人程序管理",
        "容器管理与资源调度"
      ],
      stats: [
        { label: "安全等级", value: "ISO27001" },
        { label: "响应时间", value: "<100ms" },
        { label: "可用性", value: "99.9%" }
      ]
    }
  ];

  return (
    <section id="products" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            核心
            <span className="bg-gradient-primary bg-clip-text text-transparent"> 产品 </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            为不同行业提供专业的AI解决方案，赋能企业智能化转型
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {products.map((product, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-card transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center pb-6">
                <div className="mx-auto mb-6 p-6 bg-primary/10 rounded-full w-fit">
                  {product.icon}
                </div>
                <CardTitle className="text-2xl font-bold mb-2">{product.title}</CardTitle>
                <CardDescription className="text-lg font-semibold text-primary mb-2">
                  {product.subtitle}
                </CardDescription>
                <p className="text-muted-foreground">{product.description}</p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3 text-foreground">核心功能</h4>
                  <ul className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-muted-foreground">
                        <Target className="h-4 w-4 text-primary mt-1 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3 text-foreground">关键指标</h4>
                  <div className="grid grid-cols-1 gap-3">
                    {product.stats.map((stat, idx) => (
                      <div key={idx} className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                        <span className="text-muted-foreground">{stat.label}</span>
                        <span className="font-bold text-primary">{stat.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <Button className="w-full bg-gradient-primary hover:opacity-90 text-primary-foreground">
                  了解更多
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;