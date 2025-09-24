const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    "产品服务": ["Web开发", "移动应用", "数据分析", "云服务"],
    "解决方案": ["企业数字化", "电商平台", "智能制造", "金融科技"],
    "支持": ["技术文档", "客户服务", "培训课程", "社区论坛"],
    "公司": ["关于我们", "新闻动态", "职业机会", "投资者关系"]
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              TechCorp
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              引领数字化未来的科技公司，为企业提供创新的技术解决方案，
              助力业务增长和数字化转型。
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors cursor-pointer">
                <span className="text-primary font-semibold">微</span>
              </div>
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors cursor-pointer">
                <span className="text-primary font-semibold">领</span>
              </div>
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors cursor-pointer">
                <span className="text-primary font-semibold">钉</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-foreground mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-muted-foreground text-sm">
              © {currentYear} TechCorp. 保留所有权利.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                隐私政策
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                服务条款
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Cookie政策
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;