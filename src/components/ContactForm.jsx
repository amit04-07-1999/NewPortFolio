import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { useTheme } from '../context/ThemeContext';

const ContactForm = () => {
  const { darkMode } = useTheme();
  
  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init('7jI6GN8xhgLVoZN4m');
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'ameykumar76@gmail.com',
        reply_to: formData.email
      };

      const response = await emailjs.send(
        'service_g5tkgvh',
        'template_ui5fr9i',
        templateParams,
        '7jI6GN8xhgLVoZN4m'
      );

      setStatus({ submitting: false, submitted: true, error: null });
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => {
        setStatus(prev => ({ ...prev, submitted: false }));
      }, 5000);

    } catch (error) {
      console.error('Email sending failed:', error);
      setStatus({ 
        submitting: false, 
        submitted: false, 
        error: 'Failed to send message. Please try again.' 
      });
    }
  };

  const inputClasses = `w-full rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 
    focus:outline-none focus:ring-1 transition-all duration-300
    ${darkMode 
      ? 'bg-gray-800 border-gray-700 focus:border-blue-500 focus:ring-blue-500 group-hover:border-gray-600 text-white placeholder-gray-400' 
      : 'bg-white border-gray-300 focus:border-blue-500 focus:ring-blue-500 group-hover:border-blue-300'
    } border`;

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name Input */}
          <div className="relative group">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className={inputClasses}
              placeholder="Your Name"
            />
          </div>

          {/* Email Input */}
          <div className="relative group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={inputClasses}
              placeholder="Your Email"
            />
          </div>
        </div>

        {/* Subject Input */}
        <div className="relative group">
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className={inputClasses}
            placeholder="Subject"
          />
        </div>

        {/* Message Input */}
        <div className="relative group">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            className={`${inputClasses} resize-none`}
            placeholder="Your Message"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            disabled={status.submitting}
            className={`group relative px-8 py-4 rounded-full inline-flex items-center 
              transform transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:hover:scale-100
              ${darkMode 
                ? 'bg-blue-600 hover:bg-blue-700' 
                : 'bg-blue-500 hover:bg-blue-600'
              } text-white cursor-pointer`}
          >
            <span className="relative flex items-center text-lg font-medium">
              {status.submitting ? 'Sending...' : 'Send Message'}
              <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </button>
        </div>

        {/* Status Messages */}
        {status.submitted && (
          <div className={`text-center rounded-lg px-4 py-3 animate-fade-in ${
            darkMode 
              ? 'text-green-400 bg-green-900/30' 
              : 'text-green-600 bg-green-50'
          }`}>
            Message sent successfully! I'll get back to you soon.
          </div>
        )}
        {status.error && (
          <div className={`text-center rounded-lg px-4 py-3 animate-fade-in ${
            darkMode 
              ? 'text-red-400 bg-red-900/30' 
              : 'text-red-600 bg-red-50'
          }`}>
            {status.error}
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm; 