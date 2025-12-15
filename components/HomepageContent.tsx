'use client';

import { useEffect } from 'react';

export default function HomepageContent() {
  useEffect(() => {
    // Animate process section cards when scrolled into view
    const processSection = document.querySelector('[data-w-id="52e17c10-f6e2-693e-51ca-ffc09f18755e"]') as HTMLElement;
    
    if (processSection) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Make container visible
            processSection.style.opacity = '1';
            
            // Animate each card with staggered delay
            const processCards = document.querySelectorAll('.process-card');
            processCards.forEach((card, index) => {
              const cardElement = card as HTMLElement;
              cardElement.style.opacity = '0';
              cardElement.style.transform = 'translateX(-30px)';
              cardElement.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
              
              setTimeout(() => {
                cardElement.style.opacity = '1';
                cardElement.style.transform = 'translateX(0)';
              }, index * 200);
            });
            
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.2 });
      
      observer.observe(processSection);
      
      return () => observer.disconnect();
    }
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="section hero">
        <div className="container">
          <div className="hero-wrap">
            <div className="hero">
              <div className="hero-text">
                <div className="hero-heading">
                  <h1 data-w-id="fb183dfb-c60b-169b-83d2-10bc584a7ef6" className="display-h1">
                    Tisya AI
                  </h1>
                  <div data-w-id="84760383-3241-c221-771a-33900488d0de" className="large-paragraph t---neutral-10">
                    AI, software, and business solutions.
                  </div>
                </div>
                <div data-w-id="42e4baa9-9891-fb60-296f-33f595a3edf6" className="hero-buttons">
                  <a href="#pricing" data-figma-id="156:103" data-wf--primary-button--variant="black" className="primary-button w-inline-block">
                    <div className="button-content">
                      <p data-figma-id="96:188" className="button-text">Share Your Idea</p>
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
                  <a href="#contact" data-figma-id="156:103" className="outline-button w-inline-block">
                    <div className="button-content">
                      <p data-figma-id="96:188" className="button-text">Contact for Pricing</p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="hero-ui">
                <img src="/asset/images/abc.jpg" loading="lazy" data-w-id="1567ae63-759c-8e83-3eb8-a809b1c6d866" sizes="(max-width: 920px) 100vw, 920px" alt="Customer dashboard UI" className="hero-ui-card" />
                <img src="https://cdn.prod.website-files.com/68a413987ca3efce6f38ee67/68a5a0543502c2d385a6dc2e_Hero%20UI%20Card%202.png" loading="lazy" data-w-id="4fde0941-2d4c-bc46-8fa2-a624e2bfa162" sizes="(max-width: 586px) 100vw, 586px" alt="Chart UI" srcSet="https://cdn.prod.website-files.com/68a413987ca3efce6f38ee67/68a5a0543502c2d385a6dc2e_Hero%20UI%20Card%202-p-500.png 500w, https://cdn.prod.website-files.com/68a413987ca3efce6f38ee67/68a5a0543502c2d385a6dc2e_Hero%20UI%20Card%202.png 586w" className="hero-ui-card-2" />
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

      {/* Process Section */}
      <section id="process" data-w-id="bbe8cfa0-151a-5d87-90e8-3d9cc64006b4" className="section">
        <div className="container centered">
          <div className="product-intro">
            <div data-w-id="c885e1dc-f502-a48a-2cc8-48f3e1daf7cb" className="main-ui">
              <img src="/asset/images/abc.jpg" loading="lazy" sizes="(max-width: 2159px) 100vw, 2159px" alt="Dashboard UI" className="main-ui-image" />
              <div className="main-ui-gradient"></div>
            </div>
            <div data-w-id="52e17c10-f6e2-693e-51ca-ffc09f18755e" style={{opacity: 0}} className="process">
              <div id="w-node-ac84b08e-31a9-f841-3071-13f6eb1a9ce4-6f38eea6" data-w-id="ac84b08e-31a9-f841-3071-13f6eb1a9ce4" className="process-card _1">
                <div className="process-content-wrap _1">
                  <div className="process-card-content _1">
                    <div className="large-paragraph t---neutral-10">01</div>
                    <div className="process-card-text">
                      <h2 className="display-h5">Discovery Call</h2>
                      <div className="paragraph t---neutral-10">
                        Share your vision and requirements. We analyze your needs and propose the best solution.
                      </div>
                    </div>
                  </div>
                  <div className="process-image-wrap _1">
                    <div className="process-image _1"></div>
                  </div>
                </div>
              </div>
              <div data-w-id="ca53cf5d-ad22-f91e-28f1-062324241019" className="process-card _2">
                <div className="process-content-wrap _2">
                  <div className="process-card-content _2">
                    <div className="large-paragraph t---neutral-10">02</div>
                    <div className="process-card-text">
                      <h2 className="display-h5">Development & Design</h2>
                      <div className="paragraph t---neutral-10">
                        We build your custom solution with regular updates and feedback loops.
                      </div>
                    </div>
                  </div>
                  <div className="process-image-wrap _2">
                    <div className="process-image _2"></div>
                  </div>
                </div>
              </div>
              <div id="w-node-acec6c3f-9070-2600-cf49-9f6b706cc9c0-6f38eea6" data-w-id="acec6c3f-9070-2600-cf49-9f6b706cc9c0" className="process-card _3">
                <div className="process-content-wrap _3">
                  <div className="process-card-content _3">
                    <div className="large-paragraph t---neutral-10">03</div>
                    <div className="process-card-text">
                      <h2 className="display-h5">Launch & Support</h2>
                      <div className="paragraph t---neutral-10">
                        Deploy your solution with training and ongoing maintenance support.
                      </div>
                    </div>
                  </div>
                  <div className="process-image-wrap _3">
                    <div className="process-image _3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Note: Due to the large size of remaining sections, please import the remaining components */}
      {/* IntegrationSection, PricingSection, ProjectsSection, TestimonialsSection, FAQSection, ContactSection, MSMESection */}
    </>
  );
}
