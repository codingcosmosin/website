import React from 'react';
import Navbar from '../components/sections/Navbar';
import Carousel from '../components/sections/Carousel';
import FeatureControls from '../components/sections/FeatureControls';
import LogoCarousel from '../components/sections/LogoCarousel';
import TrainerCarousel from '../components/sections/TrainerCarousel';
import CoursesSection from '../components/sections/CoursesSection';

export default function Index() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ paddingTop: '56px' }}>
      {/* Navbar */}
      <Navbar />

      {/* Carousel */}
      <Carousel />

      {/* Feature controls strip */}
      <FeatureControls />

      {/* Our Learners Work At section */}
      <section className="py-5 bg-white">
        <div className="container">
          <h3 className="text-center fw-bold mb-1" style={{letterSpacing:1}}>GUIDED BY REAL-WORLD PROFESSIOANLS</h3>
          <div className="mx-auto mb-3" style={{width:80, borderBottom:'3px solid #ff8000'}}></div>
          <p className="text-center fs-5 text-secondary mb-4">Our team brings diverse experience across multiple domains, including the energy sector, supply chain management, banking, ERP, telecommunications, audit, airlines, tax compliance and many more.
.</p>
          <LogoCarousel />
        </div>
      </section>

      {/* Trainers / Instructor spotlight section */}
      <section className="py-5 bg-light">
        <div className="container">
          <h3 className="text-center fw-bold mb-3">MEET OUR TRAINERS</h3>
          <div className="mx-auto mb-3" style={{width:80, borderBottom:'3px solid #ff8000'}}></div>
          <TrainerCarousel />
        </div>
      </section>

      {/* Explore Our Courses section */}
      <section id="courses" className="py-5">
        <div className="container">
          <h2 className="text-center fw-bold">Explore Our Courses</h2>
          <div className="mx-auto mb-3" style={{width:80, borderBottom:'3px solid #ff00a8'}}></div>
          <p className="text-center text-muted mb-4">Find the perfect course to accelerate your development journey</p>
          <CoursesSection />
        </div>
      </section>
    </div>
  );
}
