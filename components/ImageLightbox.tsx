'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function ImageLightbox() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [allProjectImages, setAllProjectImages] = useState<string[]>([])

  useEffect(() => {
    // Make openLightbox function globally available
    ;(window as any).openLightbox = (imageSrc: string) => {
      const event = (window as any).event
      if (!event) return

      const clickedImg = event.target
      const slider = clickedImg.closest('.w-slider')
      if (!slider) return

      const allSlides = slider.querySelectorAll('.w-slide img')
      const images = Array.from(allSlides).map((img: any) => img.src)

      setAllProjectImages(images)
      setCurrentImageIndex(images.indexOf(imageSrc))
      setIsOpen(true)
    }

    // Close lightbox with Escape key, navigate with arrow keys
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return

      if (e.key === 'Escape') {
        setIsOpen(false)
      } else if (e.key === 'ArrowLeft') {
        changeLightboxImage(-1)
      } else if (e.key === 'ArrowRight') {
        changeLightboxImage(1)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  const changeLightboxImage = (direction: number) => {
    let newIndex = currentImageIndex + direction

    if (newIndex < 0) {
      newIndex = allProjectImages.length - 1
    } else if (newIndex >= allProjectImages.length) {
      newIndex = 0
    }

    setCurrentImageIndex(newIndex)
  }

  const closeLightbox = () => {
    setIsOpen(false)
  }

  if (!isOpen) return null

  return (
    <div
      id="imageLightbox"
      style={{
        display: 'block',
        position: 'fixed',
        zIndex: 9999,
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.95)',
        overflow: 'auto',
        padding: '20px',
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) closeLightbox()
      }}
    >
      <span
        onClick={closeLightbox}
        style={{
          position: 'absolute',
          top: '20px',
          right: '40px',
          color: '#fff',
          fontSize: '40px',
          fontWeight: 'bold',
          cursor: 'pointer',
          zIndex: 10000,
        }}
      >
        &times;
      </span>

      <span
        onClick={() => changeLightboxImage(-1)}
        style={{
          position: 'absolute',
          top: '50%',
          left: '30px',
          transform: 'translateY(-50%)',
          color: '#fff',
          fontSize: '50px',
          fontWeight: 'bold',
          cursor: 'pointer',
          zIndex: 10000,
          userSelect: 'none',
        }}
      >
        &#10094;
      </span>

      <span
        onClick={() => changeLightboxImage(1)}
        style={{
          position: 'absolute',
          top: '50%',
          right: '30px',
          transform: 'translateY(-50%)',
          color: '#fff',
          fontSize: '50px',
          fontWeight: 'bold',
          cursor: 'pointer',
          zIndex: 10000,
          userSelect: 'none',
        }}
      >
        &#10095;
      </span>

      <img
        id="lightboxImage"
        src={allProjectImages[currentImageIndex]}
        alt="Project image"
        style={{
          margin: 'auto',
          display: 'block',
          maxWidth: '90%',
          maxHeight: '90%',
          objectFit: 'contain',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />

      <div
        id="imageCounter"
        style={{
          position: 'absolute',
          bottom: '30px',
          left: '50%',
          transform: 'translateX(-50%)',
          color: '#fff',
          fontSize: '18px',
          zIndex: 10000,
        }}
      >
        {currentImageIndex + 1} / {allProjectImages.length}
      </div>
    </div>
  )
}
