const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-start px-6 md:px-12 py-12 md:py-20">
        {/* Main Content */}
        <div className="flex-1 pr-0 md:pr-20">
          <h1 className="text-aakaara-text font-playfair text-[24px] md:text-[28px] leading-[32px] md:leading-[38px] font-normal mb-4">
            Redefining Spaces with Expertise in Architecture, Interiors, and Landscape Design.
          </h1>
          <p className="text-aakaara-text text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] font-normal mb-6 max-w-[600px]">
            Crafting bespoke solutions that seamlessly blend functionality, aesthetics, and sustainability — across scales, climates, and cultures.
          </p>
          <div className="text-aakaara-text text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] font-normal max-w-[600px]">
            <p className="mb-1">Our Services</p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <span className="font-semibold">Architectural Planning</span><br />
                Shaping spaces with purpose and vision.
              </li>
              <li>
                <span className="font-semibold">Interior Design</span><br />
                Creating interiors that seamlessly blend aesthetics and practicality.
              </li>
              <li>
                <span className="font-semibold">Landscape Design</span><br />
                Crafting sustainable landscapes that celebrate the natural context.
              </li>
            </ul>
          </div>
        </div>

        {/* Right Sidebar */}
        <aside className="bg-aakaara-dark-brown w-[220px] mt-12 md:mt-0 flex flex-col justify-center items-center relative min-h-[400px]">
          <div className="absolute top-6 left-4 text-aakaara-light-brown text-[14px] font-normal space-y-4">
            <p>Architecture</p>
            <p>Interior</p>
            <p>Landscape</p>
          </div>
          <div className="absolute bottom-6 right-4 font-playfair text-[48px] font-normal vertical-text leading-[48px] select-none text-aakaara-light-brown">
            aakaara
          </div>
        </aside>
      </div>

      {/* Footer */}
      <footer className="bg-aakaara-dark-brown text-aakaara-light-brown">
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

export default Home;
