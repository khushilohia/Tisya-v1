'use client'

import { useEffect } from 'react'
import Script from 'next/script'

// Extend Window interface for Webflow
declare global {
  interface Window {
    Webflow: any;
  }
}

export default function WebflowScripts() {
  useEffect(() => {
    // Load Webflow after scripts are ready
    const loadWebflow = () => {
      if (window.Webflow) {
        window.Webflow.destroy()
        window.Webflow.ready()
        window.Webflow.require('ix2').init()
      }
    }

    // Toggle More Projects functionality
    (window as any).toggleMoreProjects = function() {
      const moreProjectsSection = document.getElementById('moreProjects');
      const buttonText = document.getElementById('viewAllProjectsText');
      const button = document.getElementById('viewAllProjectsBtn');
      
      if (moreProjectsSection && buttonText) {
        if (moreProjectsSection.style.display === 'none' || !moreProjectsSection.style.display) {
          moreProjectsSection.style.display = 'block';
          moreProjectsSection.style.opacity = '0';
          moreProjectsSection.style.transition = 'opacity 0.5s ease-in-out';
          setTimeout(() => { moreProjectsSection.style.opacity = '1'; }, 10);
          buttonText.textContent = 'Show Less Projects';
          if ((window as any).Webflow) {
            (window as any).Webflow.require('slider').redraw();
          }
          setTimeout(() => {
            moreProjectsSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }, 100);
        } else {
          moreProjectsSection.style.opacity = '0';
          setTimeout(() => { moreProjectsSection.style.display = 'none'; }, 500);
          buttonText.textContent = 'View All Projects';
          if (button) {
            button.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }
      }
    };

    // Delay to ensure all scripts are loaded
    const timer = setTimeout(loadWebflow, 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Script
        src="/asset/js/jquery-3.5.1.min.dc5e7f18c8.js"
        strategy="beforeInteractive"
      />
      <Script
        src="/asset/68a413987ca3efce6f38ee67/js/webflow.schunk.36b8fb49256177c8.js"
        strategy="afterInteractive"
      />
      <Script
        src="/asset/68a413987ca3efce6f38ee67/js/webflow.schunk.e1571605ad318f5e.js"
        strategy="afterInteractive"
      />
      <Script
        src="/asset/68a413987ca3efce6f38ee67/js/webflow.d688f257.c724b0fef498ae09.js"
        strategy="afterInteractive"
        onLoad={() => {
          if (window.Webflow) {
            window.Webflow.destroy()
            window.Webflow.ready()
            window.Webflow.require('ix2').init()
          }
        }}
      />
    </>
  )
}
