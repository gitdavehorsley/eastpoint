const Services = () => {
  const services = [
    {
      id: 1,
      title: "Roofing",
      description: "Professional roof installation, repair, and replacement services using high-quality materials for lasting protection.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      features: [
        "Asphalt shingle installation",
        "Metal roofing solutions",
        "Roof repairs and maintenance",
        "Leak detection and prevention",
        "Gutter installation and repair"
      ]
    },
    {
      id: 2,
      title: "Siding",
      description: "Enhance your home's appearance and protection with our professional siding installation and repair services.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      features: [
        "Vinyl siding installation",
        "Fiber cement siding",
        "Siding repair and replacement",
        "Insulated siding options",
        "Custom trim and finishing"
      ]
    },
    {
      id: 3,
      title: "Decks",
      description: "Custom deck design and construction to create the perfect outdoor living space for your home.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      features: [
        "Custom deck design",
        "Pressure-treated wood decks",
        "Composite decking options",
        "Deck repair and restoration",
        "Railings and stairs installation"
      ]
    }
  ];

  return (
    <section id="services" className="section bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            East Point Construction provides high-quality roofing, siding, and deck services to homeowners in Richmond and surrounding counties.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="service-card bg-white rounded-lg shadow-md p-6 flex flex-col"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-primary mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="mt-auto space-y-2">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-5 w-5 text-accent mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a 
                href="#contact" 
                className="mt-6 text-center py-2 px-4 bg-primary text-white rounded hover:bg-opacity-90 transition-colors"
              >
                Request Service
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
