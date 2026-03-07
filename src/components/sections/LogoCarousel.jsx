import React from 'react';
import { companyLogos } from '../../configs/companyLogos';

function LogoCarousel() {
  const [start, setStart] = React.useState(0);
  const visible = 5;
  const maxStart = Math.max(0, companyLogos.length - visible);
  const handlePrev = () => setStart(s => Math.max(0, s - 1));
  const handleNext = () => setStart(s => Math.min(maxStart, s + 1));
  return (
    <>
      <div className="d-flex align-items-center justify-content-center" style={{position:'relative', minHeight: '120px'}}>
        <button onClick={handlePrev} className="btn btn-link p-0 mx-2" style={{position:'absolute',left:0,top:'50%',transform:'translateY(-50%)',zIndex:2}} disabled={start===0} aria-label="Previous">
          <span style={{fontSize:'2rem',color: start===0?'#ccc':'#ff8000'}}>&lt;</span>
        </button>
        <div className="d-flex flex-row justify-content-center w-100" style={{gap:'1.5rem'}}>
          {companyLogos.slice(start, start+visible).map((logo, i) => (
            <div key={logo.alt} className="bg-white d-flex align-items-center justify-content-center border rounded" style={{height:90, width:160}}>
              <img src={logo.src} alt={logo.alt} style={{maxHeight:60, maxWidth:120, objectFit:'contain'}} />
            </div>
          ))}
        </div>
        <button onClick={handleNext} className="btn btn-link p-0 mx-2" style={{position:'absolute',right:0,top:'50%',transform:'translateY(-50%)',zIndex:2}} disabled={start===maxStart} aria-label="Next">
          <span style={{fontSize:'2rem',color: start===maxStart?'#ccc':'#ff8000'}}>&gt;</span>
        </button>
      </div>
      <div className="d-flex justify-content-center mt-3">
        {Array.from({length: companyLogos.length-4}).map((_,i) => (
          <span key={i} style={{display:'inline-block',width:12,height:12,borderRadius:'50%',background:(i===start?'#ff8000':'#1566b1'),margin:'0 4px'}}></span>
        ))}
      </div>
    </>
  );
}

export default LogoCarousel;