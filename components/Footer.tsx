'use client'

import Image from 'next/image'

export default function Footer() {
  return (
    <section className="section footer">
      <div className="container">
        <div data-figma-id="229:1559" className="footer-content">
          <div data-figma-id="226:794" className="footer-info">
            <div style={{ marginBottom: '32px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Image 
                src="/asset/images/tisya-logo.png" 
                alt="Tisya AI Logo" 
                width={48}
                height={48}
              />
              <div className="display-h4" style={{ margin: 0 }}>Tisya AI</div>
            </div>
            <div className="subscribe-form-wrap w-form">
              <div className="subscribe-heading">
                <div className="display-h4">Stay updated with Tisya AI</div>
                <div className="paragraph t---neutral-10">
                  Subscribe to our newsletter for the latest insights on AI,
                  technology, and digital transformation.
                </div>
              </div>
              <form
                method="get"
                name="wf-form-Subscribe-Form"
                data-name="Subscribe Form"
                className="inline-form"
              >
                <div
                  id="w-node-_6bb712f4-c2b0-7df5-eea4-da8aab6164bd-000c7cc3"
                  className="field-wrap"
                >
                  <input
                    className="text-input subscribe w-input"
                    maxLength={256}
                    name="Email-address"
                    data-name="Email address"
                    placeholder="name@email.com"
                    type="email"
                    required
                  />
                </div>
                <input
                  type="submit"
                  data-wait="Please wait..."
                  id="w-node-_6bb712f4-c2b0-7df5-eea4-da8aab6164c0-000c7cc3"
                  className="filled-button w-button"
                  value="Subscribe"
                />
              </form>
              <div className="success-message w-form-done">
                <div className="paragraph">
                  Your subscription is confirmed. Thank you!
                </div>
              </div>
              <div className="error-message display-h4 w-form-fail">
                <div className="paragraph">
                  Oops! Something went wrong while submitting the form. Please
                  try again.
                </div>
              </div>
            </div>
            <div className="footer-nav-block">
              <div className="nav-header">
                <div className="icon m w-embed">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M232.49,160.49l-48,48a12,12,0,0,1-17-17L195,164H128A108.12,108.12,0,0,1,20,56a12,12,0,0,1,24,0,84.09,84.09,0,0,0,84,84h67l-27.52-27.51a12,12,0,0,1,17-17l48,48A12,12,0,0,1,232.49,160.49Z"></path>
                  </svg>
                </div>
                <div className="display-h6">Company</div>
              </div>
              <div className="footer-nav-menu">
                <a href="/" className="navbar-link footer w-inline-block">
                  <div className="nav footer">Home</div>
                </a>
                <a href="/about" className="navbar-link footer w-inline-block">
                  <div className="nav footer">About Us</div>
                </a>
                <a href="/#feature" className="navbar-link footer w-inline-block">
                  <div className="nav footer">Services</div>
                </a>
                <a href="/#pricing" className="navbar-link footer w-inline-block">
                  <div className="nav footer">Pricing</div>
                </a>
                <a href="/#contact" className="navbar-link footer w-inline-block">
                  <div className="nav footer">Contact</div>
                </a>
              </div>
            </div>
          </div>
          <div className="footer-contact-copyrights">
            <div className="footer-contact">
              <div className="social-icons">
                <a
                  href="https://twitter.com/tisyaai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-wrap w-inline-block"
                >
                  <div className="social-icon w-embed">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M214.75,211.71l-62.6-98.38,61.77-67.95a8,8,0,0,0-11.84-10.76L143.24,99.34,102.75,35.71A8,8,0,0,0,96,32H48a8,8,0,0,0-6.75,12.3l62.6,98.37-61.77,68a8,8,0,1,0,11.84,10.76l58.84-64.72,40.49,63.63A8,8,0,0,0,160,224h48a8,8,0,0,0,6.75-12.29ZM164.39,208,62.57,48h29L193.43,208Z"></path>
                    </svg>
                  </div>
                </a>
                <a
                  href="https://instagram.com/tisyaai"
                  target="_blank"
                  rel="noopener noreferrer"                  aria-label="Instagram"                  className="social-icon-wrap w-inline-block"
                >
                  <div className="social-icon w-embed">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path>
                    </svg>
                  </div>
                </a>
                <a
                  href="https://linkedin.com/company/tisyaai"
                  target="_blank"
                  rel="noopener noreferrer"                  aria-label="LinkedIn"                  className="social-icon-wrap w-inline-block"
                >
                  <div className="social-icon w-embed">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path>
                    </svg>
                  </div>
                </a>
              </div>
              <div className="display-h1">tisya.ai@outlook.com</div>
            </div>
            <div data-figma-id="226:806" className="footer-copyrights">
              <p data-figma-id="226:807" className="paragraph">
                © 2025 Tisya AI. All rights reserved.
              </p>
              <p className="paragraph">
                Sikkim, India | Transforming businesses with AI & technology
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
