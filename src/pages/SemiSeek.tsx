import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cpu, Zap, Target, CheckCircle, BarChart3, Shield, ArrowLeft } from "lucide-react";

const SemiSeek = () => {
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
                <Cpu className="h-20 w-20 text-primary" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">SemiSeek</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground mb-6">
              芯片研发AI助手
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              芯片行业智能化的深度探索，为芯片设计工程师提供全流程AI助手服务
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge variant="secondary" className="px-4 py-2 text-sm">设计效率提升 300%</Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">错误率降低 85%</Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">开发周期缩短 50%</Badge>
            </div>
            
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-primary-foreground">
              立即体验
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
              基于深度学习的芯片设计全流程优化解决方案
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Target className="h-8 w-8 text-primary" />,
                title: "芯片设计流程优化",
                description: "智能分析设计流程，识别瓶颈并提供优化建议"
              },
              {
                icon: <Zap className="h-8 w-8 text-primary" />,
                title: "技术架构优势",
                description: "领先行业标准的AI算法架构，确保设计质量"
              },
              {
                icon: <CheckCircle className="h-8 w-8 text-primary" />,
                title: "理解与回应能力",
                description: "超越传统工具的自然语言理解和智能回应"
              },
              {
                icon: <BarChart3 className="h-8 w-8 text-primary" />,
                title: "深度集成EDA工具链",
                description: "无缝集成主流EDA工具，提供一站式设计体验"
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

      {/* Technical Advantages */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">技术优势</h2>
              <p className="text-xl text-muted-foreground">
                基于先进AI技术构建的芯片设计智能助手
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                    <Cpu className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">智能设计优化</h3>
                    <p className="text-muted-foreground">
                      基于机器学习算法，自动分析设计模式，提供个性化优化建议，显著提升设计效率和质量。
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">错误预防与检测</h3>
                    <p className="text-muted-foreground">
                      实时监控设计过程，智能识别潜在问题，提前预警并提供解决方案，大幅降低设计错误率。
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">自动化流程</h3>
                    <p className="text-muted-foreground">
                      将复杂的芯片设计流程自动化，减少重复性工作，让工程师专注于创新性设计。
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card p-8 rounded-lg border border-border">
                <h3 className="text-2xl font-bold mb-6 text-center">性能指标</h3>
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">设计效率提升</span>
                    <span className="text-2xl font-bold text-primary">300%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">错误率降低</span>
                    <span className="text-2xl font-bold text-primary">85%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">开发周期缩短</span>
                    <span className="text-2xl font-bold text-primary">50%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">用户满意度</span>
                    <span className="text-2xl font-bold text-primary">98%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              准备好体验
              <span className="bg-gradient-primary bg-clip-text text-transparent"> SemiSeek </span>
              了吗？
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              加入数千家企业的行列，让AI赋能您的芯片设计流程
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-primary-foreground">
                免费试用
              </Button>
              <Button size="lg" variant="outline">
                联系销售
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SemiSeek;