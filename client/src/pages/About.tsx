const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white">
      {/* Full-width Brown Header Strip */}
      <div className="w-full aakaara-brown py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-left">
            <h1 className="text-5xl md:text-6xl font-light text-white mb-8 leading-tight font-quicksand">
              Crafting<br />
              Inspired<br />
              Spaces
            </h1>
          </div>
        </div>
      </div>

      {/* About Content */}
      <div className="py-16 bg-aakaara-light">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center md:justify-start">
                {/* Circular profile image of the founder */}
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400"
                  alt="Ar. Shivangi Shivakumar - Founder of Aakaara Architecture"
                  className="w-80 h-80 rounded-full object-cover shadow-lg"
                />
              </div>

              <div className="space-y-6">
                <div className="text-aakaara-text text-lg leading-relaxed">
                  Since its inception in 2020, Aakaara Architecture has established itself as a
                  distinguished name in architecture, interior design, and landscape design. Rooted in
                  creativity and precision, the firm aspires to leave its mark across diverse cities and
                  environments. Over the years, Aakaara has remained steadfast in its commitment to
                  innovation, craftsmanship, and client trust — with a singular vision: to design spaces
                  that inspire, endure, and elevate everyday living.
                </div>

                <div className="mt-8 pt-6 border-t border-aakaara-brown/20">
                  <h3 className="text-2xl font-medium text-aakaara-brown mb-2">
                    Ar. Shivangi Shivakumar
                  </h3>
                  <p className="text-aakaara-text font-medium">Founder & Principal Architect</p>
                </div>
              </div>
            </div>

            <div className="mt-16 grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-white/60 rounded-lg">
                <h4 className="text-3xl font-bold text-aakaara-brown mb-2">50+</h4>
                <p className="text-aakaara-text">Projects Completed</p>
              </div>
              <div className="text-center p-6 bg-white/60 rounded-lg">
                <h4 className="text-3xl font-bold text-aakaara-brown mb-2">5+</h4>
                <p className="text-aakaara-text">Years of Excellence</p>
              </div>
              <div className="text-center p-6 bg-white/60 rounded-lg">
                <h4 className="text-3xl font-bold text-aakaara-brown mb-2">10+</h4>
                <p className="text-aakaara-text">Cities Served</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
