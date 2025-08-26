import React from "react";

const Incentives = () => {
  return (
    <section className="my-4 lg:my-16 lg:mx-8">
      <div className="mx-auto py-8">
        <div className="flex flex-col lg:flex-row gap-16 py-6">
          {/* Reservá */}
          <div className="flex flex-col justify-center items-center gap-4 w-full">
            <i
              className="icon-[tdesign--shop] text-5xl"
              role="img"
              aria-hidden="true"
            ></i>
            <div className="flex flex-col justify-center items-center gap-4">
              <h3 className="text-lg lg:text-2xl font-medium text-center">
                Reservá
              </h3>
              <p className="text-sm text-gray-500 text-wrap w-3/4 text-center mx-auto">
                Tu producto por la web mediante nuestro WhatsApp
              </p>
            </div>
          </div>
          {/* Entregas sin cargo */}
          <div className="flex flex-col justify-center items-center gap-4 w-full">
            <span
              className="icon-[carbon--delivery] text-5xl"
              role="img"
              aria-hidden="true"
            ></span>
            <div className="flex flex-col justify-center items-center gap-4">
              <h3 className="text-lg lg:text-2xl text-center font-medium">
                Entregas sin cargo
              </h3>
              <p className="text-sm text-gray-500 text-wrap w-3/4 text-center mx-auto">
                En Floresta, Liniers, Montecastro y Villa Devoto.
              </p>
            </div>
          </div>
          {/* Aboná */}
          <div className="flex flex-col justify-center items-center gap-4 w-full">
            <span
              className="icon-[streamline-ultimate--cash-payment-bills-bold] text-5xl"
              role="img"
              aria-hidden="true"
            ></span>
            <div className="flex flex-col justify-center items-center gap-4">
              <h3 className="text-lg lg:text-2xl text-center font-medium">
                Aboná
              </h3>
              <p className="text-sm text-gray-500 text-wrap w-3/4 text-center mx-auto">
                Cuando recibís tu pedido, en efectivo o transferencia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Incentives;
