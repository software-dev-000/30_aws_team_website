import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      // Reset submitted state after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section 
      id="contact" 
      className="section pt-24 pb-32 relative"
      style={{
        background: 'linear-gradient(135deg, #0B2447 0%, #19376D 100%)',
      }}
    >
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:20px_20px]"></div>
      
      <div className="section-heading text-white relative z-10">
        <h2 className="section-title text-white">Get In Touch</h2>
        <p className="section-subtitle text-blue-100">
          Have a project in mind or want to learn more about our services? Reach out to us today.
        </p>
      </div>

      <div className="max-w-6xl mx-auto mt-16 grid grid-cols-1 lg:grid-cols-5 gap-12 relative z-10">
        <div className="lg:col-span-2 text-white">
          <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
          
          <div className="space-y-6 mb-8">
            <ContactInfoItem 
              icon={<Mail />} 
              title="Email Us" 
              detail="info@buildops.tech" 
              link="mailto:info@buildops.tech" 
            />
            <ContactInfoItem 
              icon={<Phone />} 
              title="Call Us" 
              detail="+1 (555) 123-4567" 
              link="tel:+15551234567" 
            />
            <ContactInfoItem 
              icon={<MapPin />} 
              title="Visit Us" 
              detail="123 Tech Street, Silicon Valley, CA 94043" 
              link="https://maps.google.com" 
            />
            <ContactInfoItem 
              icon={<MessageSquare />} 
              title="Support" 
              detail="support@buildops.tech" 
              link="mailto:support@buildops.tech" 
            />
          </div>
          
          <div className="p-6 rounded-lg glass-effect bg-blue-700 backdrop-blur-md border border-white/20">
            <h4 className="font-bold mb-2">Office Hours</h4>
            <p className="text-blue-100 mb-4">We're available to answer your questions and provide support during our business hours:</p>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between">
                <span>Monday - Friday</span>
                <span className="font-medium">9:00 AM - 6:00 PM PST</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span className="font-medium">10:00 AM - 2:00 PM PST</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="font-medium">Closed</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="lg:col-span-3">
          <div className="bg-white rounded-xl shadow-xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Send Us a Message</h3>
            
            {submitted ? (
              <div className="bg-success-50 border border-success-200 rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-success-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckIcon className="w-8 h-8 text-success-600" />
                </div>
                <h4 className="text-xl font-bold text-success-800 mb-2">Message Sent!</h4>
                <p className="text-success-700">
                  Thank you for reaching out. We'll get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name <span className="text-error-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address <span className="text-error-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                      placeholder="johndoe@example.com"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject <span className="text-error-500">*</span>
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors appearance-none bg-white"
                  >
                    <option value="" disabled>Select a subject</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Project Quote">Project Quote</option>
                    <option value="AWS Consulting">AWS Consulting</option>
                    <option value="DevOps Services">DevOps Services</option>
                    <option value="Full Stack Development">Full Stack Development</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message <span className="text-error-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors resize-none"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full btn btn-primary flex items-center justify-center"
                >
                  {submitting ? (
                    <>
                      <Spinner className="animate-spin mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} className="mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

interface ContactInfoItemProps {
  icon: React.ReactNode;
  title: string;
  detail: string;
  link: string;
}

const ContactInfoItem = ({ icon, title, detail, link }: ContactInfoItemProps) => (
  <div className="flex items-start">
    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4 flex-shrink-0">
      {icon}
    </div>
    <div>
      <h4 className="font-medium mb-1">{title}</h4>
      <a 
        href={link} 
        className="text-blue-300 hover:text-blue-100 transition-colors"
      >
        {detail}
      </a>
    </div>
  </div>
);

const CheckIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor" 
    className={className}
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M5 13l4 4L19 7" 
    />
  </svg>
);

const Spinner = ({ className }: { className?: string }) => (
  <svg 
    className={className} 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24"
    width="18"
    height="18"
  >
    <circle 
      className="opacity-25" 
      cx="12" 
      cy="12" 
      r="10" 
      stroke="currentColor" 
      strokeWidth="4"
    />
    <path 
      className="opacity-75" 
      fill="currentColor" 
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    />
  </svg>
);

export default Contact;