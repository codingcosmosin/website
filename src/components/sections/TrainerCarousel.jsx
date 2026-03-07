import React from 'react';
import { trainers } from '../../configs/trainers';

function TrainerCarousel() {
  const [idx, setIdx] = React.useState(0);
  const prev = () => setIdx(i => (i - 1 + trainers.length) % trainers.length);
  const next = () => setIdx(i => (i + 1) % trainers.length);
  return (
    <div className="py-3">
      <div className="row align-items-center">
        <div className="col-md-6 order-2 order-md-1">
          <blockquote className="blockquote">
            <p className="fs-5">{trainers[idx].message}</p>
            <footer className="blockquote-footer mt-2">{trainers[idx].name} <cite className="ms-2">{trainers[idx].title}</cite></footer>
          </blockquote>
        </div>
        <div className="col-md-6 d-flex justify-content-center order-1 order-md-2 mb-3 mb-md-0">
          <img src={trainers[idx].img} alt={trainers[idx].name} className="rounded-circle border" style={{width:200,height:200,objectFit:'cover'}} />
        </div>
      </div>

      <div className="d-flex justify-content-center align-items-center mt-3">
        <button className="btn btn-outline-secondary me-2" onClick={prev} aria-label="Previous trainer">&lt;</button>
        <div className="d-flex gap-2">
          {trainers.map((t, i) => (
            <button key={t.name} aria-label={`Go to ${t.name}`} className={`btn ${i===idx? 'btn-primary' : 'btn-light'}`} style={{width:12,height:12,padding:0,borderRadius:'50%'}} onClick={() => setIdx(i)} />
          ))}
        </div>
        <button className="btn btn-outline-secondary ms-2" onClick={next} aria-label="Next trainer">&gt;</button>
      </div>
    </div>
  );
}

export default TrainerCarousel;