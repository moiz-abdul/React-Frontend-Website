import React from 'react';
import './Home.css';
import Carousel from './Crouselandweather';
import ProjectStatus from './projectstatus';
import AboutUs from './Aboutus';
import Gallery from './Gallery';
import ContactUs from './Contactus';

// Home Page Component (combining all sections)
export default function Home() {
  return (
    <div>
      <Carousel/> {/* Crousel & Weather */}
      <ProjectStatus /> {/* Project Status Section */}
      <AboutUs/>{/* =About us */}
      <Gallery/>
      <ContactUs/>
    </div>
  );
}
