import React, { useState, useEffect } from 'react';
import './App.css';
import coverImg from './SASK+StoragePlex+Vertical.png'; // Example image import
import bgImg from './unsplash-image-zQtmZjMdejU.jpg'; // Example image import
import logo from './StoragePlex+Vertical+transparent.png'; // Example image import
import aboutUs from './520-storageplex-sasaktoon.jpg'; // Example image import
import aboutSp from './520_46th_St_E-14.jpg'; // Example image import
import whatweDo from './520_46th_St_E-17.jpg'; // Example image import

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setShowHeader(scrollPosition > currentScrollPos || currentScrollPos < 10);
      setScrollPosition(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);
  return (
    <div className="App">
      {/* Header Section */}
      <header className={`header ${showHeader ? 'show' : 'hide'}`}>
        <div className="logo">
          <div className='logo-img'><img src={coverImg} alt='Logo' /></div>
        </div>
        <div className="nav-options">
          <a href="#home">Home</a>
          <button>Contact Us</button>
        </div>
      </header>

      {/* Cover Image */}
      <section className="cover-image">
        <div className="cover-img-bg">
          <img src={bgImg} alt="Background Cover" className="background-img" />
          <div className="overlay-content">
            <img src={logo} alt="Overlay Logo" className="overlay-img" />
          </div>
        </div>
      </section>

      {/* About Sections */}
      <section className="about-section">
        <div className="about-content">
          <div className="text-content">
            <div className="about-heading">About Us</div>
            <ul>
              <li>Heated Indoor Storage</li>
              <li>100 - 20,000 Square feet available</li>
              <li>Loading/Unloading
                <ul className="nested-list">
                  <li>Dock Level</li>
                  <li>Van Level</li>
                  <li>½ Ton</li>
                  <li>or drive in doors</li>
                </ul>
              </li>
              <li>Secure Storage</li>
              <li>Co-Work Office Space availability</li>
              <li>Located in the heart of the north industrial
                <ul className="nested-list">
                  <li>Just 5 Blocks north of Circle Drive</li>
                </ul>
              </li>
              <li>Secure Storage
                <ul className="nested-list">
                  <li>We'll manage your inventory.</li>
                  <li>Only pay for the space you use</li>
                </ul>
              </li>
            </ul>
          </div>
          <img src={aboutUs} alt="About" className="about-thumbnail" />
        </div>
      </section>

      {/* StoragePlex Section */}
      <section className="about-storageplex-section">
        <div className="about-storageplex-content">
          <div className="text-content">
            <img src={aboutSp} alt="About StoragePlex" className="about-thumbnail" />
          </div>
          <div className='about-desc'>
            <div className="about-heading">About StoragePlex</div>
            <div className='about-desc-p'>StoragePlex is all about affordable storage and logistics. Our fully managed warehouse offers more than 20,000 square feet of heated storage. </div>
            <div className='about-desc-p'>Whether you are storing furniture for a renovation, or products you plan to sell online, StoragePlex can help. </div>
            <div className='about-desc-p'>We offer month-to-month rates, as well as lower long term rates. </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="our-services-section">
        <div className="our-services-content">
          <div className="text-content">
            <div className="about-heading">What We Do</div>
            <ul>
              <li>Warehousing</li>
              <li>Store & More</li>
              <ul className="nested-list">
                <li>Furniture</li>
                <li>Business inventory</li>
                <li>Construction materials</li>
              </ul>
              <li>Logistics</li>
              <li>Shipping and receiving services</li>
              <li>North Industrial just off Circle Drive</li>
              <li>Fork Lift Services Available</li>
              <li>Restricted storage (No Access Without Escort)</li>
              <li>Secure Outdoor Yard Storage Available</li>
            </ul>
          </div>
          <img src={whatweDo} alt="Our Services" className="about-thumbnail" />
        </div>
      </section>

      {/* Contact Section with Background Image */}
      <section className="contact-section">
        <div className="contact-content">
          <h2>Need Storage?</h2>
          <p>Contact us now for a custom quote.</p>
          <div className="contact-buttons">
            <button className="btn-call">Call Us</button>
            <button className="btn-message">Message Us</button>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div>
          <img src={logo} alt="Footer Logo" className="about-thumbnail" />
        </div>
        <address>
          520 46th Street East<br />
          Saskatoon, SK<br />
          S7K 0W9
        </address>
        <p>&copy; 2024 StoragePlex. All rights reserved. Designed By Amanwhocare</p>
      </footer>
    </div>
  );
}

export default App;
