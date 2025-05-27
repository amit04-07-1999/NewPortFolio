import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init('7jI6GN8xhgLVoZN4m');
    // console.log('EmailJS initialized');
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
    // console.log('Form submitted', formData);
    setStatus({ submitting: true, submitted: false, error: null });

    try {
    //   console.log('Sending email...');
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'ameykumar76@gmail.com',
        reply_to: formData.email
      };

    //   console.log('Template params:', templateParams);

      const response = await emailjs.send(
        'service_g5tkgvh',
        'template_ui5fr9i',
        templateParams,
        '7jI6GN8xhgLVoZN4m'
      );

    //   console.log('Email sent successfully:', response);
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
              className="w-full bg-transparent border border-purple-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 
                focus:outline-none focus:border-purple-500 transition-all duration-300
                group-hover:border-purple-500/50"
              placeholder="Your Name"
            />
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 
              group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </div>

          {/* Email Input */}
          <div className="relative group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-transparent border border-purple-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 
                focus:outline-none focus:border-purple-500 transition-all duration-300
                group-hover:border-purple-500/50"
              placeholder="Your Email"
            />
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 
              group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
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
            className="w-full bg-transparent border border-purple-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 
              focus:outline-none focus:border-purple-500 transition-all duration-300
              group-hover:border-purple-500/50"
            placeholder="Subject"
          />
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 
            group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
        </div>

        {/* Message Input */}
        <div className="relative group">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            className="w-full bg-transparent border border-purple-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 
              focus:outline-none focus:border-purple-500 transition-all duration-300 resize-none
              group-hover:border-purple-500/50"
            placeholder="Your Message"
          ></textarea>
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 
            group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            disabled={status.submitting}
            onClick={() => console.log('Button clicked')}
            className="group relative px-8 py-4 bg-transparent overflow-hidden rounded-full inline-flex items-center 
              transform transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:hover:scale-100
              cursor-pointer z-10"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-70 group-hover:opacity-100 transition-all duration-300"></span>
            <span className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,0,255,0.4),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
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
          <div className="text-center text-green-400 bg-green-400/10 rounded-lg px-4 py-3 animate-fade-in">
            Message sent successfully! I'll get back to you soon.
          </div>
        )}
        {status.error && (
          <div className="text-center text-red-400 bg-red-400/10 rounded-lg px-4 py-3 animate-fade-in">
            {status.error}
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm; 