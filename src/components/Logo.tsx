import React from 'react';
import { Server, Code } from 'lucide-react';

interface LogoProps {
  isScrolled: boolean;
}

const Logo: React.FC<LogoProps> = ({ isScrolled }) => {
  return (
    <a href="#home" className="flex items-center">
      <div className="flex items-center mr-2">
        <Server 
          className={`w-6 h-6 ${isScrolled ? 'text-primary-600' : 'text-white'}`} 
        />
        <Code 
          className={`w-6 h-6 -ml-2 ${isScrolled ? 'text-secondary-500' : 'text-white'}`} 
        />
      </div>
      <span 
        className={`font-bold text-xl ${
          isScrolled ? 'text-gray-900' : 'text-white'
        }`}
      >
        Build<span className="text-primary-600">Ops</span>.tech
      </span>
    </a>
  );
};

export default Logo;