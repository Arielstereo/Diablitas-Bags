const Incentives = () => {
  return (
    <section className="">
      <div className="mx-auto border-b-2 border-gray-300">
        <div className="p-6">
          <div className="grid grid-cols-12 text-center">
            <div className="col-span-12 sm:col-span-6 lg:col-span-4">
              <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                <div className="p-6 md:p-12">
                  <div className="text-5xl">
                    <i
                      className="icon-[tdesign--shop]"
                      role="img"
                      aria-hidden="true"
                    ></i>
                  </div>
                  <h3 className="my-4 text-2xl font-medium">Reservá</h3>
                  <p className="text-sm text-gray-500 w-64 mx-auto">
                    * Tu producto por la web mediante nuestro WhatsApp.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-6 lg:col-span-4">
              <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                <div className="p-6 md:p-12">
                  <div className="text-5xl">
                    <span
                      className="icon-[carbon--delivery]"
                      role="img"
                      aria-hidden="true"
                    ></span>
                  </div>
                  <h3 className="my-4 text-2xl font-medium">
                    Entregas sin cargo
                  </h3>
                  <p className="text-sm text-gray-500 w-64 mx-auto">
                    * En CABA para compras mayor a $45.000.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-6 lg:col-span-4">
              <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                <div className="p-6 md:p-12">
                  <div className="text-5xl">
                    <span
                      className="icon-[streamline-ultimate--cash-payment-bills-bold]"
                      role="img"
                      aria-hidden="true"
                    ></span>
                  </div>
                  <h3 className="my-4 text-2xl font-medium">Aboná</h3>
                  <p className="text-sm text-gray-500 w-64 mx-auto">
                    * Cuando recibis o retirás tu pedido con efectivo o
                    transferencia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Incentives;
