const About = () => {
  const stats = [
    { id: 1, value: "15+", label: "Years Experience" },
    { id: 2, value: "500+", label: "Projects Completed" },
    { id: 3, value: "100%", label: "Customer Satisfaction" },
    { id: 4, value: "5-Star", label: "Average Rating" }
  ];

  return (
    <section id="about" className="section bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <div>
            <h2 className="section-title text-left">About East Point Construction</h2>
            <p className="text-lg text-gray-600 mb-6">
              East Point Construction is a trusted provider of high-quality roofing, siding, and deck services in Richmond and surrounding counties. With over 15 years of experience, we've built a reputation for excellence in craftsmanship and customer service.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Our team of skilled professionals is dedicated to delivering exceptional results on every project. We use only the highest quality materials and follow industry best practices to ensure your home improvements stand the test of time.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              At East Point Construction, we believe in transparent pricing, clear communication, and attention to detail. We treat every home as if it were our own, providing personalized service and solutions tailored to your specific needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="btn btn-primary inline-block px-6 py-3"
              >
                Get a Free Estimate
              </a>
              <a 
                href="tel:8048745821" 
                className="btn bg-white border border-primary text-primary inline-block px-6 py-3 hover:bg-gray-100 transition-colors flex items-center justify-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                804-874-5821
              </a>
            </div>
          </div>
          
          {/* Stats and Image */}
          <div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Construction team" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
              
              {/* Stats overlay */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {stats.map((stat) => (
                  <div 
                    key={stat.id} 
                    className="bg-white p-6 rounded-lg shadow-md text-center"
                  >
                    <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Why Choose Us */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-primary mb-8 text-center">Why Choose East Point Construction?</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-accent mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-primary mb-2">Quality Guaranteed</h4>
              <p className="text-gray-600">We stand behind our work with industry-leading warranties and guarantees.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-accent mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-primary mb-2">On-Time Completion</h4>
              <p className="text-gray-600">We respect your time and complete projects according to schedule.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-accent mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-primary mb-2">Competitive Pricing</h4>
              <p className="text-gray-600">Fair and transparent pricing with no hidden fees or surprises.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-accent mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-primary mb-2">Expert Craftsmanship</h4>
              <p className="text-gray-600">Skilled professionals with years of experience in the industry.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
