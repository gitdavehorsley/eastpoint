import { useState } from 'react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      category: "Roofing",
      title: "Modern Asphalt Shingle Roof",
      image: "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "Complete roof replacement with architectural shingles for a residential property in Richmond.",
      location: "Henrico County",
      completed: "January 2025"
    },
    {
      id: 2,
      category: "Siding",
      title: "Vinyl Siding Installation",
      image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "New vinyl siding installation with insulation for improved energy efficiency.",
      location: "Chesterfield",
      completed: "December 2024"
    },
    {
      id: 3,
      category: "Decks",
      title: "Custom Backyard Deck",
      image: "https://images.unsplash.com/photo-1591825729269-caeb344f6df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "Custom-designed composite deck with built-in seating and pergola.",
      location: "Richmond",
      completed: "November 2024"
    },
    {
      id: 4,
      category: "Roofing",
      title: "Metal Roof Installation",
      image: "https://images.unsplash.com/photo-1620228885847-9eab2a1adddc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "Durable metal roof installation for a modern farmhouse style home.",
      location: "Hanover County",
      completed: "October 2024"
    },
    {
      id: 5,
      category: "Siding",
      title: "Fiber Cement Siding",
      image: "https://images.unsplash.com/photo-1604709177225-055f99402ea3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "Premium fiber cement siding installation with custom trim work.",
      location: "Midlothian",
      completed: "September 2024"
    },
    {
      id: 6,
      category: "Decks",
      title: "Multi-Level Deck Design",
      image: "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "Pressure-treated wood deck with multiple levels and built-in planters.",
      location: "Glen Allen",
      completed: "August 2024"
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'Roofing', label: 'Roofing' },
    { id: 'Siding', label: 'Siding' },
    { id: 'Decks', label: 'Decks' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="section portfolio-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Recent Projects</h2>
          <div className="section-subtitle">
            Take a look at some of our recent roofing, siding, and deck projects in the Richmond area.
          </div>
        </div>

        <div className="portfolio-filters">
          {filters.map(filter => (
            <button
              key={filter.id}
              className={`portfolio-filter ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="portfolio-item">
              <div className="portfolio-image-container">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="portfolio-image"
                />
                <div className="portfolio-overlay">
                  <div className="portfolio-category-badge">
                    {project.category}
                  </div>
                  <div className="portfolio-details">
                    <h3 className="portfolio-title">{project.title}</h3>
                    <div className="portfolio-meta">
                      <span className="portfolio-location">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {project.location}
                      </span>
                      <span className="portfolio-date">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {project.completed}
                      </span>
                    </div>
                    <p className="portfolio-description">{project.description}</p>
                    <a href="#contact" className="portfolio-cta">
                      Request Similar Project
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="portfolio-cta-container">
          <a 
            href="#contact" 
            className="btn btn-primary btn-lg"
          >
            Start Your Project Today
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ marginLeft: '0.5rem' }}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
