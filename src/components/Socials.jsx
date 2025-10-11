import Image from "next/image";

const Socials = () => {
  return (
    <section className="relative py-16 mx-2 md:mx-4 bg-slate-950 shadow-2xl ">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-32">
          <div className="flex flex-col justify-center items-center gap-2 md:gap-8 text-slate-100">
            <h2 className="text-2xl md:text-4xl font-bold text-center">
              Seguinos en Instagram
            </h2>
            <a
              href="https://www.instagram.com/diablitas.bags/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex gap-2 text-center items-center">
                <h1 className="text-2xl lg:text-3xl hover:font-semibold bg-gradient-to-r from-pink-500 via-yellow-500 to-purple-600 bg-clip-text text-transparent">
                  @diablitas.bags
                </h1>
              </div>
            </a>
          </div>
          <div className="mx-4">
            <Image
              src="/tini.jpeg"
              alt="diablitas image"
              width={600}
              height={400}
              className="object-fit opacity-90"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Socials;
