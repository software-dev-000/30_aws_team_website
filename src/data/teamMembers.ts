export const teamMembers = [
  {
    id: 1,
    name: 'Michael Chen',
    position: 'Lead DevOps Engineer',
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    bio: 'Michael is a certified AWS DevOps Engineer with over 10 years of experience in cloud infrastructure, CI/CD pipelines, and container orchestration. He specializes in designing and implementing highly scalable and resilient systems using AWS services.',
    skills: ['AWS', 'Kubernetes', 'Terraform', 'Docker', 'Jenkins', 'GitOps', 'Python', 'Go'],
    rating: 5,
    certifications: [
      { name: 'AWS Certified DevOps Engineer - Professional', issuer: 'Amazon Web Services', year: '2023' },
      { name: 'Certified Kubernetes Administrator', issuer: 'Cloud Native Computing Foundation', year: '2022' },
      { name: 'HashiCorp Certified Terraform Associate', issuer: 'HashiCorp', year: '2021' }
    ],
    experience: [
      {
        role: 'Lead DevOps Engineer',
        company: 'BuildOps.tech',
        period: '2022 - Present',
        description: 'Leading a team of DevOps engineers to design and implement cloud infrastructure and CI/CD pipelines for enterprise clients.'
      },
      {
        role: 'Senior DevOps Engineer',
        company: 'CloudTech Solutions',
        period: '2018 - 2022',
        description: 'Implemented and maintained Kubernetes clusters for high-traffic SaaS applications.'
      },
      {
        role: 'Cloud Infrastructure Engineer',
        company: 'DataSphere Inc.',
        period: '2015 - 2018',
        description: 'Managed AWS infrastructure for data processing pipelines handling terabytes of data daily.'
      }
    ],
    projects: [
      {
        name: 'E-commerce Platform Migration',
        description: 'Led the migration of a high-traffic e-commerce platform to AWS, resulting in 40% cost reduction and 99.99% uptime.'
      },
      {
        name: 'Kubernetes Cluster Automation',
        description: 'Developed automated tooling for EKS cluster provisioning and management, reducing setup time from days to minutes.'
      }
    ]
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    position: 'Full Stack Engineer',
    image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    bio: 'Sarah is a full stack developer with expertise in modern JavaScript frameworks and serverless architectures. She has successfully delivered numerous web applications with a focus on performance, user experience, and maintainability.',
    skills: ['React', 'Node.js', 'TypeScript', 'AWS Lambda', 'DynamoDB', 'GraphQL', 'Serverless', 'Next.js'],
    rating: 5,
    certifications: [
      { name: 'AWS Certified Developer - Associate', issuer: 'Amazon Web Services', year: '2023' },
      { name: 'Professional Scrum Developer', issuer: 'Scrum.org', year: '2022' }
    ],
    experience: [
      {
        role: 'Full Stack Engineer',
        company: 'BuildOps.tech',
        period: '2021 - Present',
        description: 'Developing serverless applications and microservices using AWS services and modern JavaScript frameworks.'
      },
      {
        role: 'Frontend Developer',
        company: 'WebApps Inc.',
        period: '2018 - 2021',
        description: 'Built responsive and interactive UIs using React and implemented CI/CD pipelines for frontend deployments.'
      }
    ],
    projects: [
      {
        name: 'Real-time Analytics Dashboard',
        description: 'Developed a real-time dashboard processing millions of events daily with sub-second latency using AWS Lambda and WebSockets.'
      },
      {
        name: 'E-commerce Mobile App',
        description: 'Built a React Native e-commerce app with serverless backend, achieving 4.8/5 rating on app stores.'
      }
    ]
  },
  {
    id: 3,
    name: 'David Rodriguez',
    position: 'Cloud Solutions Architect',
    image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    bio: 'David is a Cloud Solutions Architect with deep expertise in designing scalable, secure, and cost-efficient cloud architectures. He has helped dozens of enterprises modernize their infrastructure and migrate to the cloud.',
    skills: ['AWS', 'Azure', 'Multi-cloud', 'Microservices', 'Serverless', 'Security', 'Cost Optimization', 'Disaster Recovery'],
    rating: 5,
    certifications: [
      { name: 'AWS Certified Solutions Architect - Professional', issuer: 'Amazon Web Services', year: '2023' },
      { name: 'AWS Certified Security - Specialty', issuer: 'Amazon Web Services', year: '2022' },
      { name: 'Microsoft Certified: Azure Solutions Architect Expert', issuer: 'Microsoft', year: '2021' }
    ],
    experience: [
      {
        role: 'Cloud Solutions Architect',
        company: 'BuildOps.tech',
        period: '2020 - Present',
        description: 'Designing enterprise-grade cloud architectures and advising clients on cloud migration strategies.'
      },
      {
        role: 'Senior Cloud Engineer',
        company: 'CloudStrategies LLC',
        period: '2017 - 2020',
        description: 'Implemented multi-cloud solutions for Fortune 500 companies with a focus on security and compliance.'
      },
      {
        role: 'Systems Engineer',
        company: 'Enterprise Solutions Corp.',
        period: '2015 - 2017',
        description: 'Managed on-premises infrastructure and led initial cloud migration projects.'
      }
    ],
    projects: [
      {
        name: 'Financial Services Cloud Migration',
        description: 'Architected the migration of a financial services firm to AWS, ensuring compliance with financial regulations and zero downtime.'
      },
      {
        name: 'Multi-region Disaster Recovery',
        description: 'Designed and implemented a multi-region disaster recovery solution with RPO < 15 minutes and RTO < 1 hour.'
      }
    ]
  },
  {
    id: 4,
    name: 'Priya Patel',
    position: 'Security & DevSecOps Lead',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    bio: 'Priya specializes in security automation and DevSecOps practices. She helps organizations integrate security throughout their CI/CD pipelines and development processes, ensuring that security is built-in rather than bolted on.',
    skills: ['DevSecOps', 'Security Automation', 'Compliance', 'IAM', 'Penetration Testing', 'SAST/DAST', 'AWS Security', 'Threat Modeling'],
    rating: 5,
    certifications: [
      { name: 'Certified Information Systems Security Professional (CISSP)', issuer: 'ISC²', year: '2022' },
      { name: 'AWS Certified Security - Specialty', issuer: 'Amazon Web Services', year: '2023' },
      { name: 'Offensive Security Certified Professional (OSCP)', issuer: 'Offensive Security', year: '2021' }
    ],
    experience: [
      {
        role: 'Security & DevSecOps Lead',
        company: 'BuildOps.tech',
        period: '2021 - Present',
        description: 'Leading security initiatives and implementing DevSecOps practices across client projects and internal infrastructure.'
      },
      {
        role: 'Cloud Security Engineer',
        company: 'SecureCloud Systems',
        period: '2018 - 2021',
        description: 'Implemented security controls and compliance frameworks for AWS and Azure environments.'
      },
      {
        role: 'Security Analyst',
        company: 'CyberDefense Inc.',
        period: '2016 - 2018',
        description: 'Performed security assessments, penetration testing, and vulnerability management for clients.'
      }
    ],
    projects: [
      {
        name: 'Healthcare API Security',
        description: 'Implemented comprehensive security controls for a HIPAA-compliant healthcare API, including encryption, access controls, and audit logging.'
      },
      {
        name: 'CI/CD Security Automation',
        description: 'Developed a security automation framework that integrates vulnerability scanning, secret detection, and compliance checks into CI/CD pipelines.'
      }
    ]
  }
];