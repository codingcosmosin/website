import React from 'react';
import { courses } from '../../configs/courses';

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

export default CoursesSection;