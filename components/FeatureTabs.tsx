'use client';

import { useState } from 'react';

export default function FeatureTabs() {
  const [activeTab, setActiveTab] = useState('Tab 4');

  return (
    <section id="feature" className="section">
      <div className="container centered">
        <div data-wf--section-header--variant="center" className="section-header">
          <h2 data-w-id="43e163e0-a4bf-51fc-16fd-fc73e02b5638" className="display-h2">
            Fast, Affordable & Client-Friendly
          </h2>
          <div data-w-id="43e163e0-a4bf-51fc-16fd-fc73e02b563a" className="large-paragraph t---neutral-10">
            Based in Sikkim, India, Tisya AI delivers custom software, management tools, websites, SEO, and AI automation. We help businesses modernize with accessible technology for startups and enterprises alike.
          </div>
        </div>
        <div
          data-current="Tab 4"
          data-easing="ease"
          data-duration-in="300"
          data-duration-out="100"
          className="tab-wrap w-tabs"
        >
          <div id="w-node-d1ab5cee-5f58-fa45-8302-636b2739224b-6f38eea6" className="tab-menu w-tab-menu">
            <a
              data-w-tab="Tab 1"
              className={`tab-item w-inline-block w-tab-link ${activeTab === 'Tab 1' ? 'w--current' : ''}`}
              href="#"
              onClick={(e) => { e.preventDefault(); setActiveTab('Tab 1'); }}
            >
              <div className="tab-icon">
                <div className="icon m w-embed">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M240,192h-8V168a8,8,0,0,0-8-8H160a8,8,0,0,0-8,8v24H40V56H216v80a8,8,0,0,0,16,0V56a16,16,0,0,0-16-16H40A16,16,0,0,0,24,56V192H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16Zm-72-16h48v16H168Z"></path>
                  </svg>
                </div>
              </div>
              <div className="tab-item-text">Custom Software</div>
            </a>
            <a
              data-w-tab="Tab 2"
              className={`tab-item w-inline-block w-tab-link ${activeTab === 'Tab 2' ? 'w--current' : ''}`}
              href="#"
              onClick={(e) => { e.preventDefault(); setActiveTab('Tab 2'); }}
            >
              <div className="tab-icon">
                <div className="icon m w-embed">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M232,208a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V48a8,8,0,0,1,16,0v94.37L90.73,98a8,8,0,0,1,10.07-.38l58.81,44.11L218.73,90a8,8,0,1,1,10.54,12l-64,56a8,8,0,0,1-10.07.38L96.39,114.29,40,163.63V200H224A8,8,0,0,1,232,208Z"></path>
                  </svg>
                </div>
              </div>
              <div className="tab-item-text">Web Design</div>
            </a>
            <a
              data-w-tab="Tab 3"
              className={`tab-item w-inline-block w-tab-link ${activeTab === 'Tab 3' ? 'w--current' : ''}`}
              href="#"
              onClick={(e) => { e.preventDefault(); setActiveTab('Tab 3'); }}
            >
              <div className="tab-icon">
                <div className="icon m w-embed">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M230.91,172A8,8,0,0,1,228,182.91l-96,56a8,8,0,0,1-8.06,0l-96-56A8,8,0,0,1,36,169.09l92,53.65,92-53.65A8,8,0,0,1,230.91,172ZM220,121.09l-92,53.65L36,121.09A8,8,0,0,0,28,134.91l96,56a8,8,0,0,0,8.06,0l96-56A8,8,0,1,0,220,121.09ZM24,80a8,8,0,0,1,4-6.91l96-56a8,8,0,0,1,8.06,0l96,56a8,8,0,0,1,0,13.82l-96,56a8,8,0,0,1-8.06,0l-96-56A8,8,0,0,1,24,80Zm23.88,0L128,126.74,208.12,80,128,33.26Z"></path>
                  </svg>
                </div>
              </div>
              <div className="tab-item-text">AI Automation</div>
            </a>
            <a
              data-w-tab="Tab 4"
              className={`tab-item w-inline-block w-tab-link ${activeTab === 'Tab 4' ? 'w--current' : ''}`}
              href="#"
              onClick={(e) => { e.preventDefault(); setActiveTab('Tab 4'); }}
            >
              <div className="tab-icon">
                <div className="icon m w-embed">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M152,80a8,8,0,0,1,8-8h88a8,8,0,0,1,0,16H160A8,8,0,0,1,152,80Zm96,40H160a8,8,0,0,0,0,16h88a8,8,0,0,0,0-16Zm0,48H184a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16Zm-96.25,22a8,8,0,0,1-5.76,9.74,7.55,7.55,0,0,1-2,.26,8,8,0,0,1-7.75-6c-6.16-23.94-30.34-42-56.25-42s-50.09,18.05-56.25,42a8,8,0,0,1-15.5-4c5.59-21.71,21.84-39.29,42.46-48a48,48,0,1,1,58.58,0C129.91,150.71,146.16,168.29,151.75,190ZM80,136a32,32,0,1,0-32-32A32,32,0,0,0,80,136Z"></path>
                  </svg>
                </div>
              </div>
              <div className="tab-item-text">SEO & Marketing</div>
            </a>
          </div>
          <div id="w-node-d1ab5cee-5f58-fa45-8302-636b2739225c-6f38eea6" className="tab-content w-tab-content">
            <div data-w-tab="Tab 1" className={`tab-option _1 w-tab-pane ${activeTab === 'Tab 1' ? 'w--tab-active' : ''}`}>
              <div className="feature-tab-content">
                <div className="feature-tab-ui">
                  <div className="overlay-03"></div>
                  <div
                    data-w-id="d1ab5cee-5f58-fa45-8302-636b27392261"
                    className="tab-01-image"
                  ></div>
                </div>
                <div className="feature-content">
                  <div className="feature-tag">
                    <div className="tag">Custom Software</div>
                  </div>
                  <h3 className="display-h3">Tailored solutions for your business</h3>
                  <div className="paragraph t---neutral-10">
                    From CRM systems to inventory management, we build scalable software designed specifically for your workflow and business requirements.
                  </div>
                </div>
              </div>
            </div>
            <div data-w-tab="Tab 2" className={`tab-option _2 w-tab-pane ${activeTab === 'Tab 2' ? 'w--tab-active' : ''}`}>
              <div className="feature-tab-content">
                <div className="feature-tab-ui">
                  <div className="overlay-03"></div>
                  <div data-w-id="d1ab5cee-5f58-fa45-8302-636b27392267" className="tab-02-image-wrap">
                    <div className="tab-02-image"></div>
                    <div className="tab-02-shadow"></div>
                    <div className="tab-02-shadow _2"></div>
                  </div>
                </div>
                <div className="feature-content">
                  <div className="feature-tag">
                    <div className="tag">Web Design</div>
                  </div>
                  <h3 className="display-h3">Beautiful, responsive websites</h3>
                  <div className="paragraph t---neutral-10">
                    Create stunning websites that convert visitors into customers. Mobile-friendly designs with fast loading and intuitive navigation.
                  </div>
                </div>
              </div>
            </div>
            <div data-w-tab="Tab 3" className={`tab-option w-tab-pane ${activeTab === 'Tab 3' ? 'w--tab-active' : ''}`}>
              <div className="feature-tab-content">
                <div className="feature-tab-ui">
                  <div className="overlay-03"></div>
                  <div className="tab-03-image-bg">
                    <div className="tab-03-image"></div>
                  </div>
                </div>
                <div className="feature-content">
                  <div className="feature-tag">
                    <div className="tag">AI Automation</div>
                  </div>
                  <h3 className="display-h3">Intelligent process automation</h3>
                  <div className="paragraph t---neutral-10">
                    Leverage AI to automate workflows, analyze data, and make smarter business decisions. From chatbots to predictive analytics.
                  </div>
                </div>
              </div>
            </div>
            <div data-w-tab="Tab 4" className={`tab-option w-tab-pane ${activeTab === 'Tab 4' ? 'w--tab-active' : ''}`}>
              <div className="feature-tab-content">
                <div className="feature-tab-ui">
                  <div className="overlay-03"></div>
                  <div className="tab-04-image">
                    <div className="tab-04-bar">
                      <img
                        src="https://cdn.prod.website-files.com/68a413987ca3efce6f38ee67/68a4af74b2e4e34cd6835eb4_Invite.png"
                        loading="lazy"
                        sizes="(max-width: 559px) 100vw, 559px"
                        srcSet="https://cdn.prod.website-files.com/68a413987ca3efce6f38ee67/68a4af74b2e4e34cd6835eb4_Invite-p-500.png 500w, https://cdn.prod.website-files.com/68a413987ca3efce6f38ee67/68a4af74b2e4e34cd6835eb4_Invite.png 559w"
                        alt="UI bar"
                      />
                    </div>
                  </div>
                </div>
                <div className="feature-content">
                  <div className="feature-tag">
                    <div className="tag">SEO & Marketing</div>
                  </div>
                  <h3 className="display-h3">Grow your online presence</h3>
                  <div className="paragraph t---neutral-10">
                    Rank higher on Google with expert SEO strategies. Full-service digital marketing including content, social media, and paid advertising.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
