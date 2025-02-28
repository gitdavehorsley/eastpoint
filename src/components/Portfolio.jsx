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
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Projects</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Take a look at some of our recent roofing, siding, and deck projects in the Richmond area.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="portfolio-item bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-accent text-primary font-semibold py-1 px-3 rounded-full text-sm">
                  {project.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="#contact" 
            className="btn btn-primary inline-block px-8 py-3 text-lg"
          >
            Start Your Project Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
