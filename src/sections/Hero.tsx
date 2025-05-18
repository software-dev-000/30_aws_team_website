import React from 'react';
import { ChevronDown, Server, Cloud, Database, Code } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center text-white pt-20"
      style={{
        background: 'linear-gradient(135deg, #0B2447 0%, #19376D 50%, #576CBC 100%)',
      }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-1/4 left-1/4 animate-float">
          <Server size={64} />
        </div>
        <div className="absolute top-1/3 right-1/4 animate-float" style={{ animationDelay: '1s' }}>
          <Cloud size={80} />
        </div>
        <div className="absolute bottom-1/4 left-1/3 animate-float" style={{ animationDelay: '2s' }}>
          <Database size={60} />
        </div>
        <div className="absolute bottom-1/3 right-1/3 animate-float" style={{ animationDelay: '3s' }}>
          <Code size={70} />
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              DevOps Excellence & Full Stack Engineering
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-2xl">
              Building scalable cloud infrastructure and seamless deployment pipelines on AWS to accelerate your development lifecycle.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#services" className="btn btn-primary">
                Our Services
              </a>
              <a href="#contact" className="btn bg-white/10 backdrop-blur-sm hover:bg-white/20">
                Contact Us
              </a>
            </div>
          </div>
          <div className="relative animate-fade-in hidden lg:block">
            <div className="relative w-full h-96 glass-effect rounded-xl p-6 shadow-xl">
              <pre className="text-blue-200 font-mono text-sm overflow-hidden h-full">
                <code>
{`# AWS Infrastructure as Code
resource "aws_eks_cluster" "buildops_cluster" {
  name     = "buildops-cluster"
  role_arn = aws_iam_role.eks_cluster_role.arn
  
  vpc_config {
    subnet_ids = module.vpc.private_subnets
  }
  
  # Enable EKS Control Plane Logging
  enabled_cluster_log_types = [
    "api",
    "audit",
    "authenticator",
    "controllerManager",
    "scheduler"
  ]
}

# CI/CD Pipeline
pipeline {
  agent {
    kubernetes {
      yaml """
        apiVersion: v1
        kind: Pod
        spec:
          containers:
          - name: buildops-ci
            image: buildops/ci:latest
            command: ['cat']
            tty: true
      """
    }
  }
  
  stages {
    stage('Build') { ... }
    stage('Test') { ... }
    stage('Deploy') { ... }
  }
}`}
                </code>
              </pre>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary-900/80 rounded-xl"></div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-0 right-0 text-center animate-bounce">
          <a href="#about" aria-label="Scroll to About section">
            <ChevronDown size={32} className="mx-auto" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;