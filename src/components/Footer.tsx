import React from 'react';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Github, 
  Mail, 
  Phone, 
  MapPin 
} from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <Logo isScrolled={true} />
            </div>
            <p className="text-gray-400 mb-6">
              Empowering businesses with cutting-edge DevOps and full-stack engineering solutions.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="#" icon={<Facebook size={18} />} />
              <SocialLink href="#" icon={<Twitter size={18} />} />
              <SocialLink href="#" icon={<Instagram size={18} />} />
              <SocialLink href="#" icon={<Linkedin size={18} />} />
              <SocialLink href="#" icon={<Github size={18} />} />
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <FooterLink href="#home" text="Home" />
              <FooterLink href="#about" text="About Us" />
              <FooterLink href="#services" text="Services" />
              <FooterLink href="#portfolio" text="Portfolio" />
              <FooterLink href="#blog" text="Blog" />
              <FooterLink href="#contact" text="Contact" />
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              <FooterLink href="#" text="Cloud Infrastructure" />
              <FooterLink href="#" text="CI/CD Pipeline" />
              <FooterLink href="#" text="Containerization" />
              <FooterLink href="#" text="Full Stack Development" />
              <FooterLink href="#" text="DevSecOps" />
              <FooterLink href="#" text="AWS Solutions" />
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mt-1 mr-3 text-primary-500" size={18} />
                <span className="text-gray-400">123 Tech Street, Silicon Valley, CA 94043</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 text-primary-500" size={18} />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 text-primary-500" size={18} />
                <span className="text-gray-400">info@buildops.tech</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} BuildOps.tech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <a 
    href={href} 
    className="bg-gray-800 p-2 rounded-full hover:bg-primary-600 transition-colors duration-300"
    aria-label="Social media"
  >
    {icon}
  </a>
);

const FooterLink = ({ href, text }: { href: string; text: string }) => (
  <li>
    <a 
      href={href} 
      className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
    >
      {text}
    </a>
  </li>
);

export default Footer;