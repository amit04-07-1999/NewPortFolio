import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/portfolio.css';
import PageBackground from '../context/PageBackground';
import AnimatedCube from '../context/AnimatedCube';

const ContactForm = () => {
  const infoRef = useRef(null);
  const formRef = useRef(null);

  /* ── EmailJS init ── */
  useEffect(() => {
    emailjs.init('7jI6GN8xhgLVoZN4m');
  }, []);

  /* ── Scroll-reveal (mirrors Services / Projects / Experience) ── */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('ct-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    [infoRef.current, formRef.current].forEach((el) => { if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  /* ── Form state ── */
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState({ submitting: false, submitted: false, error: null });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });
    try {
      await emailjs.send(
        'service_g5tkgvh',
        'template_ui5fr9i',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'ameykumar76@gmail.com',
          reply_to: formData.email,
        },
        '7jI6GN8xhgLVoZN4m'
      );
      setStatus({ submitting: false, submitted: true, error: null });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus(prev => ({ ...prev, submitted: false })), 5000);
    } catch (err) {
      console.error('Email sending failed:', err);
      setStatus({ submitting: false, submitted: false, error: 'Failed to send message. Please try again.' });
    }
  };

  /* ── Contact details ── */
  const DETAILS = [
    {
      label: 'Email',
      value: 'ameykumar76@gmail.com',
      href: 'mailto:ameykumar76@gmail.com',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
        </svg>
      ),
    },
    {
      label: 'WhatsApp',
      value: '+91 9315264682',
      href: 'https://wa.me/919315264682',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      ),
    },
    {
      label: 'Location',
      value: 'New Delhi, India',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
        </svg>
      ),
    },
    {
      label: 'Availability',
      value: 'Open to opportunities',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
        </svg>
      ),
    },
  ];

  /* ── Social links ── */
  const SOCIALS = [
    {
      name: 'GitHub',
      href: 'https://github.com/amit04-07-1999',
      icon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/amitkumaryadav1999',
      icon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" />
        </svg>
      ),
    },
    // {
    //   name: 'WhatsApp',
    //   href: 'https://wa.me/919315264682',
    //   icon: (
    //     <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    //       <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    //     </svg>
    //   ),
    // },
  ];

  return (
    <section className="ct-root" id="contact">

      {/* ── Shared background layers ── */}
      <PageBackground hatchTR hatchBL />

      <AnimatedCube
        style={{ top: '80px', right: '5%' }}
        size={240}
        cubeSize={90}
        innerSize={50}
        floatDir="down"
        floatDuration="12s"
        spinDuration="20s"
        zIndex={1}
      />

      <AnimatedCube
        style={{ bottom: '100px', left: '5%' }}
        size={200}
        cubeSize={80}
        innerSize={45}
        floatDir="up"
        floatDuration="10s"
        spinDuration="15s"
        zIndex={1}
      />

      {/* ── Ghost outline text ── */}
      <div className="ct-ghost-wrap" aria-hidden="true">
        <span className="ct-ghost-text">CONTACT</span>
      </div>

      {/* ── Content ── */}
      <div className="ct-inner">

        {/* Header */}
        <div className="ct-header">
          <p className="ct-label cursor-target">Get In Touch</p>
          <h2 className="ct-title cursor-target">CONTACT ME</h2>
          <div className="ct-title-line" />
          <p className="ct-desc cursor-target">
            Have a project in mind or want to collaborate? I'd love to hear from you.
            Drop a message and I'll get back to you as soon as possible.
          </p>
        </div>

        {/* Two-column body */}
        <div className="ct-body">

          {/* ── Left: Info card ── */}
          <div className="ct-info-card cursor-target" ref={infoRef}>

            {/* Services-style icon */}
            <div className="ct-contact-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
              </svg>
            </div>

            <h3 className="ct-info-heading cursor-target">Let's Talk</h3>
            <div className="ct-info-divider" />

            <p className="ct-info-text cursor-target">
              I'm currently available for freelance projects and full-time roles.
              Whether it's a quick question or a detailed proposal, feel free to reach out!
            </p>

            {/* Contact detail rows */}
            <ul className="ct-details cursor-target">
              {DETAILS.map((d, i) => (
                <li key={i} className="ct-detail-item">
                  <div className="ct-detail-icon">{d.icon}</div>
                  <div className="ct-detail-content">
                    <span className="ct-detail-label">{d.label}</span>
                    {d.href ? (
                      <a href={d.href} target="_blank" rel="noopener noreferrer" className="ct-detail-value ct-link">
                        {d.value}
                      </a>
                    ) : (
                      <span className="ct-detail-value">{d.value}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            {/* Social links */}
            <div className="ct-socials cursor-target">
              {SOCIALS.map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className="ct-social-btn">
                  {s.icon}
                  {s.name}
                </a>
              ))}
            </div>

            {/* Ghost number */}
            {/* <span className="ct-card-num" aria-hidden="true">01</span> */}
          </div>

          {/* ── Right: Form card ── */}
          <div className="ct-form-card cursor-target" ref={formRef}>
            {/* Hatch stripe — top-right corner (matches sv-card-stripe) */}
            <div className="ct-form-stripe" aria-hidden="true" />

            <h3 className="ct-form-title cursor-target">Send a Message</h3>
            <div className="ct-form-divider" />

            <form onSubmit={handleSubmit} className="ct-form">

              {/* Name + Email */}
              <div className="ct-row">
                <div className="ct-field cursor-target">
                  <label className="ct-field-label" htmlFor="ct-name">Your Name</label>
                  <input
                    id="ct-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="ct-input"
                    placeholder="Amit Kumar"
                  />
                </div>
                <div className="ct-field cursor-target">
                  <label className="ct-field-label" htmlFor="ct-email">Email Address</label>
                  <input
                    id="ct-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="ct-input"
                    placeholder="amit@example.com"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="ct-field cursor-target">
                <label className="ct-field-label" htmlFor="ct-subject">Subject</label>
                <input
                  id="ct-subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="ct-input"
                  placeholder="Project Collaboration / Job Opportunity"
                />
              </div>

              {/* Message */}
              <div className="ct-field cursor-target">
                <label className="ct-field-label" htmlFor="ct-message">Message</label>
                <textarea
                  id="ct-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="ct-textarea"
                  placeholder="Tell me about your project or idea..."
                />
              </div>

              {/* Submit */}
              <button type="submit" disabled={status.submitting} className="ct-submit-btn">
                {status.submitting ? 'Sending…' : 'Send Message'}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>

              {/* Status messages */}
              {status.submitted && (
                <div className="ct-status success">
                  ✓ Message sent successfully! I'll get back to you soon.
                </div>
              )}
              {status.error && (
                <div className="ct-status error">
                  ✕ {status.error}
                </div>
              )}
            </form>

            {/* Ghost number */}
            {/* <span className="ct-card-num" aria-hidden="true">02</span> */}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;