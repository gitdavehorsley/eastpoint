import { useState } from 'react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  // For a production site, these images should be hosted on AWS S3 with CloudFront CDN
  // This would require setting up an S3 bucket and CloudFront distribution
  // For now, we're using reliable placeholder images
  const projects = [
    {
      id: 1,
      category: "Roofing",
      title: "Residential Shingle Roof Installation",
      image: "https://images.pexels.com/photos/5417837/pexels-photo-5417837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Complete roof replacement with architectural shingles for a small residential property in Richmond.",
      location: "Henrico County",
      completed: "January 2025"
    },
    {
      id: 2,
      category: "Siding",
      title: "Vinyl Siding Renovation",
      image: "https://pfqstatic.s3.us-east-1.amazonaws.com/eastpoint/dhorsley_image_of_siding_being_replaced_on_a_house_by_a_profe_e7317b0d-6f54-4e2a-bcd3-17d5b588101d_2.png",
      description: "Professional siding replacement by our experienced crew, ensuring proper installation and weatherproofing.",
      location: "Chesterfield",
      completed: "December 2024"
    },
    {
      id: 3,
      category: "Decks",
      title: "Backyard Deck Construction",
      image: "https://pfqstatic.s3.us-east-1.amazonaws.com/eastpoint/dhorsley_image_of_a_deck_being_built_by_a_professional_crew_-_c4b75d30-6b55-4ef9-9c41-4c36802cb08c_2.png",
      description: "Custom-designed deck being built by our professional crew, with attention to detail and quality craftsmanship.",
      location: "Richmond",
      completed: "November 2024"
    },
    {
      id: 4,
      category: "Roofing",
      title: "Roof Repair Project",
      image: "https://pfqstatic.s3.us-east-1.amazonaws.com/eastpoint/dhorsley_oof_Repair_Project_Hanover_County_October_2024_Detai_ff648d35-9847-4e20-9a0a-090c5a040ca9_0.png",
      description: "Detailed roof repair work showing our team in action on a small residential property.",
      location: "Hanover County",
      completed: "October 2024"
    },
    {
      id: 5,
      category: "Siding",
      title: "Craftsman Trim Detail",
      image: "https://images.pexels.com/photos/534228/pexels-photo-534228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Close-up of premium trim work and corner details on a siding installation project.",
      location: "Midlothian",
      completed: "September 2024"
    },
    {
      id: 6,
      category: "Decks",
      title: "Deck Renovation Before/After",
      image: "https://pfqstatic.s3.us-east-1.amazonaws.com/eastpoint/dhorsley_Deck_Renovation_BeforeAfter_Glen_Allen_August_2024_C_92923096-92a5-431d-9d28-5be5abd4cb43_0.png",
      description: "Complete transformation of an aging deck into a beautiful outdoor living space.",
      location: "Glen Allen",
      completed: "August 2024"
    },
    {
      id: 7,
      category: "Roofing",
      title: "Roofing Material Selection",
      image: "https://images.pexels.com/photos/6480707/pexels-photo-6480707.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Close-up detail of quality roofing materials we use on our residential projects.",
      location: "Richmond",
      completed: "July 2024"
    },
    {
      id: 8,
      category: "Siding",
      title: "Small Home Exterior Makeover",
      image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Before and after transformation of a small home with new siding and trim work.",
      location: "Chesterfield",
      completed: "June 2024"
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
