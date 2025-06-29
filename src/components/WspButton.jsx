const WspButton = () => {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=+5491126922128&text=Hola%20Jazmin,%20una%20consulta:"
      target="_blank"
      className="z-50 fixed right-6 md:right-12 lg:right-8 bottom-12 md:bottom-8 cursor-pointer animate-pulse w-12 h-12 md:w-14 md:h-14"
      aria-label="Whatsapp boton"
    >
      <span
        className="icon-[logos--whatsapp-icon] h-12 w-12"
        role="img"
        aria-hidden="true"
      ></span>
    </a>
  );
};

export default WspButton;
