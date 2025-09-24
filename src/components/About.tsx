import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Target, TrendingUp } from "lucide-react";

const About = () => {
  const stats = [
    { icon: <Users className="h-8 w-8 text-primary" />, number: "1000+", label: "满意客户" },
    { icon: <Award className="h-8 w-8 text-primary" />, number: "50+", label: "行业奖项" },
    { icon: <Target className="h-8 w-8 text-primary" />, number: "99.9%", label: "服务可用性" },
    { icon: <TrendingUp className="h-8 w-8 text-primary" />, number: "300%", label: "客户增长率" }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              关于
              <span className="bg-gradient-primary bg-clip-text text-transparent"> 我们 </span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              我们是一家专注于数字化转型的科技公司，成立于2020年。凭借深厚的技术积累和丰富的行业经验，
              我们已经为全球1000多家企业提供了优质的数字化解决方案。
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              我们的使命是通过创新技术，帮助企业实现数字化转型，提升运营效率，
              创造更大的商业价值。我们相信技术的力量能够改变世界。
            </p>
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-primary-foreground shadow-glow">
              了解更多
            </Button>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-card border-border text-center p-6 hover:shadow-card transition-all duration-300">
                <CardContent className="p-0">
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;