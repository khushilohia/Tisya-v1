'use client';

import { useState } from 'react';

export default function PricingSection() {
  const [activeTab, setActiveTab] = useState('Tab 2');

  return (
    <section id="pricing" className="section inverse">
      <div className="container">
        <div className="pricing-content-wrap">
          <div className="pricing-header">
            <div data-wf--section-header--variant="left" className="section-header w-variant-4bdb8bca-7bd4-5f1e-e98d-9e2e38ce7001">
              <h2 data-w-id="43e163e0-a4bf-51fc-16fd-fc73e02b5638" className="display-h2">
                Flexible pricing
              </h2>
            </div>
          </div>
          <div
            data-current="Tab 2"
            data-easing="ease"
            data-duration-in="300"
            data-duration-out="100"
            className="pricing-tab w-tabs"
          >
            <div id="w-node-_3253794b-4fc3-5580-4b0c-dcb6ee5c2b4e-6f38eea6" className="tabs-menu w-tab-menu">
              <a
                data-w-tab="Tab 1"
                className={`pricing-menu-item w-inline-block w-tab-link ${activeTab === 'Tab 1' ? 'w--current' : ''}`}
                href="#"
                onClick={(e) => { e.preventDefault(); setActiveTab('Tab 1'); }}
              >
                <div className="pricing-menu-text">
                  <div className="display-h6">Essential Web Presence</div>
                  <div className="small-paragraph t---neutral-10">For small businesses</div>
                </div>
                <div className="pricing-arrow">
                  <div className="icon l w-embed">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm45.66-93.66a8,8,0,0,1,0,11.32l-32,32a8,8,0,0,1-11.32-11.32L148.69,136H88a8,8,0,0,1,0-16h60.69l-18.35-18.34a8,8,0,0,1,11.32-11.32Z"></path>
                    </svg>
                  </div>
                </div>
              </a>
              <a
                data-w-tab="Tab 2"
                data-w-id="3253794b-4fc3-5580-4b0c-dcb6ee5c2b52"
                className={`pricing-menu-item w-inline-block w-tab-link ${activeTab === 'Tab 2' ? 'w--current' : ''}`}
                href="#"
                onClick={(e) => { e.preventDefault(); setActiveTab('Tab 2'); }}
              >
                <div className="pricing-menu-text">
                  <div className="display-h6">Growth & Business Website</div>
                  <div className="small-paragraph t---neutral-10">Most popular</div>
                </div>
                <div className="pricing-arrow">
                  <div className="icon l w-embed">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm45.66-93.66a8,8,0,0,1,0,11.32l-32,32a8,8,0,0,1-11.32-11.32L148.69,136H88a8,8,0,0,1,0-16h60.69l-18.35-18.34a8,8,0,0,1,11.32-11.32Z"></path>
                    </svg>
                  </div>
                </div>
              </a>
              <a
                data-w-tab="Tab 3"
                className={`pricing-menu-item w-inline-block w-tab-link ${activeTab === 'Tab 3' ? 'w--current' : ''}`}
                href="#"
                onClick={(e) => { e.preventDefault(); setActiveTab('Tab 3'); }}
              >
                <div className="pricing-menu-text">
                  <div className="display-h6">AI-Powered Premium Platform</div>
                  <div className="small-paragraph t---neutral-10">For premium brands & SaaS</div>
                </div>
                <div className="pricing-arrow">
                  <div className="icon l w-embed">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm45.66-93.66a8,8,0,0,1,0,11.32l-32,32a8,8,0,0,1-11.32-11.32L148.69,136H88a8,8,0,0,1,0-16h60.69l-18.35-18.34a8,8,0,0,1,11.32-11.32Z"></path>
                    </svg>
                  </div>
                </div>
              </a>
            </div>
            <div id="w-node-_3253794b-4fc3-5580-4b0c-dcb6ee5c2b58-6f38eea6" className="tabs-content w-tab-content">
              <div data-w-tab="Tab 1" className={`tab-panel w-tab-pane ${activeTab === 'Tab 1' ? 'w--tab-active' : ''}`}>
                <div data-w-id="ef76df29-70e6-4353-ec2b-4e036a6fc655" className="pricing-card">
                  <div className="pricing-main">
                    <div className="pricing-heading">
                      <div className="pricing-icon">
                        <div className="icon l w-embed">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                            <path d="M227.32,73.37,182.63,28.69a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H216a8,8,0,0,0,0-16H115.32l112-112A16,16,0,0,0,227.32,73.37ZM136,75.31,152.69,92,68,176.69,51.31,160ZM48,208V179.31L76.69,208Zm48-3.31L79.32,188,164,103.31,180.69,120Zm96-96L147.32,64l24-24L216,84.69Z"></path>
                          </svg>
                        </div>
                      </div>
                      <h3 className="display-h4">Essential Web Presence</h3>
                    </div>
                    <div className="pricing-description">
                      <div className="price">
                        <h4 className="display-h2">₹16,000</h4>
                        <div className="large-paragraph t---neutral-10">one-time + ₹2,000/year</div>
                      </div>
                      <p className="paragraph t---neutral-10">
                        Perfect for small businesses looking to establish their online presence. Up to 5 pages with clean & responsive design.
                      </p>
                    </div>
                  </div>
                  <div className="check-list-wrap">
                    <div className="icon-text">
                      <div className="icon m w-embed">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                          <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path>
                        </svg>
                      </div>
                      <p className="paragraph">Up to 5 pages</p>
                    </div>
                    <div className="icon-text">
                      <div className="icon m w-embed">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                          <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path>
                        </svg>
                      </div>
                      <p className="paragraph">Clean & Responsive UI/UX</p>
                    </div>
                    <div className="icon-text">
                      <div className="icon m w-embed">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                          <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path>
                        </svg>
                      </div>
                      <p className="paragraph">Basic SEO Setup</p>
                    </div>
                    <div className="icon-text">
                      <div className="icon m w-embed">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                          <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path>
                        </svg>
                      </div>
                      <p className="paragraph">Hosting, Database & Maintenance: ₹2,000/month</p>
                    </div>
                    <div className="icon-text">
                      <div className="icon m w-embed">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                          <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path>
                        </svg>
                      </div>
                      <p className="paragraph">Domain: .in ₹800 / .com ₹1,500</p>
                    </div>
                    <div className="icon-text">
                      <div className="icon m w-embed">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                          <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path>
                        </svg>
                      </div>
                      <p className="paragraph">Year 1 Total: ₹20,800 - ₹21,500</p>
                    </div>
                    <p className="small-paragraph" style={{textAlign: 'right', marginTop: '15px', marginRight: '0', width: '100%'}}>*Terms and conditions apply</p>
                  </div>
                </div>
              </div>
              <div data-w-tab="Tab 2" className={`tab-panel w-tab-pane ${activeTab === 'Tab 2' ? 'w--tab-active' : ''}`}>
                <div className="pricing-card">
                  <div className="pricing-main">
                    <div className="pricing-heading">
                      <div className="pricing-icon main">
                        <div className="icon l w-embed">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                            <path d="M247.63,47.89a8,8,0,0,0-7.52-7.52c-51.76-3-93.32,12.74-111.18,42.22-11.8,19.49-11.78,43.16-.16,65.74a71.34,71.34,0,0,0-14.17,27L98.33,159c7.82-16.33,7.52-33.35-1-47.49-13.2-21.79-43.67-33.47-81.5-31.25a8,8,0,0,0-7.52,7.52c-2.23,37.83,9.46,68.3,31.25,81.5A45.82,45.82,0,0,0,63.44,176,54.58,54.58,0,0,0,87,170.33l25,25V224a8,8,0,0,0,16,0V194.51a55.61,55.61,0,0,1,12.27-35,73.91,73.91,0,0,0,33.31,8.4,60.9,60.9,0,0,0,31.83-8.86C234.89,141.21,250.67,99.65,247.63,47.89ZM47.81,155.6C32.47,146.31,23.79,124.32,24,96c28.32-.24,50.31,8.47,59.6,23.81,4.85,8,5.64,17.33,2.46,26.94L61.65,122.34a8,8,0,0,0-11.31,11.31l24.41,24.41C65.14,161.24,55.82,160.45,47.81,155.6Zm149.31-10.22c-13.4,8.11-29.15,8.73-45.15,2l53.69-53.7a8,8,0,0,0-11.31-11.31L140.65,136c-6.76-16-6.15-31.76,2-45.15,13.94-23,47-35.82,89.33-34.83C232.94,98.34,220.14,131.44,197.12,145.38Z"></path>
                          </svg>
                        </div>
                      </div>
                      <h3 className="display-h4">Growth & Business Website</h3>
                    </div>
                    <div className="pricing-description">
                      <div className="price">
                        <h4 className="display-h2">₹34,000</h4>
                        <div className="large-paragraph t---neutral-10">one-time + ₹3,000/year</div>
                      </div>
                      <p className="paragraph t---neutral-10">
                        Ideal for growing businesses needing custom UI/UX and advanced features. Up to 10 pages with advanced admin CMS.
                      </p>
                    </div>
                  </div>
                  <div className="check-list-wrap">
                    <div className="icon-text">
                      <div className="icon m w-embed">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                          <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path>
                        </svg>
                      </div>
                      <p className="paragraph">Up to 10 pages</p>
                    </div>
                    <div className="icon-text">
                      <div className="icon m w-embed">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                          <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path>
                        </svg>
                      </div>
                      <p className="paragraph">Custom UI/UX</p>
                    </div>
                    <div className="icon-text">
                      <div className="icon m w-embed">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                          <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path>
                        </svg>
                      </div>
                      <p className="paragraph">Advanced Admin CMS</p>
                    </div>
                    <div className="icon-text">
                      <div className="icon m w-embed">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                          <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path>
                        </svg>
                      </div>
                      <p className="paragraph">Basic Analytics Dashboard</p>
                    </div>
                    <div className="icon-text">
                      <div className="icon m w-embed">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                          <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path>
                        </svg>
                      </div>
                      <p className="paragraph">Advanced SEO Setup</p>
                    </div>
                    <div className="icon-text">
                      <div className="icon m w-embed">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                          <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path>
                        </svg>
                      </div>
                      <p className="paragraph">Hosting, Database & Maintenance: ₹3,000/year</p>
                    </div>
                    <div className="icon-text">
                      <div className="icon m w-embed">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                          <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path>
                        </svg>
                      </div>
                      <p className="paragraph">Domain: .in ₹800 / .com ₹1,500</p>
                    </div>
                    <div className="icon-text">
                      <div className="icon m w-embed">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                          <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path>
                        </svg>
                      </div>
                      <p className="paragraph">Year 1 Total: ₹41,800 - ₹42,500</p>
                    </div>
                    <p className="small-paragraph" style={{textAlign: 'right', marginTop: '15px', marginRight: '0', width: '100%'}}>*Terms and conditions apply</p>
                  </div>
                </div>
              </div>
              <div data-w-tab="Tab 3" className={`tab-panel w-tab-pane ${activeTab === 'Tab 3' ? 'w--tab-active' : ''}`}>
                <div className="pricing-card">
                  <div className="pricing-main">
                    <div className="pricing-heading">
                      <div className="pricing-icon">
                        <div className="icon l w-embed">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                            <path d="M152,224a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16h32A8,8,0,0,1,152,224ZM128,112a12,12,0,1,0-12-12A12,12,0,0,0,128,112Zm95.62,43.83-12.36,55.63a16,16,0,0,1-25.51,9.11L158.51,200h-61L70.25,220.57a16,16,0,0,1-25.51-9.11L32.38,155.83a16.09,16.09,0,0,1,3.32-13.71l28.56-34.26a123.07,123.07,0,0,1,8.57-36.67c12.9-32.34,36-52.63,45.37-59.85a16,16,0,0,1,19.6,0c9.34,7.22,32.47,27.51,45.37,59.85a123.07,123.07,0,0,1,8.57,36.67l28.56,34.26A16.09,16.09,0,0,1,223.62,155.83ZM99.43,184h57.14c21.12-37.54,25.07-73.48,11.74-106.88C156.55,47.64,134.49,29,128,24c-6.51,5-28.57,23.64-40.33,53.12C74.36,110.52,78.31,146.46,99.43,184Zm-15,5.85Q68.28,160.5,64.83,132.16L48,152.36,60.36,208l.18-.13ZM208,152.36l-16.83-20.2q-3.42,28.28-19.56,57.69l23.85,18,.18.13Z"></path>
                          </svg>
                        </div>
                      </div>
                      <h3 className="display-h4">AI-Powered Premium Platform</h3>
                    </div>
                    <div className="pricing-description">
                      <div className="price">
                        <h4 className="display-h2">₹1,10,000</h4>
                        <div className="large-paragraph t---neutral-10">one-time + ₹5,000/year</div>
                      </div>
                      <p className="paragraph t---neutral-10">
                        For premium brands & SaaS seeking AI-powered platforms and advanced automation. Scalable/unlimited pages.
                      </p>
                    </div>
                  </div>
                  <div className="check-list-wrap">
                    <div className="icon-text">
                      <div className="icon m w-embed">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                          <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path>
                        </svg>
                      </div>
                      <p className="paragraph">Scalable/Unlimited pages</p>
                    </div>
                    <div className="icon-text">
                      <div className="icon m w-embed">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                          <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path>
                        </svg>
                      </div>
                      <p className="paragraph">Fully Custom, Advanced UI/UX</p>
                    </div>
                    <div className="icon-text">
                      <div className="icon m w-embed">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                          <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path>
                        </svg>
                      </div>
                      <p className="paragraph">Custom Advanced CMS</p>
                    </div>
                    <div className="icon-text">
                      <div className="icon m w-embed">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                          <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path>
                        </svg>
                      </div>
                      <p className="paragraph">AI Features (Tisya AI Core)</p>
                    </div>
                    <div className="icon-text">
                      <div className="icon m w-embed">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                          <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path>
                        </svg>
                      </div>
                      <p className="paragraph">Advanced Analytics Dashboard</p>
                    </div>
                    <div className="icon-text">
                      <div className="icon m w-embed">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                          <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path>
                        </svg>
                      </div>
                      <p className="paragraph">AI-Powered SEO</p>
                    </div>
                    <div className="icon-text">
                      <div className="icon m w-embed">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                          <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path>
                        </svg>
                      </div>
                      <p className="paragraph">Free 6 Months Custom SaaS Demo</p>
                    </div>
                    <div className="icon-text">
                      <div className="icon m w-embed">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                          <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path>
                        </svg>
                      </div>
                      <p className="paragraph">Hosting, Database & Maintenance: ₹5,000/year</p>
                    </div>
                    <div className="icon-text">
                      <div className="icon m w-embed">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                          <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path>
                        </svg>
                      </div>
                      <p className="paragraph">Domain: .in ₹800 / .com ₹1,500</p>
                    </div>
                    <div className="icon-text">
                      <div className="icon m w-embed">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                          <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path>
                        </svg>
                      </div>
                      <p className="paragraph">Year 1 Total: ₹1,15,800 - ₹1,16,500</p>
                    </div>
                    <p className="small-paragraph" style={{textAlign: 'right', marginTop: '15px', marginRight: '0', width: '100%'}}>*Terms and conditions apply</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="overlay-03"></div>
      <div className="pricing-bg"></div>
    </section>
  );
}
