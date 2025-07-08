import Image from "next/image";

const Footer = () => {
  return (
    <div>
      <footer className="border-t py-12 bg-black text-white">
        <div className="container flex justify-center items-center mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">Envíos s/cargo</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <p>Montecastro</p>
                </li>
                <li>
                  <p>Liniers</p>
                </li>
                <li>
                  <p>Villa Devoto</p>
                </li>
                <li>
                  <p>Villa Luro</p>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Contacto</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <p>11-2692-2128</p>
                </li>
                <li>
                  <p>@diablitas.bags</p>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Medios de pago</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <p>Mercado pago</p>
                </li>
                <li>
                  <p>Transferencia</p>
                </li>
                <li>
                  <p>Efectivo</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center">
            <Image
              src="/logo_red.png"
              alt="Logo de Jazmin Bags"
              width={32}
              height={32}
              className="mx-auto w-16"
            />
            <div className="text-2xl font-bold pt2">DIABLITA'S BAGS</div>
          </div>
        </div>
      </footer>
      <div className="bg-slate-100 text-black py-2 text-center w-full">
        Creado por{" "}
        <a
          href="https://empren.dev"
          className="hover:text-sky-600"
          target="_blank"
        >
          EmprenDev
        </a>{" "}
        | 2025
      </div>
    </div>
  );
};

export default Footer;
