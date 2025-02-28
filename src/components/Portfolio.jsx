const Portfolio = () => {
  const projects = [
    {
      id: 1,
      category: "Roofing",
      title: "Modern Asphalt Shingle Roof",
      image: "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "Complete roof replacement with architectural shingles for a residential property in Richmond."
    },
    {
      id: 2,
      category: "Siding",
      title: "Vinyl Siding Installation",
      image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "New vinyl siding installation with insulation for improved energy efficiency."
    },
    {
      id: 3,
      category: "Decks",
      title: "Custom Backyard Deck",
      image: "https://images.unsplash.com/photo-1591825729269-caeb344f6df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "Custom-designed composite deck with built-in seating and pergola."
    },
    {
      id: 4,
      category: "Roofing",
      title: "Metal Roof Installation",
      image: "https://images.unsplash.com/photo-1620228885847-9eab2a1adddc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "Durable metal roof installation for a modern farmhouse style home."
    },
    {
      id: 5,
      category: "Siding",
      title: "Fiber Cement Siding",
      image: "https://images.unsplash.com/photo-1604709177225-055f99402ea3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "Premium fiber cement siding installation with custom trim work."
    },
    {
      id: 6,
      category: "Decks",
      title: "Multi-Level Deck Design",
      image: "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "Pressure-treated wood deck with multiple levels and built-in planters."
    }
  ];

  return (
    <section id="portfolio" className="section">
      <div className="container">
        <h2 className="section-title">Our Projects</h2>
        <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 2rem' }}>
          Take a look at some of our recent roofing, siding, and deck projects in the Richmond area.
        </p>

        <div className="portfolio-items">
          {projects.map((project) => (
            <div key={project.id} className="portfolio-item">
              <div style={{ position: 'relative' }}>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="portfolio-image"
                />
                <div className="portfolio-category">
                  {project.category}
                </div>
              </div>
              <div className="portfolio-content">
                <h3 className="portfolio-title">{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <a 
            href="#contact" 
            className="btn btn-primary"
            style={{ padding: '0.75rem 2rem', fontSize: '1.125rem' }}
          >
            Start Your Project Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
