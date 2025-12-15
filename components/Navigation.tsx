'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [menuOpen])

  return (
    <div className="nav-wrap">
      <div className="navbar">
        <div className="nav-wrapper">
          <div className="brand-wrapper">
            <Link href="/" className="brand w-inline-block w--current">
              <div
                className="display-h5"
                style={{ margin: 0, color: 'var(--t---neutral-100, #000)' }}
              >
                Tisya AI
              </div>
            </Link>
          </div>
          <div className="nav-menu">
            <Link href="/about" className="navbar-link w-inline-block">
              <div className="nav">About</div>
            </Link>
            <Link href="/#feature" className="navbar-link w-inline-block">
              <div className="nav">Feature</div>
            </Link>
            <Link href="/#pricing" className="navbar-link w-inline-block">
              <div className="nav">Pricing</div>
            </Link>
          </div>
          <div className="nav-button">
            <Link
              href="/#contact"
              data-figma-id="156:103"
              data-wf--primary-button--variant="black"
              className="primary-button w-inline-block"
            >
              <div className="button-content">
                <p data-figma-id="96:188" className="button-text">
                  Get in Touch
                </p>
                <div className="button-icon-wrap">
                  <div className="slide-in-icon">
                    <div className="icon w-embed">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M28.0613 17.0612L19.0613 26.0612C18.7795 26.343 18.3973 26.5013 17.9988 26.5013C17.6002 26.5013 17.218 26.343 16.9363 26.0612C16.6545 25.7794 16.4961 25.3972 16.4961 24.9987C16.4961 24.6002 16.6545 24.218 16.9363 23.9362L23.375 17.5H5C4.60218 17.5 4.22064 17.3419 3.93934 17.0606C3.65804 16.7793 3.5 16.3978 3.5 16C3.5 15.6022 3.65804 15.2206 3.93934 14.9393C4.22064 14.658 4.60218 14.5 5 14.5H23.375L16.9387 8.05998C16.657 7.77818 16.4986 7.39599 16.4986 6.99747C16.4986 6.59896 16.657 6.21677 16.9387 5.93497C17.2205 5.65318 17.6027 5.49487 18.0012 5.49487C18.3998 5.49487 18.782 5.65318 19.0637 5.93497L28.0637 14.935C28.2036 15.0745 28.3145 15.2403 28.3901 15.4228C28.4657 15.6054 28.5045 15.801 28.5043 15.9986C28.5041 16.1962 28.4648 16.3918 28.3888 16.5741C28.3127 16.7565 28.2014 16.922 28.0613 17.0612Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="slide-out-icon">
                    <div className="icon w-embed">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M28.0613 17.0612L19.0613 26.0612C18.7795 26.343 18.3973 26.5013 17.9988 26.5013C17.6002 26.5013 17.218 26.343 16.9363 26.0612C16.6545 25.7794 16.4961 25.3972 16.4961 24.9987C16.4961 24.6002 16.6545 24.218 16.9363 23.9362L23.375 17.5H5C4.60218 17.5 4.22064 17.3419 3.93934 17.0606C3.65804 16.7793 3.5 16.3978 3.5 16C3.5 15.6022 3.65804 15.2206 3.93934 14.9393C4.22064 14.658 4.60218 14.5 5 14.5H23.375L16.9387 8.05998C16.657 7.77818 16.4986 7.39599 16.4986 6.99747C16.4986 6.59896 16.657 6.21677 16.9387 5.93497C17.2205 5.65318 17.6027 5.49487 18.0012 5.49487C18.3998 5.49487 18.782 5.65318 19.0637 5.93497L28.0637 14.935C28.2036 15.0745 28.3145 15.2403 28.3901 15.4228C28.4657 15.6054 28.5045 15.801 28.5043 15.9986C28.5041 16.1962 28.4648 16.3918 28.3888 16.5741C28.3127 16.7565 28.2014 16.922 28.0613 17.0612Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="nav-menu-button-wrap">
            <div
              data-figma-id="156:103"
              data-w-id="aa6612f2-b0d5-f83c-935e-76485f130b37"
              className="nav-menu-button"
              onClick={() => setMenuOpen(true)}
            >
              <div className="button-content">
                <p data-figma-id="96:188" className="button-text">
                  Menu
                </p>
                <div className="button-icon-wrap">
                  <div className="icon w-embed">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M28.5 16C28.5 16.3978 28.342 16.7794 28.0607 17.0607C27.7794 17.342 27.3978 17.5 27 17.5H5C4.60218 17.5 4.22064 17.342 3.93934 17.0607C3.65804 16.7794 3.5 16.3978 3.5 16C3.5 15.6022 3.65804 15.2206 3.93934 14.9393C4.22064 14.658 4.60218 14.5 5 14.5H27C27.3978 14.5 27.7794 14.658 28.0607 14.9393C28.342 15.2206 28.5 15.6022 28.5 16ZM5 9.5H27C27.3978 9.5 27.7794 9.34196 28.0607 9.06066C28.342 8.77936 28.5 8.39782 28.5 8C28.5 7.60218 28.342 7.22064 28.0607 6.93934C27.7794 6.65804 27.3978 6.5 27 6.5H5C4.60218 6.5 4.22064 6.65804 3.93934 6.93934C3.65804 7.22064 3.5 7.60218 3.5 8C3.5 8.39782 3.65804 8.77936 3.93934 9.06066C4.22064 9.34196 4.60218 9.5 5 9.5ZM27 22.5H5C4.60218 22.5 4.22064 22.658 3.93934 22.9393C3.65804 23.2206 3.5 23.6022 3.5 24C3.5 24.3978 3.65804 24.7794 3.93934 25.0607C4.22064 25.342 4.60218 25.5 5 25.5H27C27.3978 25.5 27.7794 25.342 28.0607 25.0607C28.342 24.7794 28.5 24.3978 28.5 24C28.5 23.6022 28.342 23.2206 28.0607 22.9393C27.7794 22.658 27.3978 22.5 27 22.5Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-figma-id="156:103"
              data-w-id="61563fd7-9f8a-5a95-991f-c86f85d98fab"
              className="nav-menu-button close"
              onClick={() => setMenuOpen(false)}
            >
              <div className="button-content">
                <p data-figma-id="96:188" className="button-text">
                  Menu
                </p>
                <div className="button-icon-wrap">
                  <div className="icon w-embed">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M26.0612 23.9387C26.343 24.2205 26.5013 24.6027 26.5013 25.0012C26.5013 25.3997 26.343 25.7819 26.0612 26.0637C25.7794 26.3455 25.3972 26.5038 24.9987 26.5038C24.6002 26.5038 24.218 26.3455 23.9362 26.0637L15.9999 18.125L8.0612 26.0612C7.7794 26.343 7.39721 26.5013 6.9987 26.5013C6.60018 26.5013 6.21799 26.343 5.9362 26.0612C5.6544 25.7794 5.49609 25.3972 5.49609 24.9987C5.49609 24.6002 5.6544 24.218 5.9362 23.9362L13.8749 16L5.9387 8.06122C5.6569 7.77943 5.49859 7.39724 5.49859 6.99872C5.49859 6.60021 5.6569 6.21802 5.9387 5.93622C6.22049 5.65443 6.60268 5.49612 7.0012 5.49612C7.39971 5.49612 7.7819 5.65443 8.0637 5.93622L15.9999 13.875L23.9387 5.93497C24.2205 5.65318 24.6027 5.49487 25.0012 5.49487C25.3997 5.49487 25.7819 5.65318 26.0637 5.93497C26.3455 6.21677 26.5038 6.59896 26.5038 6.99747C26.5038 7.39599 26.3455 7.77818 26.0637 8.05998L18.1249 16L26.0612 23.9387Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="nav-dropdown-menu"
            style={{ display: menuOpen ? 'block' : 'none' }}
          >
            <Link href="/about" className="navbar-link in-menu w-inline-block" onClick={() => setMenuOpen(false)}>
              <div className="nav">About</div>
            </Link>
            <Link href="/#feature" className="navbar-link in-menu w-inline-block" onClick={() => setMenuOpen(false)}>
              <div className="nav">Feature</div>
            </Link>
            <Link href="/#pricing" className="navbar-link in-menu w-inline-block" onClick={() => setMenuOpen(false)}>
              <div className="nav">Pricing</div>
            </Link>
            <Link href="/#contact" className="navbar-link in-menu w-inline-block" onClick={() => setMenuOpen(false)}>
              <div className="nav">Get in Touch</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
