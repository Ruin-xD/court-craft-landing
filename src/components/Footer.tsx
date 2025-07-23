import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const basketballLogo = '/lovable-uploads/ec79b363-95a0-47df-939f-41bbc80380aa.png';

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src={basketballLogo} alt="HoopCraft" className="w-8 h-8" />
              <span className="text-xl font-bold">HoopCraft</span>
            </div>
            <p className="text-muted-foreground">
              Premium basketball manufacturing with over 50 years of experience. 
              Crafting excellence, one ball at a time.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/products" className="text-muted-foreground hover:text-primary transition-colors">Products</Link></li>
              <li><Link to="/offices" className="text-muted-foreground hover:text-primary transition-colors">Offices</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Products</h3>
            <ul className="space-y-2">
              <li><span className="text-muted-foreground hover:text-primary cursor-pointer transition-colors">Professional Basketballs</span></li>
              <li><span className="text-muted-foreground hover:text-primary cursor-pointer transition-colors">Training Equipment</span></li>
              <li><span className="text-muted-foreground hover:text-primary cursor-pointer transition-colors">Custom Basketballs</span></li>
              <li><span className="text-muted-foreground hover:text-primary cursor-pointer transition-colors">Youth Basketballs</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">123 Basketball Ave, Sports City, SC 12345</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">info@hoopcraft.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 HoopCraft. All rights reserved. Crafted with precision and passion.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;