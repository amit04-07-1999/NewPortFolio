import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/portfolio.css';
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
    {
      name: 'WhatsApp',
      href: 'https://wa.me/919315264682',
      icon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      ),
    },
    {
      name: 'Resume',
      href: '/Resume.pdf',
      icon: (
        <svg viewBox="0 0 512 512" width="14" height="14" fill="currentColor">
          <path d="M347.746,346.204c-8.398-0.505-28.589,0.691-48.81,4.533c-11.697-11.839-21.826-26.753-29.34-39.053 c24.078-69.232,8.829-88.91-11.697-88.91c-16.119,0-24.167,17.011-22.376,35.805c0.906,9.461,8.918,29.34,18.78,48.223 c-6.05,15.912-16.847,42.806-27.564,62.269c-12.545,3.812-23.305,8.048-31.027,11.622c-38.465,17.888-41.556,41.773-33.552,51.894 c15.197,19.226,47.576,2.638,80.066-55.468c22.243-6.325,51.508-14.752,54.146-14.752c0.304,0,0.721,0.097,1.204,0.253 c16.215,14.298,35.366,30.67,51.128,32.825c22.808,3.136,35.791-13.406,34.891-23.692 C382.703,361.461,376.691,347.942,347.746,346.204z M203.761,408.88c-9.401,11.178-24.606,21.9-29.972,18.334 c-5.373-3.574-6.265-13.86,5.819-25.497c12.076-11.623,32.29-17.657,35.329-18.787c3.59-1.337,4.482,0,4.482,1.791 C219.419,386.512,213.154,397.689,203.761,408.88z M244.923,258.571c-0.899-11.192,1.33-21.922,10.731-23.26 c9.386-1.352,13.868,9.386,10.292,26.828c-3.582,17.464-5.38,29.08-7.164,30.44c-1.79,1.338-3.567-3.144-3.567-3.144 C251.627,282.27,245.815,269.748,244.923,258.571z M248.505,363.697c4.912-8.064,17.442-40.702,17.442-40.702 c2.683,4.926,23.699,29.956,23.699,29.956S257.438,360.123,248.505,363.697z M345.999,377.995 c-13.414-1.768-36.221-17.895-36.221-17.895c-3.128-1.337,24.992-5.157,35.79-4.466c13.875,0.9,18.794,6.718,18.794,12.53 C364.362,373.982,359.443,379.787,345.999,377.995z" />
          <path d="M461.336,107.66l-98.34-98.348L353.683,0H340.5H139.946C92.593,0,54.069,38.532,54.069,85.901v6.57H41.353 v102.733h12.716v230.904c0,47.361,38.525,85.893,85.878,85.893h244.808c47.368,0,85.893-38.532,85.893-85.893V130.155v-13.176 L461.336,107.66z M384.754,480.193H139.946c-29.875,0-54.086-24.212-54.086-54.086V195.203h157.31V92.47H85.86v-6.57 c0-29.882,24.211-54.102,54.086-54.102H332.89v60.894c0,24.888,20.191,45.065,45.079,45.065h60.886v288.349 C438.855,455.982,414.636,480.193,384.754,480.193z M88.09,166.086v-47.554c0-0.839,0.683-1.524,1.524-1.524h15.108 c2.49,0,4.786,0.409,6.837,1.212c2.029,0.795,3.812,1.91,5.299,3.322c1.501,1.419,2.653,3.144,3.433,5.121 c0.78,1.939,1.182,4.058,1.182,6.294c0,2.282-0.402,4.414-1.19,6.332c-0.78,1.918-1.932,3.619-3.418,5.054 c-1.479,1.427-3.27,2.549-5.321,3.329c-2.036,0.78-4.332,1.174-6.822,1.174h-6.376v17.241c0,0.84-0.683,1.523-1.523,1.523h-7.208 C88.773,167.61,88.09,166.926,88.09,166.086z M134.685,166.086v-47.554c0-0.839,0.684-1.524,1.524-1.524h16.698 c3.173,0,5.968,0.528,8.324,1.568c2.386,1.062,4.518,2.75,6.347,5.009c0.944,1.189,1.694,2.504,2.236,3.916 c0.528,1.375,0.929,2.862,1.189,4.407c0.253,1.531,0.401,3.181,0.453,4.957c0.045,1.694,0.067,3.515,0.067,5.447 c0,1.924-0.022,3.746-0.067,5.44c-0.052,1.769-0.2,3.426-0.453,4.964c-0.26,1.546-0.661,3.025-1.189,4.399 c-0.55,1.427-1.3,2.743-2.23,3.909c-1.842,2.282-3.976,3.969-6.354,5.016c-2.334,1.04-5.135,1.568-8.324,1.568h-16.698 C135.368,167.61,134.685,166.926,134.685,166.086z M214.269,137.981c0.84,0,1.523,0.684,1.523,1.524v6.48 c0,0.84-0.683,1.524-1.523,1.524h-18.244v18.579c0,0.84-0.684,1.523-1.524,1.523h-7.209c-0.84,0-1.523-0.683-1.523-1.523v-47.554 c0-0.839,0.683-1.524,1.523-1.524h27.653c0.839,0,1.524,0.684,1.524,1.524v6.48c0,0.84-0.684,1.524-1.524,1.524h-18.92v11.444 H214.269z" />
          <path d="M109.418,137.706c1.212-1.092,1.798-2.645,1.798-4.749c0-2.096-0.587-3.649-1.798-4.741 c-1.263-1.13-2.928-1.68-5.098-1.68h-5.975v12.848h5.975C106.489,139.385,108.155,138.836,109.418,137.706z" />
          <path d="M156.139,157.481c1.13-0.424,2.103-1.107,2.973-2.088c0.944-1.055,1.538-2.571,1.769-4.511 c0.26-2.208,0.386-5.091,0.386-8.569c0-3.485-0.126-6.369-0.386-8.569c-0.231-1.946-0.825-3.462-1.762-4.51 c-0.869-0.982-1.873-1.679-2.972-2.089c-1.182-0.453-2.534-0.676-4.042-0.676h-7.164v31.68h7.164 C153.605,158.15,154.965,157.927,156.139,157.481z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="ct-root" id="contact">

      {/* ── Background: Global (removed local) ── */}

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