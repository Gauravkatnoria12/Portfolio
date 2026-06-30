import React, { useState } from 'react';
import { Send, Mail, MapPin, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';
    
    try {
      const response = await fetch(`${API_URL}/contact/Add`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          Message: formData.message,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit message to the backend API');
      }

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(null), 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
      setTimeout(() => setStatus(null), 5000);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="pt-36 pb-24 md:pt-48 px-6 md:px-12 lg:px-24 max-w-5xl mx-auto border-t border-neutral-200/50 dark:border-neutral-800/40">
      <div className="grid md:grid-cols-5 gap-12 md:gap-20">
        
        {/* Left Column: Info & Details */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="md:col-span-2 space-y-10"
        >
          <div>
            <h2 className="text-3xl font-normal text-gray-900 dark:text-white mb-5 tracking-tight">
              ✦ &nbsp; Get in Touch
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed">
              Have a project in mind, want to collaborate, or just want to say hi? Drop me a message, and I'll get back to you as soon as possible.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4 group cursor-default">
              <div className="w-12 h-12 rounded-2xl bg-white border-[2.5px] border-white shadow-md flex items-center justify-center text-gray-700 dark:text-neutral-200 dark:bg-neutral-900 dark:border-neutral-800 transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg">
                <Mail size={18} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-gray-400 dark:text-gray-500 font-medium mb-0.5">Email</p>
                <a href="mailto:hello@gaurav.com" className="text-base font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">
                  hello@gaurav.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 group cursor-default">
              <div className="w-12 h-12 rounded-2xl bg-white border-[2.5px] border-white shadow-md flex items-center justify-center text-gray-700 dark:text-neutral-200 dark:bg-neutral-900 dark:border-neutral-800 transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg">
                <MapPin size={18} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-gray-400 dark:text-gray-500 font-medium mb-0.5">Location</p>
                <p className="text-base font-medium text-gray-700 dark:text-gray-300">
                  Delhi, India
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Interactive Form */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="md:col-span-3 relative"
        >
          <img 
            src="/shiro.png" 
            alt="Shiro" 
            className="absolute bottom-full right-6 w-20 h-auto pointer-events-none translate-y-[20px] z-10"
          />
          
          <form 
            onSubmit={handleSubmit} 
            className="space-y-4 bg-white dark:bg-neutral-900/60 border-[2.5px] border-white dark:border-neutral-850 p-6 md:p-8 rounded-3xl shadow-xl dark:shadow-none"
          >
            <div className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Name"
                className="w-full px-4 py-3.5 bg-neutral-50 dark:bg-neutral-950 border border-neutral-200/50 dark:border-neutral-800 rounded-2xl text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:border-white dark:focus:border-white focus:ring-4 focus:ring-neutral-100 dark:focus:ring-white/20 transition-all duration-300 text-sm"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Email"
                className="w-full px-4 py-3.5 bg-neutral-50 dark:bg-neutral-950 border border-neutral-200/50 dark:border-neutral-800 rounded-2xl text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:border-white dark:focus:border-white focus:ring-4 focus:ring-neutral-100 dark:focus:ring-white/20 transition-all duration-300 text-sm"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                placeholder="Message"
                className="w-full px-4 py-3.5 bg-neutral-50 dark:bg-neutral-950 border border-neutral-200/50 dark:border-neutral-800 rounded-2xl text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:border-white dark:focus:border-white focus:ring-4 focus:ring-neutral-100 dark:focus:ring-white/20 transition-all duration-300 text-sm resize-none"
              />
            </div>

            {status === 'error' && (
              <p className="text-red-500 text-sm text-center font-medium">
                Failed to send message. Please try again.
              </p>
            )}

            <button
              type="submit"
              disabled={status === 'sending' || status === 'success'}
              className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-neutral-900 hover:bg-black dark:bg-white dark:hover:bg-neutral-100 text-white dark:text-neutral-950 rounded-2xl font-medium text-md transition-all duration-300 disabled:opacity-50 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
            >
              {status === 'sending' ? (
                <span>Sending...</span>
              ) : status === 'success' ? (
                <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-500">
                  <CheckCircle size={16} /> Sent Successfully
                </span>
              ) : (
                <>
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;