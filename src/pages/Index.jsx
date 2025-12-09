import Logo1 from '../assets/companies/Logo1.jpg'
import Logo2 from '../assets/companies/Logo2.png'
import Logo3 from '../assets/companies/Logo3.png'

// Placeholder logos (use your own in assets for production)
const companyLogos = [
    {src: Logo1, alt: 'Avalara' },
    {src: Logo2, alt: 'Fiserv' },
    {src: Logo3, alt: 'Nagarro' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Bajaj_Auto_logo.png', alt: 'Bajaj' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Birlasoft_logo.png', alt: 'Birlasoft' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/CSC_logo.png', alt: 'CSC' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Cognizant_logo.png', alt: 'Cognizant' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Aon_Hewitt_logo.png', alt: 'Hewitt' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg', alt: 'IBM' },
];

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
      {/* Dots for carousel position */}
      <div className="d-flex justify-content-center mt-3">
        {Array.from({length: companyLogos.length-4}).map((_,i) => (
          <span key={i} style={{display:'inline-block',width:12,height:12,borderRadius:'50%',background:(i===start?'#ff8000':'#1566b1'),margin:'0 4px'}}></span>
        ))}
      </div>
    </>
  );
}

import AB from '../assets/trainers/AB.jpg'

// Trainers data and carousel
const trainers = [
  { name: 'Ashutosh Bhadauria', title: 'Senior Dev Instructor & Fullstack Mentor', img: AB, message: 'An internship or certification will never guarantee a placement in a company. But a strong grasp of fundamentals makes you a versatile problem-solver — Build strong foundation.' },
  { name: 'Akancha Rathore', title: 'Data Science Lead', img: 'https://i.pravatar.cc/300?img=12', message: 'DevOps is about culture and automation — I help learners adopt both.' },
  { name: 'Anvesha Nigam', title: 'AI Engineer', img: 'https://i.pravatar.cc/300?img=32', message: 'Data intuition matters more than tools — I teach how to think with data.' },
  { name: 'Anurag Verma', title: 'Cloud & DevOps Trainer', img: 'https://i.pravatar.cc/300?img=40', message: 'From API design to UI polish — I mentor developers end-to-end.' },
  { name: 'Saurabh Rai', title: 'Lead QA', img: 'https://i.pravatar.cc/300?img=18', message: 'Security-first mindset keeps your projects resilient and trustworthy.' },
  { name: 'Priya Srivastav', title: 'Security Specialist', img: 'https://i.pravatar.cc/300?img=8', message: 'I help learners prototype ML features and deploy them responsibly.' },
];

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
import React from 'react'
import { Link } from 'react-router-dom'
import ccLogo from '../assets/ccLogo.png'
// Courses data and UI
const courses = [
  { id:1, title: '.NET / EF Core - 60+ Practical Interview Questions', category: 'OTHER', desc: 'Learn best coding practice with .NET Core MVC / EF core and C# fundamentals with Practical .NET Interview Questions', lessons:70, duration:'2Hr 40min', tag:'OTHER' },
  { id:2, title: 'SignalR - The Complete Guide', category: 'OTHER', desc: 'Learn SignalR fundamentals by building 8 projects with SignalR in .NET Core and MVC. (.NET 7)', lessons:65, duration:'5hr', tag:'OTHER' },
  { id:3, title: 'Full Stack Developer Bootcamp - React 19 and .NET 10 API', category: 'FULL STACK', desc: 'Complete Guide to learning React with .NET API (A full stack development track). Learn by building 10 projects!', lessons:350, duration:'21hr', tag:'FULL STACK' },
  { id:4, title: 'React for Beginners', category: 'REACT', desc: 'Intro to React, hooks, and building component-driven apps', lessons:45, duration:'8hr', tag:'REACT' },
  { id:5, title: 'Azure Fundamentals', category: 'AZURE', desc: 'Get started with Azure cloud services and deployments', lessons:20, duration:'4hr', tag:'AZURE' },
  { id:6, title: 'Blazor Hands-on', category: 'BLAZOR', desc: 'Build web apps with Blazor and .NET', lessons:30, duration:'6hr', tag:'BLAZOR' },
];

function CoursesSection() {
  const [filter, setFilter] = React.useState('ALL');
  const [q, setQ] = React.useState('');
  const categories = ['ALL','OTHER','REACT','BLAZOR','MVC','AZURE','VUE','RAZOR','FULL STACK'];
  const visible = courses.filter(c => (filter==='ALL' || c.category===filter) && (c.title.toLowerCase().includes(q.toLowerCase()) || c.desc.toLowerCase().includes(q.toLowerCase())));
  return (
    <>
      <div className="d-flex flex-column flex-md-row align-items-center justify-content-between mb-4 gap-3">
        <div className="d-flex flex-wrap gap-2">
          {categories.map(cat => (
            <button key={cat} className={`btn ${filter===cat? 'btn-primary' : 'btn-outline-secondary'}`} onClick={() => setFilter(cat)}>{cat}</button>
          ))}
        </div>
        <div className="ms-auto" style={{minWidth:240}}>
          <div className="input-group">
            <span className="input-group-text">🔍</span>
            <input className="form-control" placeholder="Search courses..." value={q} onChange={e=>setQ(e.target.value)} />
          </div>
        </div>
      </div>

      <div className="row g-4">
        {visible.map(course => (
          <div className="col-12 col-md-6 col-lg-4" key={course.id}>
            <div className="card shadow-sm h-100">
              <div style={{height:160, background:'#f2f3f5'}} className="d-flex align-items-center justify-content-center">
                <div style={{width:'100%',height:'100%',backgroundImage:'linear-gradient(90deg,#f5f7fa,#eef1f6)'}}></div>
              </div>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{course.title}</h5>
                <p className="text-muted flex-grow-1">{course.desc}</p>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <div className="text-secondary">▶ {course.lessons} videos</div>
                  <div className="text-secondary">{course.duration}</div>
                </div>
                <div className="mt-3 d-flex gap-2">
                  <button className="btn btn-primary flex-grow-1">BUY NOW</button>
                  <button className="btn btn-outline-dark">Details</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {visible.length===0 && <p className="text-center text-muted mt-4">No courses found.</p>}
    </>
  );
}

export default function Index() {
  return (
    <div>
      {/* Navbar: icon left, menu right */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm">
        <div className="container-fluid">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img src={ccLogo} alt="logo" width="50" height="40" className="d-inline-block align-text-top me-2" />
            <span className="fw-bold">Coding Cosmos</span>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/index#courses">Courses</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">Register</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard">Dashboard</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Carousel: display images and text captions */}
      <div id="indexCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#indexCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#indexCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#indexCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?w=1200&q=80&auto=format&fit=crop" className="d-block w-100" alt="code editor" style={{maxHeight: '60vh', objectFit: 'cover'}} />
            <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-2">
              <h5>Build with Confidence</h5>
              <p>Tools, tutorials and projects to grow your coding skills.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1200&q=80&auto=format&fit=crop" className="d-block w-100" alt="teamwork" style={{maxHeight: '60vh', objectFit: 'cover'}} />
            <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-2">
              <h5>Collaborate</h5>
              <p>Share projects, learn together and ship faster.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={ccLogo} className="d-block w-100" alt="branding" style={{maxHeight: '60vh', objectFit: 'contain', background: '#f8f9fa'}} />
            <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-2">
              <h5>Our Brand</h5>
              <p>Welcome to Coding Cosmos — explore our content.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#indexCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#indexCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Feature controls strip (like the attachment) */}
      <section className="bg-primary text-white">
        <div className="container">
          <div className="row text-white gy-3 py-3 align-items-center">
            <div className="col-12 col-md-6 col-lg-3 d-flex align-items-start">
              <div className="me-3" style={{width:48}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" className="text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v2M7 4v2M17 4v2M5 8a7 7 0 0014 0c0-2.5-1.5-4-3-5" />
                </svg>
              </div>
              <div style={{paddingTop: '76px'}}>
                <div className="fw-bold">Learn The</div>
                <div>Essential Skills</div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3 d-flex align-items-start">
              <div className="me-3" style={{width:48}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" className="text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c3 0 5-1 6-2-1 4-3 6-6 6s-5-2-6-6c1 1 3 2 6 2z" />
                </svg>
              </div>
              <div>
                <div className="fw-bold">Earn Certificates</div>
                <div>And Degrees</div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3 d-flex align-items-start">
              <div className="me-3" style={{width:48}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" className="text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422M12 14v7" />
                </svg>
              </div>
              <div>
                <div className="fw-bold">Get Ready for The</div>
                <div>Next Career</div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3 d-flex align-items-start">
              <div className="me-3" style={{width:48}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" className="text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4 8 5.79 8 8s1.79 4 4 4z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 20v-1a4 4 0 014-4h4a4 4 0 014 4v1" />
                </svg>
              </div>
              <div>
                <div className="fw-bold">Master at</div>
                <div>Different Areas</div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
  )
}
