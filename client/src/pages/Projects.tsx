const Projects = () => {
  const projects = [
    {
      title: "Modern Residential Villa",
      location: "Bangalore",
      type: "Architecture",
      description: "A contemporary villa design that seamlessly blends modern aesthetics with traditional Indian elements.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Corporate Office Interiors",
      location: "Mumbai",
      type: "Interior Design",
      description: "Innovative workspace design promoting collaboration and productivity in a tech company headquarters.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Sustainable Garden Resort",
      location: "Goa",
      type: "Landscape Design",
      description: "Eco-friendly resort design integrating natural landscapes with luxury hospitality experiences.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Heritage Home Renovation",
      location: "Mysore",
      type: "Architecture",
      description: "Careful restoration and modernization of a century-old heritage property while preserving its character.",
      image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Boutique Hotel Interiors",
      location: "Chennai",
      type: "Interior Design",
      description: "Luxury boutique hotel design featuring local art and craftsmanship in contemporary settings.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Urban Rooftop Gardens",
      location: "Delhi",
      type: "Landscape Design",
      description: "Transforming urban rooftops into green sanctuaries with sustainable gardening solutions.",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-12 md:py-20">
        <div className="mb-16">
          <h1 className="text-aakaara-text font-playfair text-[32px] md:text-[40px] leading-[40px] md:leading-[48px] font-normal mb-4">
            Our Projects
          </h1>
          <p className="text-aakaara-text text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] font-normal max-w-[700px]">
            Explore our portfolio of architectural marvels, innovative interiors, and sustainable landscapes that showcase our commitment to excellence and creativity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="overflow-hidden mb-4">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-start">
                  <h3 className="text-aakaara-text font-playfair text-[18px] font-medium leading-[24px]">
                    {project.title}
                  </h3>
                  <span className="text-aakaara-text/60 text-[12px] font-normal">
                    {project.type}
                  </span>
                </div>
                <p className="text-aakaara-text/80 text-[14px] font-normal leading-[20px]">
                  {project.location}
                </p>
                <p className="text-aakaara-text text-[14px] font-normal leading-[20px]">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-aakaara-dark-brown text-aakaara-light-brown mt-16">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-8">
          <h2 className="font-playfair text-[28px] md:text-[32px] leading-[38px] font-normal border-b border-aakaara-light-brown/30 pb-4 mb-6">
            Ar. Shivangi Shivakumar
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] font-normal">
            <div>+91 99726 81819</div>
            <div>contact@aakaarastudio.in</div>
            <div>
              Nagasandra,<br />
              Bangalore- 560073.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Projects;