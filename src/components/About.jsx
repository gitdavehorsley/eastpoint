const About = () => {
  const stats = [
    { id: 1, value: "15+", label: "Years Experience" },
    { id: 2, value: "500+", label: "Projects Completed" },
    { id: 3, value: "100%", label: "Customer Satisfaction" },
    { id: 4, value: "5-Star", label: "Average Rating" }
  ];

  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="about-content">
          {/* About Content */}
          <div>
            <h2 className="section-title" style={{ textAlign: 'left' }}>About East Point Construction</h2>
            <div className="about-text">
              <p>
                East Point Construction is a trusted provider of high-quality roofing, siding, and deck services in Richmond and surrounding counties. With over 15 years of experience, we've built a reputation for excellence in craftsmanship and customer service.
              </p>
              <p>
                Our team of skilled professionals is dedicated to delivering exceptional results on every project. We use only the highest quality materials and follow industry best practices to ensure your home improvements stand the test of time.
              </p>
              <p>
                At East Point Construction, we believe in transparent pricing, clear communication, and attention to detail. We treat every home as if it were our own, providing personalized service and solutions tailored to your specific needs.
              </p>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <a 
                href="#contact" 
                className="btn btn-primary"
                style={{ display: 'inline-block', width: 'fit-content' }}
              >
                Get a Free Estimate
              </a>
              <a 
                href="tel:8048745821" 
                className="btn"
                style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  width: 'fit-content',
                  backgroundColor: 'white',
                  color: 'var(--primary-color)',
                  border: '1px solid var(--primary-color)'
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="currentColor" style={{ marginRight: '0.5rem' }}>
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                804-874-5821
              </a>
            </div>
          </div>
          
          {/* Stats and Image */}
          <div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Construction team" 
                className="about-image"
              />
              
              {/* Stats */}
              <div className="stats">
                {stats.map((stat) => (
                  <div 
                    key={stat.id} 
                    className="stat-item"
                  >
                    <div className="stat-value">{stat.value}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Why Choose Us */}
        <div style={{ marginTop: '5rem' }}>
          <h3 style={{ fontSize: '1.75rem', fontWeight: 'bold', color: 'var(--primary-color)', marginBottom: '2rem', textAlign: 'center' }}>
            Why Choose East Point Construction?
          </h3>
          
          <div className="features">
            <div className="feature">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="feature-title">Quality Guaranteed</h4>
              <p>We stand behind our work with industry-leading warranties and guarantees.</p>
            </div>
            
            <div className="feature">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="feature-title">On-Time Completion</h4>
              <p>We respect your time and complete projects according to schedule.</p>
            </div>
            
            <div className="feature">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="feature-title">Competitive Pricing</h4>
              <p>Fair and transparent pricing with no hidden fees or surprises.</p>
            </div>
            
            <div className="feature">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h4 className="feature-title">Expert Craftsmanship</h4>
              <p>Skilled professionals with years of experience in the industry.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
