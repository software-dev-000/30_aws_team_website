import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';

const categories = ['All', 'Cloud Infrastructure', 'CI/CD', 'Containerization', 'Full Stack', 'DevSecOps'];

const projects = [
  {
    id: 1,
    title: 'E-commerce Platform Migration',
    category: 'Cloud Infrastructure',
    image: 'https://images.pexels.com/photos/4792733/pexels-photo-4792733.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Migrated a high-traffic e-commerce platform to AWS with multi-AZ deployment for 99.99% uptime.',
    tags: ['AWS', 'RDS', 'ElasticCache', 'CloudFront'],
    link: '#'
  },
  {
    id: 2,
    title: 'CI/CD Pipeline for FinTech App',
    category: 'CI/CD',
    image: 'https://images.pexels.com/photos/7148384/pexels-photo-7148384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Built an automated pipeline reducing deployment time from days to minutes with zero-downtime updates.',
    tags: ['Jenkins', 'GitLab CI', 'Docker', 'AWS CodeDeploy'],
    link: '#'
  },
  {
    id: 3,
    title: 'Kubernetes Cluster for SaaS Platform',
    category: 'Containerization',
    image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Implemented EKS cluster for a SaaS platform serving millions of requests daily with auto-scaling.',
    tags: ['Kubernetes', 'EKS', 'Helm', 'Prometheus'],
    link: '#'
  },
  {
    id: 4,
    title: 'Real-time Analytics Dashboard',
    category: 'Full Stack',
    image: 'https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Developed a real-time analytics platform processing terabytes of data with sub-second latency.',
    tags: ['React', 'Node.js', 'Kinesis', 'ElasticSearch'],
    link: '#'
  },
  {
    id: 5,
    title: 'HIPAA-Compliant Healthcare API',
    category: 'DevSecOps',
    image: 'https://images.pexels.com/photos/3912353/pexels-photo-3912353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Built a secure healthcare API with end-to-end encryption and comprehensive compliance controls.',
    tags: ['API Gateway', 'Lambda', 'WAF', 'KMS'],
    link: '#'
  },
  {
    id: 6,
    title: 'Serverless Microservices Architecture',
    category: 'Cloud Infrastructure',
    image: 'https://images.pexels.com/photos/7194439/pexels-photo-7194439.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Designed a cost-efficient serverless architecture reducing infrastructure costs by 60%.',
    tags: ['Lambda', 'API Gateway', 'DynamoDB', 'EventBridge'],
    link: '#'
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="section bg-gray-50">
      <div className="section-heading">
        <h2 className="section-title">Our Portfolio</h2>
        <p className="section-subtitle">
          Explore our successful projects showcasing our expertise in DevOps and full-stack engineering.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full text-sm md:text-base font-medium transition-all ${
              activeCategory === category
                ? 'bg-primary-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <div className="text-center mt-16">
        <a 
          href="#contact" 
          className="btn btn-primary"
        >
          Start Your Project
        </a>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: typeof projects[0];
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="card card-hover overflow-hidden group">
      <div className="relative aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <a
            href={project.link}
            className="bg-white text-primary-600 p-3 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300"
            aria-label="View project"
          >
            <ExternalLink size={20} />
          </a>
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-bold text-gray-900">{project.title}</h3>
          <span className="text-xs font-medium px-2 py-1 bg-primary-100 text-primary-700 rounded-full">
            {project.category}
          </span>
        </div>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;