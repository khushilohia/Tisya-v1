'use client';

import { useEffect } from 'react';

export default function ProjectsSection() {
  useEffect(() => {
    // Initialize Webflow sliders after component mounts
    if (typeof window !== 'undefined' && (window as any).Webflow) {
      (window as any).Webflow.require('slider').redraw();
      (window as any).Webflow.require('slider').ready();
    }
  }, []);

  return (
    <section id="case-study" className="section">
      <div className="container centered">
        <div className="case-study-section">
          <div data-wf--section-header--variant="center" className="section-header">
            <h2 data-w-id="43e163e0-a4bf-51fc-16fd-fc73e02b5638" className="display-h2">
              Our Projects
            </h2>
            <div data-w-id="43e163e0-a4bf-51fc-16fd-fc73e02b563a" className="large-paragraph t---neutral-10">
              Explore our portfolio of innovative solutions built with cutting-edge technology and creative problem-solving.
            </div>
          </div>
          <div className="case-study-cms-wrap w-dyn-list">
            <div role="list" className="case-study-cms-list w-dyn-items">

              {/* CollabX Project */}
              <div role="listitem" className="case-study-cms w-dyn-item">
                <div className="case-study">
                  <div className="thumbnail-wrap">
                    <div data-delay="2500" data-animation="slide" className="w-slider" data-autoplay="false" data-easing="ease" data-hide-arrows="false" data-disable-swipe="false" data-autoplay-limit="0" data-nav-spacing="3" data-duration="500" data-infinite="true">
                      <div className="w-slider-mask">
                        <div className="w-slide">
                          <img
                            src="/projects/collabx (1).png"
                            alt="CollabX 1"
                            onClick={(e) => {
                              e.preventDefault();
                              (window as any).openLightbox?.(e.currentTarget.src);
                            }}
                            style={{cursor: 'pointer'}}
                          />
                        </div>
                        <div className="w-slide">
                          <img
                            src="/projects/collabx (2).png"
                            alt="CollabX 2"
                            onClick={(e) => {
                              e.preventDefault();
                              (window as any).openLightbox?.(e.currentTarget.src);
                            }}
                            style={{cursor: 'pointer'}}
                          />
                        </div>
                        <div className="w-slide">
                          <img
                            src="/projects/collabx (3).png"
                            alt="CollabX 3"
                            onClick={(e) => {
                              e.preventDefault();
                              (window as any).openLightbox?.(e.currentTarget.src);
                            }}
                            style={{cursor: 'pointer'}}
                          />
                        </div>
                        <div className="w-slide">
                          <img
                            src="/projects/collabx (4).png"
                            alt="CollabX 4"
                            onClick={(e) => {
                              e.preventDefault();
                              (window as any).openLightbox?.(e.currentTarget.src);
                            }}
                            style={{cursor: 'pointer'}}
                          />
                        </div>
                        <div className="w-slide">
                          <img
                            src="/projects/collabx (5).png"
                            alt="CollabX 5"
                            onClick={(e) => {
                              e.preventDefault();
                              (window as any).openLightbox?.(e.currentTarget.src);
                            }}
                            style={{cursor: 'pointer'}}
                          />
                        </div>
                      </div>
                      <div className="slide-nav w-slider-nav w-round" style={{bottom: '10px'}}></div>
                    </div>
                    <div className="overlay-01" style={{pointerEvents: 'none'}}></div>
                    <div className="year" style={{pointerEvents: 'none'}}>
                      <div className="small-paragraph">2026</div>
                    </div>
                  </div>
                  <div className="case-study-text">
                    <h3 className="display-h5">CollabX</h3>
                    <div className="paragraph t---neutral-10">
                      A campus collaboration platform bringing idea discovery, team formation, and event execution into one focused workflow for students — idea hub, skill-based team finder, and events board.
                    </div>
                  </div>
                </div>
              </div>

              {/* Sanjaya Farmwise Project */}
              <div role="listitem" className="case-study-cms w-dyn-item">
                <div className="case-study">
                  <div className="thumbnail-wrap">
                    <div data-delay="2500" data-animation="slide" className="w-slider" data-autoplay="false" data-easing="ease" data-hide-arrows="false" data-disable-swipe="false" data-autoplay-limit="0" data-nav-spacing="3" data-duration="500" data-infinite="true">
                      <div className="w-slider-mask">
                        <div className="w-slide">
                          <img
                            src="/projects/sanjaya-farmwise (1).png"
                            alt="Sanjaya Farmwise 1"
                            onClick={(e) => {
                              e.preventDefault();
                              (window as any).openLightbox?.(e.currentTarget.src);
                            }}
                            style={{cursor: 'pointer'}}
                          />
                        </div>
                        <div className="w-slide">
                          <img
                            src="/projects/sanjaya-farmwise (2).png"
                            alt="Sanjaya Farmwise 2"
                            onClick={(e) => {
                              e.preventDefault();
                              (window as any).openLightbox?.(e.currentTarget.src);
                            }}
                            style={{cursor: 'pointer'}}
                          />
                        </div>
                        <div className="w-slide">
                          <img
                            src="/projects/sanjaya-farmwise (3).png"
                            alt="Sanjaya Farmwise 3"
                            onClick={(e) => {
                              e.preventDefault();
                              (window as any).openLightbox?.(e.currentTarget.src);
                            }}
                            style={{cursor: 'pointer'}}
                          />
                        </div>
                        <div className="w-slide">
                          <img
                            src="/projects/sanjaya-farmwise (4).png"
                            alt="Sanjaya Farmwise 4"
                            onClick={(e) => {
                              e.preventDefault();
                              (window as any).openLightbox?.(e.currentTarget.src);
                            }}
                            style={{cursor: 'pointer'}}
                          />
                        </div>
                        <div className="w-slide">
                          <img
                            src="/projects/sanjaya-farmwise (5).png"
                            alt="Sanjaya Farmwise 5"
                            onClick={(e) => {
                              e.preventDefault();
                              (window as any).openLightbox?.(e.currentTarget.src);
                            }}
                            style={{cursor: 'pointer'}}
                          />
                        </div>
                      </div>
                      <div className="slide-nav w-slider-nav w-round" style={{bottom: '10px'}}></div>
                    </div>
                    <div className="overlay-01" style={{pointerEvents: 'none'}}></div>
                    <div className="year" style={{pointerEvents: 'none'}}>
                      <div className="small-paragraph">2026</div>
                    </div>
                  </div>
                  <div className="case-study-text">
                    <h3 className="display-h5">Sanjaya</h3>
                    <div className="paragraph t---neutral-10">
                      Voice-first AI farming intelligence for every village — farmers can ask about weather, crop diseases, market prices, and government schemes by voice, in their own language.
                    </div>
                  </div>
                </div>
              </div>

              {/* Parktag Project */}
              <div role="listitem" className="case-study-cms w-dyn-item">
                <div className="case-study">
                  <div className="thumbnail-wrap">
                    <div data-delay="2500" data-animation="slide" className="w-slider" data-autoplay="false" data-easing="ease" data-hide-arrows="false" data-disable-swipe="false" data-autoplay-limit="0" data-nav-spacing="3" data-duration="500" data-infinite="true">
                      <div className="w-slider-mask">
                        <div className="w-slide">
                          <img
                            src="/projects/parktag (1).png"
                            alt="Parktag 1"
                            onClick={(e) => {
                              e.preventDefault();
                              (window as any).openLightbox?.(e.currentTarget.src);
                            }}
                            style={{cursor: 'pointer'}}
                          />
                        </div>
                        <div className="w-slide">
                          <img
                            src="/projects/parktag (2).png"
                            alt="Parktag 2"
                            onClick={(e) => {
                              e.preventDefault();
                              (window as any).openLightbox?.(e.currentTarget.src);
                            }}
                            style={{cursor: 'pointer'}}
                          />
                        </div>
                        <div className="w-slide">
                          <img
                            src="/projects/parktag (3).png"
                            alt="Parktag 3"
                            onClick={(e) => {
                              e.preventDefault();
                              (window as any).openLightbox?.(e.currentTarget.src);
                            }}
                            style={{cursor: 'pointer'}}
                          />
                        </div>
                        <div className="w-slide">
                          <img
                            src="/projects/parktag (4).png"
                            alt="Parktag 4"
                            onClick={(e) => {
                              e.preventDefault();
                              (window as any).openLightbox?.(e.currentTarget.src);
                            }}
                            style={{cursor: 'pointer'}}
                          />
                        </div>
                        <div className="w-slide">
                          <img
                            src="/projects/parktag (5).png"
                            alt="Parktag 5"
                            onClick={(e) => {
                              e.preventDefault();
                              (window as any).openLightbox?.(e.currentTarget.src);
                            }}
                            style={{cursor: 'pointer'}}
                          />
                        </div>
                        <div className="w-slide">
                          <img
                            src="/projects/parktag (6).png"
                            alt="Parktag 6"
                            onClick={(e) => {
                              e.preventDefault();
                              (window as any).openLightbox?.(e.currentTarget.src);
                            }}
                            style={{cursor: 'pointer'}}
                          />
                        </div>
                      </div>
                      <div className="slide-nav w-slider-nav w-round" style={{bottom: '10px'}}></div>
                    </div>
                    <div className="overlay-01" style={{pointerEvents: 'none'}}></div>
                    <div className="year" style={{pointerEvents: 'none'}}>
                      <div className="small-paragraph">2026</div>
                    </div>
                  </div>
                  <div className="case-study-text">
                    <h3 className="display-h5">ParkTag</h3>
                    <div className="paragraph t---neutral-10">
                      A smart QR sticker platform for vehicles that lets anyone contact an owner anonymously and gives cities the data to end parking congestion — no app, no phone numbers, just scan.
                    </div>
                  </div>
                </div>
              </div>

              {/* NewsApp Project */}
              <div role="listitem" className="case-study-cms w-dyn-item">
                <div className="case-study">
                  <div className="thumbnail-wrap">
                    <div data-delay="2500" data-animation="slide" className="w-slider" data-autoplay="false" data-easing="ease" data-hide-arrows="false" data-disable-swipe="false" data-autoplay-limit="0" data-nav-spacing="3" data-duration="500" data-infinite="true">
                      <div className="w-slider-mask">
                        <div className="w-slide">
                          <img 
                            src="/projects/newsapp (1).png" 
                            alt="NewsApp 1" 
                            onClick={(e) => {
                              e.preventDefault();
                              (window as any).openLightbox?.(e.currentTarget.src);
                            }}
                            style={{cursor: 'pointer'}} 
                          />
                        </div>
                        <div className="w-slide">
                          <img 
                            src="/projects/newsapp (2).png" 
                            alt="NewsApp 2" 
                            onClick={(e) => {
                              e.preventDefault();
                              (window as any).openLightbox?.(e.currentTarget.src);
                            }}
                            style={{cursor: 'pointer'}} 
                          />
                        </div>
                        <div className="w-slide">
                          <img 
                            src="/projects/newsapp (3).png" 
                            alt="NewsApp 3" 
                            onClick={(e) => {
                              e.preventDefault();
                              (window as any).openLightbox?.(e.currentTarget.src);
                            }}
                            style={{cursor: 'pointer'}} 
                          />
                        </div>
                        <div className="w-slide">
                          <img 
                            src="/projects/newsapp (4).png" 
                            alt="NewsApp 4" 
                            onClick={(e) => {
                              e.preventDefault();
                              (window as any).openLightbox?.(e.currentTarget.src);
                            }}
                            style={{cursor: 'pointer'}} 
                          />
                        </div>
                        <div className="w-slide">
                          <img 
                            src="/projects/newsapp (5).png" 
                            alt="NewsApp 5" 
                            onClick={(e) => {
                              e.preventDefault();
                              (window as any).openLightbox?.(e.currentTarget.src);
                            }}
                            style={{cursor: 'pointer'}} 
                          />
                        </div>
                      </div>
                      <div className="slide-nav w-slider-nav w-round" style={{bottom: '10px'}}></div>
                    </div>
                    <div className="overlay-01" style={{pointerEvents: 'none'}}></div>
                    <div className="year" style={{pointerEvents: 'none'}}>
                      <div className="small-paragraph">2025</div>
                    </div>
                  </div>
                  <div className="case-study-text">
                    <h3 className="display-h5">NewsApp</h3>
                    <div className="paragraph t---neutral-10">
                      Modern news aggregation platform for India/Nepal with automated news fetching, admin dashboard, and comprehensive content management using Next.js 15 and MongoDB.
                    </div>
                  </div>
                </div>
              </div>

              {/* GIS-SGAY Project */}
              <div role="listitem" className="case-study-cms w-dyn-item">
                <div className="case-study">
                  <div className="thumbnail-wrap">
                    <div data-delay="2500" data-animation="slide" className="w-slider" data-autoplay="false" data-easing="ease" data-hide-arrows="false" data-disable-swipe="false" data-autoplay-limit="0" data-nav-spacing="3" data-duration="500" data-infinite="true">
                      <div className="w-slider-mask">
                        <div className="w-slide">
                          <img 
                            src="/projects/gis-sgay (1).png" 
                            alt="GIS-SGAY 1" 
                            onClick={(e) => {
                              e.preventDefault();
                              (window as any).openLightbox?.(e.currentTarget.src);
                            }}
                            style={{cursor: 'pointer'}} 
                          />
                        </div>
                        <div className="w-slide">
                          <img 
                            src="/projects/gis-sgay (2).png" 
                            alt="GIS-SGAY 2" 
                            onClick={(e) => {
                              e.preventDefault();
                              (window as any).openLightbox?.(e.currentTarget.src);
                            }}
                            style={{cursor: 'pointer'}} 
                          />
                        </div>
                        <div className="w-slide">
                          <img 
                            src="/projects/gis-sgay (3).png" 
                            alt="GIS-SGAY 3" 
                            onClick={(e) => {
                              e.preventDefault();
                              (window as any).openLightbox?.(e.currentTarget.src);
                            }}
                            style={{cursor: 'pointer'}} 
                          />
                        </div>
                        <div className="w-slide">
                          <img 
                            src="/projects/gis-sgay (4).png" 
                            alt="GIS-SGAY 4" 
                            onClick={(e) => {
                              e.preventDefault();
                              (window as any).openLightbox?.(e.currentTarget.src);
                            }}
                            style={{cursor: 'pointer'}} 
                          />
                        </div>
                        <div className="w-slide">
                          <img 
                            src="/projects/gis-sgay (5).png" 
                            alt="GIS-SGAY 5" 
                            onClick={(e) => {
                              e.preventDefault();
                              (window as any).openLightbox?.(e.currentTarget.src);
                            }}
                            style={{cursor: 'pointer'}} 
                          />
                        </div>
                      </div>
                      <div className="slide-nav w-slider-nav w-round" style={{bottom: '10px'}}></div>
                    </div>
                    <div className="overlay-01" style={{pointerEvents: 'none'}}></div>
                    <div className="year" style={{pointerEvents: 'none'}}>
                      <div className="small-paragraph">2025</div>
                    </div>
                  </div>
                  <div className="case-study-text">
                    <h3 className="display-h5">SGAY GIS-MIS</h3>
                    <div className="paragraph t---neutral-10">
                      Comprehensive GIS-based Management Information System for Sikkim Garib Awas Yojana with spatial data management, beneficiary tracking, and real-time progress monitoring.
                    </div>
                  </div>
                </div>
              </div>

              {/* Eve.ai Project */}
              <div role="listitem" className="case-study-cms w-dyn-item">
                <div className="case-study">
                  <div className="thumbnail-wrap">
                    <div data-delay="2500" data-animation="slide" className="w-slider" data-autoplay="false" data-easing="ease" data-hide-arrows="false" data-disable-swipe="false" data-autoplay-limit="0" data-nav-spacing="3" data-duration="500" data-infinite="true">
                      <div className="w-slider-mask">
                        <div className="w-slide">
                          <img 
                            src="/projects/eveai (1).png" 
                            alt="Eve.ai 1" 
                            onClick={(e) => {
                              e.preventDefault();
                              (window as any).openLightbox?.(e.currentTarget.src);
                            }}
                            style={{cursor: 'pointer'}} 
                          />
                        </div>
                        <div className="w-slide">
                          <img 
                            src="/projects/eveai (2).png" 
                            alt="Eve.ai 2" 
                            onClick={(e) => {
                              e.preventDefault();
                              (window as any).openLightbox?.(e.currentTarget.src);
                            }}
                            style={{cursor: 'pointer'}} 
                          />
                        </div>
                        <div className="w-slide">
                          <img 
                            src="/projects/eveai (3).png" 
                            alt="Eve.ai 3" 
                            onClick={(e) => {
                              e.preventDefault();
                              (window as any).openLightbox?.(e.currentTarget.src);
                            }}
                            style={{cursor: 'pointer'}} 
                          />
                        </div>
                      </div>
                      <div className="slide-nav w-slider-nav w-round" style={{bottom: '10px'}}></div>
                    </div>
                    <div className="overlay-01" style={{pointerEvents: 'none'}}></div>
                    <div className="year" style={{pointerEvents: 'none'}}>
                      <div className="small-paragraph">2024</div>
                    </div>
                  </div>
                  <div className="case-study-text">
                    <h3 className="display-h5">eve.ai</h3>
                    <div className="paragraph t---neutral-10">
                      An intelligent event planning platform using AI to streamline event organization from venue selection to vendor management and guest coordination.
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* More Projects Section (Initially Hidden) */}
          <div id="moreProjects" className="case-study-cms-wrap w-dyn-list" style={{display: 'none', marginTop: '40px'}}>
            <div role="list" className="case-study-cms-list w-dyn-items">
              
              {/* Sync Talk Project */}
              <div role="listitem" className="case-study-cms w-dyn-item">
                <div className="case-study">
                  <div className="thumbnail-wrap">
                    <img 
                      src="/projects/SyncTalk.png" 
                      alt="Sync Talk" 
                      onClick={(e) => {
                        e.preventDefault();
                        (window as any).openLightbox?.(e.currentTarget.src);
                      }}
                      style={{cursor: 'pointer', width: '100%', height: '100%', objectFit: 'cover'}} 
                    />
                    <div className="overlay-01" style={{pointerEvents: 'none'}}></div>
                    <div className="year" style={{pointerEvents: 'none'}}>
                      <div className="small-paragraph">2024</div>
                    </div>
                  </div>
                  <div className="case-study-text">
                    <h3 className="display-h5">Sync Talk</h3>
                    <div className="paragraph t---neutral-10">
                      A modern and secure chat application designed with cutting-edge technologies. Sync Talk offers real-time messaging, enterprise-grade encryption, and seamless file sharing for smooth and safe communication.
                    </div>
                  </div>
                </div>
              </div>

              {/* Tooniik Project */}
              <div role="listitem" className="case-study-cms w-dyn-item">
                <div className="case-study">
                  <div className="thumbnail-wrap">
                    <div data-delay="2500" data-animation="slide" className="w-slider" data-autoplay="false" data-easing="ease" data-hide-arrows="false" data-disable-swipe="false" data-autoplay-limit="0" data-nav-spacing="3" data-duration="500" data-infinite="true">
                      <div className="w-slider-mask">
                        <div className="w-slide">
                          <img 
                            src="/projects/toonik1.png" 
                            alt="Tooniik 1" 
                            onClick={(e) => {
                              e.preventDefault();
                              (window as any).openLightbox?.(e.currentTarget.src);
                            }}
                            style={{cursor: 'pointer'}} 
                          />
                        </div>
                        <div className="w-slide">
                          <img 
                            src="/projects/toonik2.png" 
                            alt="Tooniik 2" 
                            onClick={(e) => {
                              e.preventDefault();
                              (window as any).openLightbox?.(e.currentTarget.src);
                            }}
                            style={{cursor: 'pointer'}} 
                          />
                        </div>
                      </div>
                      <div className="slide-nav w-slider-nav w-round" style={{bottom: '10px'}}></div>
                    </div>
                    <div className="overlay-01" style={{pointerEvents: 'none'}}></div>
                    <div className="year" style={{pointerEvents: 'none'}}>
                      <div className="small-paragraph">2024</div>
                    </div>
                  </div>
                  <div className="case-study-text">
                    <h3 className="display-h5">Tooniik</h3>
                    <div className="paragraph t---neutral-10">
                      An innovative EdTech platform inspired by YouTube, Tooniik enables students and educators to share, learn, and grow through interactive educational videos and engaging learning content.
                    </div>
                  </div>
                </div>
              </div>

              {/* Kochi Metro App Project */}
              <div role="listitem" className="case-study-cms w-dyn-item">
                <div className="case-study">
                  <div className="thumbnail-wrap">
                    <div data-delay="2500" data-animation="slide" className="w-slider" data-autoplay="false" data-easing="ease" data-hide-arrows="false" data-disable-swipe="false" data-autoplay-limit="0" data-nav-spacing="3" data-duration="500" data-infinite="true">
                      <div className="w-slider-mask">
                        <div className="w-slide">
                          <img 
                            src="/projects/kochi (1).png" 
                            alt="Kochi Metro 1" 
                            onClick={(e) => {
                              e.preventDefault();
                              (window as any).openLightbox?.(e.currentTarget.src);
                            }}
                            style={{cursor: 'pointer'}} 
                          />
                        </div>
                        <div className="w-slide">
                          <img 
                            src="/projects/kochi (2).png" 
                            alt="Kochi Metro 2" 
                            onClick={(e) => {
                              e.preventDefault();
                              (window as any).openLightbox?.(e.currentTarget.src);
                            }}
                            style={{cursor: 'pointer'}} 
                          />
                        </div>
                        <div className="w-slide">
                          <img 
                            src="/projects/kochi (3).png" 
                            alt="Kochi Metro 3" 
                            onClick={(e) => {
                              e.preventDefault();
                              (window as any).openLightbox?.(e.currentTarget.src);
                            }}
                            style={{cursor: 'pointer'}} 
                          />
                        </div>
                      </div>
                      <div className="slide-nav w-slider-nav w-round" style={{bottom: '10px'}}></div>
                    </div>
                    <div className="overlay-01" style={{pointerEvents: 'none'}}></div>
                    <div className="year" style={{pointerEvents: 'none'}}>
                      <div className="small-paragraph">2024</div>
                    </div>
                  </div>
                  <div className="case-study-text">
                    <h3 className="display-h5">Kochi Metro App</h3>
                    <div className="paragraph t---neutral-10">
                      A smart web application developed for the Kerala Metro system. It simplifies metro management through real-time tracking, station monitoring, and efficient control operations.
                    </div>
                  </div>
                </div>
              </div>

              {/* SCM Project */}
              <div role="listitem" className="case-study-cms w-dyn-item">
                <div className="case-study">
                  <div className="thumbnail-wrap">
                    <div data-delay="2500" data-animation="slide" className="w-slider" data-autoplay="false" data-easing="ease" data-hide-arrows="false" data-disable-swipe="false" data-autoplay-limit="0" data-nav-spacing="3" data-duration="500" data-infinite="true">
                      <div className="w-slider-mask">
                        <div className="w-slide">
                          <img 
                            src="/projects/scm (1).png" 
                            alt="SCM 1" 
                            onClick={(e) => {
                              e.preventDefault();
                              (window as any).openLightbox?.(e.currentTarget.src);
                            }}
                            style={{cursor: 'pointer'}} 
                          />
                        </div>
                        <div className="w-slide">
                          <img 
                            src="/projects/scm (2).png" 
                            alt="SCM 2" 
                            onClick={(e) => {
                              e.preventDefault();
                              (window as any).openLightbox?.(e.currentTarget.src);
                            }}
                            style={{cursor: 'pointer'}} 
                          />
                        </div>
                        <div className="w-slide">
                          <img 
                            src="/projects/scm (3).png" 
                            alt="SCM 3" 
                            onClick={(e) => {
                              e.preventDefault();
                              (window as any).openLightbox?.(e.currentTarget.src);
                            }}
                            style={{cursor: 'pointer'}} 
                          />
                        </div>
                        <div className="w-slide">
                          <img 
                            src="/projects/scm (4).png" 
                            alt="SCM 4" 
                            onClick={(e) => {
                              e.preventDefault();
                              (window as any).openLightbox?.(e.currentTarget.src);
                            }}
                            style={{cursor: 'pointer'}} 
                          />
                        </div>
                        <div className="w-slide">
                          <img 
                            src="/projects/scm (5).png" 
                            alt="SCM 5" 
                            onClick={(e) => {
                              e.preventDefault();
                              (window as any).openLightbox?.(e.currentTarget.src);
                            }}
                            style={{cursor: 'pointer'}} 
                          />
                        </div>
                      </div>
                      <div className="slide-nav w-slider-nav w-round" style={{bottom: '10px'}}></div>
                    </div>
                    <div className="overlay-01" style={{pointerEvents: 'none'}}></div>
                    <div className="year" style={{pointerEvents: 'none'}}>
                      <div className="small-paragraph">2024</div>
                    </div>
                  </div>
                  <div className="case-study-text">
                    <h3 className="display-h5">SCM (Supply Chain Management)</h3>
                    <div className="paragraph t---neutral-10">
                      A comprehensive supply chain management platform built to streamline logistics, inventory, legal compliance, and demand tracking. It enhances decision-making with data visualization, automation, and AI-driven insights.
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <a href="#" data-figma-id="156:103" className="outline-button w-inline-block" id="viewAllProjectsBtn" onClick={(e) => { e.preventDefault(); (window as any).toggleMoreProjects?.(); }}>
            <div className="button-content">
              <p data-figma-id="96:188" className="button-text" id="viewAllProjectsText">View All Projects</p>
            </div>
          </a>
        </div>

        {/* Divider */}
        <div className="divider-h">
          <div className="icon w-embed">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256">
              <path d="M228,128a12,12,0,0,1-12,12H140v76a12,12,0,0,1-24,0V140H40a12,12,0,0,1,0-24h76V40a12,12,0,0,1,24,0v76h76A12,12,0,0,1,228,128Z"></path>
            </svg>
          </div>
          <div className="icon w-embed">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256">
              <path d="M228,128a12,12,0,0,1-12,12H140v76a12,12,0,0,1-24,0V140H40a12,12,0,0,1,0-24h76V40a12,12,0,0,1,24,0v76h76A12,12,0,0,1,228,128Z"></path>
            </svg>
          </div>
          <div className="icon w-embed">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256">
              <path d="M228,128a12,12,0,0,1-12,12H140v76a12,12,0,0,1-24,0V140H40a12,12,0,0,1,0-24h76V40a12,12,0,0,1,24,0v76h76A12,12,0,0,1,228,128Z"></path>
            </svg>
          </div>
          <div className="icon w-embed">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256">
              <path d="M228,128a12,12,0,0,1-12,12H140v76a12,12,0,0,1-24,0V140H40a12,12,0,0,1,0-24h76V40a12,12,0,0,1,24,0v76h76A12,12,0,0,1,228,128Z"></path>
            </svg>
          </div>
          <div className="icon w-embed">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256">
              <path d="M228,128a12,12,0,0,1-12,12H140v76a12,12,0,0,1-24,0V140H40a12,12,0,0,1,0-24h76V40a12,12,0,0,1,24,0v76h76A12,12,0,0,1,228,128Z"></path>
            </svg>
          </div>
        </div>

      </div>
    </section>
  );
}
