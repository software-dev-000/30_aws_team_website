import React, { useEffect, useRef } from 'react';
import { X, Award, Star, Github, Linkedin, Twitter } from 'lucide-react';
import { teamMembers } from '../data/teamMembers';

interface TeamMemberModalProps {
  member: typeof teamMembers[0];
  onClose: () => void;
}

const TeamMemberModal: React.FC<TeamMemberModalProps> = ({ member, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.addEventListener('mousedown', handleClickOutside);

    // Prevent scrolling of the body when modal is open
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-4 backdrop-blur-sm animate-fade-in">
      <div 
        ref={modalRef}
        className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-slide-up"
      >
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/80 text-gray-700 hover:bg-gray-100 transition z-10"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
          
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 bg-gradient-to-b from-primary-600 to-primary-800 text-white p-6 md:p-8 rounded-t-xl md:rounded-t-none md:rounded-l-xl">
              <div className="aspect-square rounded-xl overflow-hidden mb-6 mx-auto max-w-[200px]">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
              <p className="text-primary-200 mb-4">{member.position}</p>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-2">Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {member.skills.map((skill, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-white/10 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-2">Rating</h4>
                <div className="flex items-center">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star 
                      key={index} 
                      size={20} 
                      className={index < member.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-400'} 
                    />
                  ))}
                  <span className="ml-2">{member.rating}/5</span>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-2">Connect</h4>
                <div className="flex space-x-3">
                  <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition">
                    <Linkedin size={20} />
                  </a>
                  <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition">
                    <Github size={20} />
                  </a>
                  <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition">
                    <Twitter size={20} />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="md:w-2/3 p-6 md:p-8">
              <div className="mb-6">
                <h4 className="text-xl font-bold mb-3">About</h4>
                <p className="text-gray-700 leading-relaxed">
                  {member.bio}
                </p>
              </div>
              
              <div className="mb-6">
                <h4 className="text-xl font-bold mb-3">Experience</h4>
                <ul className="space-y-4">
                  {member.experience.map((exp, index) => (
                    <li key={index} className="border-l-2 border-primary-200 pl-4 pb-4">
                      <div className="flex justify-between mb-1">
                        <h5 className="font-semibold text-gray-900">{exp.role}</h5>
                        <span className="text-sm text-gray-500">{exp.period}</span>
                      </div>
                      <div className="text-gray-700 mb-1">{exp.company}</div>
                      <p className="text-sm text-gray-600">{exp.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-6">
                <h4 className="text-xl font-bold mb-3">Certifications</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {member.certifications.map((cert, index) => (
                    <div 
                      key={index} 
                      className="flex items-start p-3 bg-gray-50 rounded-lg border border-gray-100"
                    >
                      <Award className="text-primary-600 mr-3 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-gray-900">{cert.name}</div>
                        <div className="text-sm text-gray-500">{cert.issuer} • {cert.year}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-xl font-bold mb-3">Projects</h4>
                <ul className="space-y-3">
                  {member.projects.map((project, index) => (
                    <li key={index} className="text-gray-700">
                      <div className="font-medium">{project.name}</div>
                      <p className="text-sm text-gray-600">{project.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberModal;