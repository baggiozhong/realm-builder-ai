import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "消息已发送",
      description: "我们会在24小时内回复您！",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    { icon: <Mail className="h-6 w-6" />, label: "邮箱", value: "contact@techcorp.com" },
    { icon: <Phone className="h-6 w-6" />, label: "电话", value: "+86 400-123-4567" },
    { icon: <MapPin className="h-6 w-6" />, label: "地址", value: "北京市朝阳区科技园区" }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            联系
            <span className="bg-gradient-primary bg-clip-text text-transparent"> 我们 </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            有任何问题或合作意向？我们很乐意为您提供帮助
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-2xl">发送消息</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    placeholder="您的姓名"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-background border-border"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="您的邮箱"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-background border-border"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="请描述您的需求..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="bg-background border-border"
                  />
                </div>
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-primary hover:opacity-90 text-primary-foreground"
                >
                  <Send className="mr-2 h-5 w-5" />
                  发送消息
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">联系方式</h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="p-3 bg-primary/10 rounded-full text-primary">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{item.label}</div>
                      <div className="font-medium">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Card className="bg-gradient-primary p-6">
              <CardContent className="p-0 text-primary-foreground">
                <h4 className="text-xl font-semibold mb-4">准备开始您的项目？</h4>
                <p className="mb-6 opacity-90">
                  我们提供免费的项目咨询服务，帮助您制定最适合的数字化解决方案。
                </p>
                <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-gray-100">
                  预约咨询
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;