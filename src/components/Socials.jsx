const Socials = () => {
  return (
    <section className="relative py-16 bg-gray-950 opacity-90 text-white mx-2 md:mx-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center">
            Seguinos en Instagram
          </h2>
          <a
            href="https://www.instagram.com/jazmin_bags/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex gap-2 text-center items-center">
              <i
                className="icon-[skill-icons--instagram] w-8 h-8"
                role="img"
                aria-hidden="true"
              ></i>
              <p className="text-xl font-semibold">@diablitas.bags</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Socials;
