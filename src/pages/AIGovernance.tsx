import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Users, Lock, Settings, Monitor, CheckCircle, ArrowLeft } from "lucide-react";

const AIGovernance = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Button variant="ghost" size="sm" asChild className="mb-8">
              <a href="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
                <ArrowLeft className="h-4 w-4" />
                返回首页
              </a>
            </Button>
            
            <div className="flex justify-center mb-6">
              <div className="p-6 bg-primary/10 rounded-full">
                <Shield className="h-20 w-20 text-primary" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">GenAI治理解决方案</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground mb-6">
              AI治理管理平台
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Creating The AI We Can Trust - 构建可信赖的AI生态系统
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge variant="secondary" className="px-4 py-2 text-sm">ISO27001 安全等级</Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">响应时间 &lt;100ms</Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">可用性 99.9%</Badge>
            </div>
            
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-primary-foreground">
              申请演示
            </Button>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">核心功能</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              全方位AI治理解决方案，确保AI应用的安全性、合规性和可控性
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Monitor className="h-8 w-8 text-primary" />,
                title: "AI Portal统一管理入口",
                description: "集中管理所有AI应用和服务，提供统一的访问控制"
              },
              {
                icon: <Users className="h-8 w-8 text-primary" />,
                title: "应用实用户权限控制",
                description: "细粒度的用户权限管理，确保数据安全和访问合规"
              },
              {
                icon: <Settings className="h-8 w-8 text-primary" />,
                title: "Copilot机器人程序管理",
                description: "智能管理AI助手和自动化程序，优化业务流程"
              },
              {
                icon: <Lock className="h-8 w-8 text-primary" />,
                title: "容器管理与资源调度",
                description: "高效的容器化部署和资源分配，确保系统稳定运行"
              }
            ].map((feature, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-card transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">安全与合规</h2>
              <p className="text-xl text-muted-foreground">
                企业级安全标准，全面保障AI应用的可信度
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">企业级安全防护</h3>
                    <p className="text-muted-foreground">
                      符合ISO27001标准的安全体系，多层防护机制确保数据和系统安全，防范各类安全威胁。
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">合规性管理</h3>
                    <p className="text-muted-foreground">
                      内置合规检查机制，自动监控AI应用的合规状态，确保符合行业法规和企业政策要求。
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                    <Monitor className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">实时监控与审计</h3>
                    <p className="text-muted-foreground">
                      全方位的系统监控和操作审计，实时跟踪AI应用的运行状态和用户行为。
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card p-8 rounded-lg border border-border">
                <h3 className="text-2xl font-bold mb-6 text-center">关键指标</h3>
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">安全等级</span>
                    <span className="text-lg font-bold text-primary">ISO27001</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">响应时间</span>
                    <span className="text-lg font-bold text-primary">&lt;100ms</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">系统可用性</span>
                    <span className="text-lg font-bold text-primary">99.9%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">数据加密级别</span>
                    <span className="text-lg font-bold text-primary">AES-256</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">系统架构</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              模块化设计，灵活部署，支持多种场景应用
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "管理层",
                description: "统一的管理控制台，提供直观的操作界面和丰富的管理功能",
                features: ["用户管理", "权限控制", "策略配置", "监控面板"]
              },
              {
                title: "服务层",
                description: "核心业务逻辑处理，提供稳定可靠的AI治理服务",
                features: ["API网关", "服务注册", "负载均衡", "故障恢复"]
              },
              {
                title: "基础设施层",
                description: "底层资源管理和容器化部署，确保系统高可用性",
                features: ["容器编排", "资源调度", "存储管理", "网络安全"]
              }
            ].map((layer, index) => (
              <Card key={index} className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-xl text-center">{layer.title}</CardTitle>
                  <CardDescription className="text-center">{layer.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {layer.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              构建您的
              <span className="bg-gradient-primary bg-clip-text text-transparent"> 可信AI生态 </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              让我们帮助您建立安全、合规、高效的AI治理体系
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-primary-foreground">
                申请演示
              </Button>
              <Button size="lg" variant="outline">
                下载白皮书
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIGovernance;