import React from 'react';
import { Clock, User, ChevronRight } from 'lucide-react';

const posts = [
  {
    id: 1,
    title: 'Implementing GitOps with ArgoCD on Amazon EKS',
    excerpt: 'Learn how to implement GitOps workflows using ArgoCD on Amazon EKS for continuous deployment and infrastructure management.',
    image: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    author: 'Alex Johnson',
    date: 'June 15, 2025',
    readTime: '8 min read',
    category: 'DevOps',
    link: '#'
  },
  {
    id: 2,
    title: 'Securing AWS Infrastructure with IAM Roles and Policies',
    excerpt: 'A comprehensive guide to implementing proper IAM roles, policies, and best practices for securing your AWS infrastructure.',
    image: 'https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    author: 'Maria Rodriguez',
    date: 'May 28, 2025',
    readTime: '10 min read',
    category: 'Security',
    link: '#'
  },
  {
    id: 3,
    title: 'Building Serverless Microservices with AWS Lambda and API Gateway',
    excerpt: 'Discover how to architect and implement serverless microservices using AWS Lambda, API Gateway, and DynamoDB.',
    image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    author: 'David Kim',
    date: 'May 10, 2025',
    readTime: '12 min read',
    category: 'Cloud Architecture',
    link: '#'
  }
];

const Blog = () => {
  return (
    <section id="blog" className="section bg-white">
      <div className="section-heading">
        <h2 className="section-title">Latest Insights</h2>
        <p className="section-subtitle">
          Stay updated with our latest articles, tutorials, and insights on DevOps practices and cloud technologies.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>

      <div className="text-center mt-16">
        <a 
          href="#" 
          className="inline-flex items-center text-primary-600 font-medium hover:text-primary-800"
        >
          View all articles
          <ChevronRight size={16} className="ml-1" />
        </a>
      </div>
    </section>
  );
};

interface BlogCardProps {
  post: typeof posts[0];
}

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <article className="card card-hover h-full flex flex-col">
      <a href={post.link} className="block relative aspect-video overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-0 right-0 bg-primary-600 text-white text-xs font-medium py-1 px-3">
          {post.category}
        </div>
      </a>
      
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex items-center text-xs text-gray-500 mb-3">
          <div className="flex items-center">
            <User size={14} className="mr-1" />
            {post.author}
          </div>
          <span className="mx-2">•</span>
          <div className="flex items-center">
            <Clock size={14} className="mr-1" />
            {post.readTime}
          </div>
        </div>
        
        <h3 className="text-xl font-bold mb-3">
          <a href={post.link} className="text-gray-900 hover:text-primary-700">
            {post.title}
          </a>
        </h3>
        
        <p className="text-gray-600 mb-4 flex-grow">
          {post.excerpt}
        </p>
        
        <a 
          href={post.link} 
          className="mt-4 inline-flex items-center text-primary-600 font-medium hover:text-primary-800"
        >
          Read more
          <ChevronRight size={16} className="ml-1" />
        </a>
      </div>
    </article>
  );
};

export default Blog;