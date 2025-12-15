'use client';

export default function AboutContent() {
  return (
    <>
      {/* About Hero Section */}
      <section className="section hero">
        <div className="container">
          <div className="hero-wrap">
            <div className="hero">
              <div className="hero-intro">
                <div data-w-id="fb183dfb-c60b-169b-83d2-10bc584a7ef6" className="section-indicator">
                  <div className="indicator"></div>
                  <div className="small-paragraph">About Us</div>
                </div>
                <h1 className="display-h1">About Tisya AI</h1>
              </div>
              <div className="paragraph-wrap">
                <p className="large-paragraph t---neutral-10">
                  Empowering businesses with innovative AI solutions and cutting-edge technology to transform ideas into reality.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="header-bg">
          <div className="stripe-left">
            <div className="stripe"></div>
            <div className="stripe"></div>
            <div className="stripe"></div>
            <div className="stripe"></div>
            <div className="stripe"></div>
            <div className="stripe"></div>
            <div className="stripe-left-gradient"></div>
          </div>
          <div className="stripe-right">
            <div className="stripe"></div>
            <div className="stripe"></div>
            <div className="stripe"></div>
            <div className="stripe"></div>
            <div className="stripe"></div>
            <div className="stripe"></div>
            <div className="stripe-right-gradient"></div>
          </div>
          <div className="stripe-gradient"></div>
        </div>
      </section>

      {/* About Content */}
      <section className="section">
        <div className="container centered">
          {/* Company Info - Centered with Animation */}
          <div data-w-id="71a70a0f-4395-10bb-a654-682d054f26a7" style={{ textAlign: 'center', marginBottom: '80px' }}>
            <div
              data-w-id="fb183dfb-c60b-169b-83d2-10bc584a7ef7"
              className="section-indicator"
              style={{ justifyContent: 'center', marginBottom: '30px' }}
            >
              <div className="indicator"></div>
              <div className="small-paragraph">About Us</div>
            </div>
            <h2 data-w-id="84760383-3241-c221-771a-33900488d0df" className="display-h2" style={{ marginBottom: '30px' }}>
              About Tisya AI
            </h2>
            <div data-w-id="42e4baa9-9891-fb60-296f-33f595a3edf7" className="large-paragraph t---neutral-10" style={{ maxWidth: '900px', margin: '0 auto 20px' }}>
              Tisya AI is a forward-thinking technology company specializing in AI-powered solutions, custom software development, and digital transformation. Based in Sikkim, we're dedicated to helping businesses leverage the power of artificial intelligence and modern technology to achieve their goals.
            </div>
            <div data-w-id="1567ae63-759c-8e83-3eb8-a809b1c6d867" className="paragraph t---neutral-10" style={{ maxWidth: '800px', margin: '0 auto' }}>
              Our mission is to bridge the gap between complex technology and practical business solutions, making advanced AI and software development accessible to businesses of all sizes.
            </div>
          </div>

          {/* Info Cards Grid - Three Boxes in One Line */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px', marginBottom: '80px' }} className="info-cards-grid">
            <div data-w-id="4fde0941-2d4c-bc46-8fa2-a624e2bfa163" className="info-card">
              <div className="icon w-embed">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM172.42,72.84l-64,32a8.05,8.05,0,0,0-3.58,3.58l-32,64A8,8,0,0,0,80,184a8.1,8.1,0,0,0,3.58-.84l64-32a8.05,8.05,0,0,0,3.58-3.58l32-64a8,8,0,0,0-10.74-10.74ZM138,138,97.89,158.11,118,118l40.15-20.07Z"></path>
                </svg>
              </div>
              <h3 className="display-h6" style={{ marginBottom: '15px' }}>Our Location</h3>
              <p className="paragraph t---neutral-10">
                Sikkim Manipal Institute of Technology<br />
                Majitar, Sikkim<br />
                India
              </p>
            </div>

            <div data-w-id="4fde0941-2d4c-bc46-8fa2-a624e2bfa164" className="info-card">
              <div className="icon w-embed">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46ZM176,208A128.14,128.14,0,0,1,48,80,40.2,40.2,0,0,1,82.87,40a.61.61,0,0,0,0,.12l21,47L83.2,111.86a6.13,6.13,0,0,0-.57.77,16,16,0,0,0-1,15.7c9.06,18.53,27.73,37.06,46.46,46.11a16,16,0,0,0,15.75-1.14,8.44,8.44,0,0,0,.74-.56L168.89,152l47,21.05h0s.08,0,.11,0A40.21,40.21,0,0,1,176,208Z"></path>
                </svg>
              </div>
              <h3 className="display-h6" style={{ marginBottom: '15px' }}>Contact Us</h3>
              <p className="paragraph t---neutral-10">
                <strong>Email:</strong><br />
                <a href="mailto:tisya.ai@hotmail.com" style={{ color: '#8b5cf6', textDecoration: 'none' }}>tisya.ai@hotmail.com</a><br /><br />
                <strong>Phone:</strong><br />
                <a href="tel:+919647408802" style={{ color: '#8b5cf6', textDecoration: 'none' }}>+91 9647408802</a>
              </p>
            </div>

            <div data-w-id="4fde0941-2d4c-bc46-8fa2-a624e2bfa165" className="info-card">
              <div className="icon w-embed">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,16V98.71l-29.27,29.27a16,16,0,0,1-22.63,0L128,91.88,91.88,128a16,16,0,0,1-22.63,0L40,98.71V56ZM40,200V122.48l32.34,32.34a32,32,0,0,0,45.26,0L148.88,123.54l31.46,31.46a32,32,0,0,0,45.26,0L216,122.48V200Z"></path>
                </svg>
              </div>
              <h3 className="display-h6" style={{ marginBottom: '15px' }}>Business Hours</h3>
              <p className="paragraph t---neutral-10">
                Monday - Friday<br />
                9:00 AM - 6:00 PM IST<br /><br />
                Saturday - Sunday<br />
                By Appointment
              </p>
            </div>
          </div>

          {/* Founder Section */}
          <div className="founder-card">
            <h2 className="display-h2" style={{ marginBottom: '30px', textAlign: 'center' }}>Meet Our Founder</h2>
            <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
              <div style={{ width: '120px', height: '120px', borderRadius: '50%', background: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)', margin: '0 auto 30px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ fontSize: '48px', fontWeight: 'bold', color: 'white' }}>KL</div>
              </div>
              <h3 className="display-h4" style={{ marginBottom: '10px' }}>Khushi B Lohia</h3>
              <p className="large-paragraph t---neutral-10" style={{ marginBottom: '20px' }}>Founder & CEO</p>
              <p className="paragraph t---neutral-10" style={{ lineHeight: '1.8', marginBottom: '30px' }}>
                Khushi B Lohia is the visionary founder of Tisya AI, bringing passion for technology and innovation to help businesses thrive in the digital age. With expertise in AI solutions and software development, Khushi leads the team in delivering cutting-edge solutions that drive real business value.
              </p>
              <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="mailto:tisya.ai@hotmail.com" className="paragraph" style={{ color: '#8b5cf6', textDecoration: 'none' }}>
                  <strong>📧 tisya.ai@hotmail.com</strong>
                </a>
                <a href="tel:+919647408802" className="paragraph" style={{ color: '#8b5cf6', textDecoration: 'none' }}>
                  <strong>📞 +91 9647408802</strong>
                </a>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div style={{ textAlign: 'center', marginTop: '80px' }}>
            <h2 className="display-h3" style={{ marginBottom: '20px' }}>Ready to Transform Your Business?</h2>
            <div className="paragraph t---neutral-10" style={{ marginBottom: '40px', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
              Let's discuss how Tisya AI can help you leverage the power of technology to achieve your goals.
            </div>
            <a href="/#contact" data-figma-id="156:103" data-wf--primary-button--variant="black" className="primary-button w-inline-block">
              <div className="button-content">
                <p data-figma-id="96:188" className="button-text">Get in Touch</p>
                <div className="button-icon-wrap">
                  <div className="slide-in-icon">
                    <div className="icon w-embed">
                      <svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M28.0613 17.0612L19.0613 26.0612C18.7795 26.343 18.3973 26.5013 17.9988 26.5013C17.6002 26.5013 17.218 26.343 16.9363 26.0612C16.6545 25.7794 16.4961 25.3972 16.4961 24.9987C16.4961 24.6002 16.6545 24.218 16.9363 23.9362L23.375 17.5H5C4.60218 17.5 4.22064 17.3419 3.93934 17.0606C3.65804 16.7793 3.5 16.3978 3.5 16C3.5 15.6022 3.65804 15.2206 3.93934 14.9393C4.22064 14.658 4.60218 14.5 5 14.5H23.375L16.9387 8.05998C16.657 7.77818 16.4986 7.39599 16.4986 6.99747C16.4986 6.59896 16.657 6.21677 16.9387 5.93497C17.2205 5.65318 17.6027 5.49487 18.0012 5.49487C18.3998 5.49487 18.782 5.65318 19.0637 5.93497L28.0637 14.935C28.2036 15.0745 28.3145 15.2403 28.3901 15.4228C28.4657 15.6054 28.5045 15.801 28.5043 15.9986C28.5041 16.1962 28.4648 16.3918 28.3888 16.5741C28.3127 16.7565 28.2014 16.922 28.0613 17.0612Z" fill="currentColor" />
                      </svg>
                    </div>
                  </div>
                  <div className="slide-out-icon">
                    <div className="icon w-embed">
                      <svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M28.0613 17.0612L19.0613 26.0612C18.7795 26.343 18.3973 26.5013 17.9988 26.5013C17.6002 26.5013 17.218 26.343 16.9363 26.0612C16.6545 25.7794 16.4961 25.3972 16.4961 24.9987C16.4961 24.6002 16.6545 24.218 16.9363 23.9362L23.375 17.5H5C4.60218 17.5 4.22064 17.3419 3.93934 17.0606C3.65804 16.7793 3.5 16.3978 3.5 16C3.5 15.6022 3.65804 15.2206 3.93934 14.9393C4.22064 14.658 4.60218 14.5 5 14.5H23.375L16.9387 8.05998C16.657 7.77818 16.4986 7.39599 16.4986 6.99747C16.4986 6.59896 16.657 6.21677 16.9387 5.93497C17.2205 5.65318 17.6027 5.49487 18.0012 5.49487C18.3998 5.49487 18.782 5.65318 19.0637 5.93497L28.0637 14.935C28.2036 15.0745 28.3145 15.2403 28.3901 15.4228C28.4657 15.6054 28.5045 15.801 28.5043 15.9986C28.5041 16.1962 28.4648 16.3918 28.3888 16.5741C28.3127 16.7565 28.2014 16.922 28.0613 17.0612Z" fill="currentColor" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* MSME Certification Section */}
      <section className="section inverse" style={{ padding: '80px 0' }}>
        <div className="container centered">
          <div style={{ textAlign: 'center' }}>
            <div className="section-indicator" style={{ justifyContent: 'center', marginBottom: '30px' }}>
              <div className="indicator"></div>
              <div className="small-paragraph">Certified Business</div>
            </div>
            <h2 className="display-h2" style={{ marginBottom: '20px' }}>MSME Certified Business</h2>
            <p className="large-paragraph t---neutral-10" style={{ maxWidth: '700px', margin: '0 auto 50px' }}>
              We are proud to be a certified Micro, Small and Medium Enterprise (MSME) registered with the Government of India.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '60px', flexWrap: 'wrap', marginTop: '40px' }}>
              {/* MSME Logo */}
              <div style={{ textAlign: 'center' }}>
                <img src="/asset/images/msme-logo.jpeg" alt="MSME Government of India Logo" style={{ maxWidth: '350px', width: '100%', height: 'auto', background: 'white', padding: '20px', borderRadius: '12px' }} />
              </div>

              {/* QR Code */}
              <div style={{ textAlign: 'center' }}>
                <div style={{ background: 'white', padding: '20px', borderRadius: '12px', display: 'inline-block', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
                  <img src="/asset/images/msme-qr.jpg" alt="MSME Verification QR Code" style={{ width: '220px', height: '220px', display: 'block' }} />
                </div>
                <p className="paragraph" style={{ marginTop: '15px', color: 'var(--t---neutral-10)' }}>
                  <strong>Scan to Verify</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="overlay-03"></div>
      </section>

      <style jsx>{`
        .founder-card {
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%);
          border: 1px solid rgba(139, 92, 246, 0.2);
          border-radius: 12px;
          padding: 40px;
          margin-top: 40px;
        }
        .info-card {
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(236, 72, 153, 0.05) 100%);
          border: 1px solid rgba(139, 92, 246, 0.2);
          border-radius: 12px;
          padding: 30px;
          text-align: center;
          transition: all 0.3s ease;
          min-height: 280px;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
        }
        .info-card:hover {
          transform: translateY(-5px);
          border-color: rgba(139, 92, 246, 0.4);
          box-shadow: 0 10px 30px rgba(139, 92, 246, 0.2);
        }
        .info-card .icon {
          width: 48px;
          height: 48px;
          margin: 0 auto 20px;
          color: #8b5cf6;
        }
        @media (max-width: 991px) {
          .info-cards-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .info-card {
            min-height: auto;
          }
        }
        @media (max-width: 767px) {
          .info-cards-grid {
            grid-template-columns: 1fr !important;
          }
          .info-card {
            min-height: auto;
          }
        }
      `}</style>
    </>
  )
}
