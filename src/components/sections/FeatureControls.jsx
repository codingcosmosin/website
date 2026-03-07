import React from 'react';
import { featureControls } from '../../configs/featureControls';

function FeatureControls() {
  return (
    <section className="bg-primary text-white">
      <div className="container">
        <div className="row text-white gy-3 py-3 align-items-center">
          {featureControls.map((feature, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-3 d-flex align-items-start">
              <div className="me-3" style={{ width: 48 }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-white"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d={feature.icon} />
                </svg>
              </div>
              <div>
                <div className="fw-bold">{feature.title}</div>
                <div>{feature.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeatureControls;