import React, { useState } from 'react';
import { Users, Award, Calendar, Shield, CheckCircle2 } from 'lucide-react';
import TeamMemberModal from '../components/TeamMemberModal';
import { teamMembers } from '../data/teamMembers';

const About = () => {
  const [selectedMember, setSelectedMember] = useState<typeof teamMembers[0] | null>(null);

  const openModal = (member: typeof teamMembers[0]) => {
    setSelectedMember(member);
  };

  const closeModal = () => {
    setSelectedMember(null);
  };

  return (
    <section id="about" className="section bg-white">
      <div className="section-heading">
        <h2 className="section-title">About Us</h2>
        <p className="section-subtitle">
          We are a team of DevOps specialists and full-stack engineers passionate about creating efficient, scalable solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div className="animate-slide-up">
          <h3 className="text-2xl font-bold mb-4 text-primary-700">Our Mission</h3>
          <p className="mb-6 text-gray-700">
            At BuildOps.tech, we empower businesses by bridging the gap between development and operations through 
            cutting-edge DevOps practices and comprehensive full-stack engineering solutions. Our AWS expertise 
            helps organizations achieve unprecedented scalability, reliability, and efficiency.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            <StatsCard 
              icon={<Users className="text-primary-500" />} 
              title="Trusted By" 
              value="50+" 
              description="Happy Clients" 
            />
            <StatsCard 
              icon={<Award className="text-primary-500" />} 
              title="AWS Certified" 
              value="100%" 
              description="Team Members" 
            />
            <StatsCard 
              icon={<Calendar className="text-primary-500" />} 
              title="Years in Business" 
              value="10+" 
              description="Of Experience" 
            />
            <StatsCard 
              icon={<Shield className="text-primary-500" />} 
              title="Security First" 
              value="24/7" 
              description="Monitoring" 
            />
          </div>
        </div>
        
        <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <h3 className="text-2xl font-bold mb-4 text-primary-700">Why Choose Us?</h3>
          
          <ul className="space-y-4">
            <FeatureItem text="AWS expertise with certified solutions architects and DevOps engineers" />
            <FeatureItem text="End-to-end development capabilities from infrastructure to user interfaces" />
            <FeatureItem text="CI/CD pipeline automation that reduces deployment times by up to 80%" />
            <FeatureItem text="Containerized solutions for efficient resource utilization and scaling" />
            <FeatureItem text="Infrastructure as Code (IaC) practices for consistent environments" />
            <FeatureItem text="24/7 support and monitoring for mission-critical applications" />
          </ul>
        </div>
      </div>

      <div className="mt-20">
        <h3 className="text-2xl font-bold text-center mb-12 text-primary-700">Meet Our Expert Team</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} onClick={() => openModal(member)} />
          ))}
        </div>
      </div>

      {selectedMember && (
        <TeamMemberModal member={selectedMember} onClose={closeModal} />
      )}
    </section>
  );
};

const StatsCard = ({ 
  icon, 
  title, 
  value, 
  description 
}: { 
  icon: React.ReactNode; 
  title: string; 
  value: string; 
  description: string; 
}) => (
  <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
    <div className="flex items-center mb-2">
      {icon}
      <h4 className="text-sm font-medium text-gray-500 ml-2">{title}</h4>
    </div>
    <p className="text-2xl font-bold text-primary-800">{value}</p>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);

const FeatureItem = ({ text }: { text: string }) => (
  <li className="flex items-start">
    <CheckCircle2 className="h-5 w-5 text-primary-500 mt-0.5 mr-2 flex-shrink-0" />
    <span className="text-gray-700">{text}</span>
  </li>
);

interface TeamMemberCardProps {
  member: typeof teamMembers[0];
  onClick: () => void;
}

const TeamMemberCard = ({ member, onClick }: TeamMemberCardProps) => (
  <div 
    className="card card-hover cursor-pointer group" 
    onClick={onClick}
  >
    <div className="aspect-square overflow-hidden relative">
      <img 
        src={member.image} 
        alt={member.name}
        className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
        <div className="p-4 text-white">
          <p className="font-medium">View Profile</p>
        </div>
      </div>
    </div>
    <div className="p-4">
      <h4 className="font-bold text-gray-900">{member.name}</h4>
      <p className="text-primary-600 text-sm">{member.position}</p>
    </div>
  </div>
);

export default About;