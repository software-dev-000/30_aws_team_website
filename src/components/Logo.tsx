import React from 'react';



const Logo: React.FC<{isScrolled: boolean}> = ({ isScrolled }) => {
  return (
    <a href="/" className="flex items-center">
      <img src="img/logo/favicon.png" alt="Logo" className="h-[50px]" />
      <span 
        className={`ml-2 font-bold text-xl ${
          isScrolled ? 'text-gray-900' : 'text-white'
        }`}
      >
        BuildOps
      </span>
      {/* <div className="flex items-center mr-2">
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
      </span> */}
    </a>
  );
};

export default Logo;