import React from 'react';
import { 
  Cloud, 
  Server, 
  GitBranch, 
  Database, 
  Code, 
  Shield, 
  BarChart, 
  Workflow 
} from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'AWS Cloud Infrastructure',
    description: 'Design and implementation of scalable, secure, and highly available infrastructure on AWS.',
    icon: <Cloud />,
    features: [
      'VPC architecture with multi-AZ deployments',
      'Auto-scaling and load balancing',
      'Highly available database solutions',
      'Cloud cost optimization',
    ],
  },
  {
    id: 2,
    title: 'CI/CD Pipeline Automation',
    description: 'Streamline your development process with automated testing, building, and deployment.',
    icon: <GitBranch />,
    features: [
      'Jenkins, GitHub Actions, AWS CodePipeline',
      'Automated quality gates and testing',
      'Deployment strategies (Blue/Green, Canary)',
      'Pipeline metrics and monitoring',
    ],
  },
  {
    id: 3,
    title: 'Containerization & Orchestration',
    description: 'Modernize applications with container technologies for improved portability and scaling.',
    icon: <Server />,
    features: [
      'Docker containerization',
      'Kubernetes cluster management',
      'Amazon ECS/EKS deployment',
      'Container registry and security',
    ],
  },
  {
    id: 4,
    title: 'Database Engineering',
    description: 'Design, implement, and optimize database solutions for performance and reliability.',
    icon: <Database />,
    features: [
      'RDS, DynamoDB, Neptune, Redshift',
      'Database migration and replication',
      'Performance tuning and optimization',
      'Backup and recovery strategies',
    ],
  },
  {
    id: 5,
    title: 'Full Stack Development',
    description: 'End-to-end application development with modern frameworks and best practices.',
    icon: <Code />,
    features: [
      'React/Angular/Vue front-end development',
      'Node.js, Python, Java back-end services',
      'RESTful API and GraphQL implementation',
      'Serverless architecture with AWS Lambda',
    ],
  },
  {
    id: 6,
    title: 'DevSecOps',
    description: 'Integrate security at every stage of the software development lifecycle.',
    icon: <Shield />,
    features: [
      'Security as Code implementation',
      'Automated vulnerability scanning',
      'Compliance monitoring (HIPAA, PCI, SOC2)',
      'Incident response automation',
    ],
  },
  {
    id: 7,
    title: 'Monitoring & Observability',
    description: 'Gain insights into application performance and infrastructure health.',
    icon: <BarChart />,
    features: [
      'CloudWatch, Prometheus, Grafana setup',
      'Log aggregation and analysis',
      'Custom dashboards and alerting',
      'Performance metrics and tracing',
    ],
  },
  {
    id: 8,
    title: 'Infrastructure as Code',
    description: 'Manage cloud resources through versioned, reusable code templates.',
    icon: <Workflow />,
    features: [
      'Terraform, CloudFormation, CDK',
      'Modular and reusable infrastructure',
      'State management and drift detection',
      'Multi-environment deployment',
    ],
  },
];

const Services = () => {
  return (
    <section 
      id="services" 
      className="section relative py-24"
      style={{
        background: 'linear-gradient(to bottom, #f3f4f6, #ffffff)',
      }}
    >
      <div className="section-heading">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          Comprehensive DevOps and engineering solutions to accelerate your development and optimize your infrastructure.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-16">
        {services.map((service, index) => (
          <ServiceCard 
            key={service.id} 
            service={service} 
            index={index} 
          />
        ))}
      </div>

      <div className="text-center mt-16">
        <a 
          href="#contact" 
          className="btn btn-primary"
        >
          Discuss Your Project
        </a>
      </div>
    </section>
  );
};

interface ServiceCardProps {
  service: typeof services[0];
  index: number;
}

const ServiceCard = ({ service, index }: ServiceCardProps) => {
  return (
    <div 
      className="card card-hover h-full flex flex-col" 
      style={{ 
        animationDelay: `${index * 0.1}s`,
      }}
    >
      <div className="p-6 flex-grow">
        <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center text-primary-600 mb-4">
          {service.icon}
        </div>
        <h3 className="text-lg font-bold mb-3 text-gray-900">{service.title}</h3>
        <p className="text-gray-600 mb-4">{service.description}</p>
        <ul className="mt-4 space-y-2">
          {service.features.map((feature, i) => (
            <li key={i} className="flex items-center text-sm text-gray-700">
              <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mr-2"></div>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Services;