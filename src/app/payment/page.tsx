import React from "react";
import Image from "next/image";
import { CreditCard, HelpCircle } from "lucide-react";

const Payment = () => {
  return (
    <div className="flex items-center justify-center ">
      <div className="max-w-6xl  w-full ">
        <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
          <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
            <div className="mx-auto max-w-5xl">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
                Payment
              </h2>

              <div className="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12">
                <form className="w-full rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6 lg:max-w-xl lg:p-8">
                  <div className="mb-6 grid grid-cols-2 gap-4">
                    <div className="col-span-2 sm:col-span-1">
                      <label
                        htmlFor="full_name"
                        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Full name (as displayed on card)*
                      </label>
                      <input
                        type="text"
                        id="full_name"
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                        placeholder="Bonnie Green"
                        required
                      />
                    </div>

                    <div className="col-span-2 sm:col-span-1">
                      <label
                        htmlFor="card-number-input"
                        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Card number*
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="card-number-input"
                          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pe-10 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                          placeholder="xxxx-xxxx-xxxx-xxxx"
                          pattern="^4[0-9]{12}(?:[0-9]{3})?$"
                          required
                        />
                        <CreditCard className="absolute inset-y-0 right-3 h-5 w-5 text-gray-500 dark:text-gray-400" />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="card-expiration-input"
                        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Card expiration*
                      </label>
                      <input
                        type="text"
                        id="card-expiration-input"
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 ps-9 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                        placeholder="12/23"
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="cvv-input"
                        className="mb-2 flex items-center gap-1 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        CVV*
                        <HelpCircle className="h-4 w-4 text-gray-400 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white" />
                      </label>
                      <input
                        type="number"
                        id="cvv-input"
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                        placeholder="•••"
                        required
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Pay now
                  </button>
                </form>

                <div className="mt-6 grow sm:mt-8 lg:mt-0">
                  <div className="space-y-4 rounded-lg border border-gray-100 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800">
                    <div className="space-y-2">
                      <dl className="flex items-center justify-between gap-4">
                        <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                          Original price
                        </dt>
                        <dd className="text-base font-medium text-gray-900 dark:text-white">
                          $6,592.00
                        </dd>
                      </dl>

                      <dl className="flex items-center justify-between gap-4">
                        <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                          Savings
                        </dt>
                        <dd className="text-base font-medium text-green-500">
                          -$299.00
                        </dd>
                      </dl>

                      <dl className="flex items-center justify-between gap-4">
                        <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                          Store Pickup
                        </dt>
                        <dd className="text-base font-medium text-gray-900 dark:text-white">
                          $99
                        </dd>
                      </dl>

                      <dl className="flex items-center justify-between gap-4">
                        <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                          Tax
                        </dt>
                        <dd className="text-base font-medium text-gray-900 dark:text-white">
                          $799
                        </dd>
                      </dl>
                    </div>

                    <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                      <dt className="text-base font-bold text-gray-900 dark:text-white">
                        Total
                      </dt>
                      <dd className="text-base font-bold text-gray-900 dark:text-white">
                        $7,191.00
                      </dd>
                    </dl>
                  </div>

                  <div className="mt-6 flex items-center justify-center gap-8">
                    <Image
                      className="h-8 w-auto dark:hidden"
                      src="/images/banner3.png"
                      alt="PayPal"
                      width={80}
                      height={32}
                    />
                    <Image
                      className="hidden h-8 w-auto dark:flex"
                      src="/images/banner3.png"
                      alt="PayPal Dark"
                      width={80}
                      height={32}
                    />
                    <Image
                      className="h-8 w-auto dark:hidden"
                      src="/images/banner3.png"
                      alt="Visa"
                      width={80}
                      height={32}
                    />
                    <Image
                      className="hidden h-8 w-auto dark:flex"
                      src="/images/banner3.png"
                      alt="Visa Dark"
                      width={80}
                      height={32}
                    />
                    <Image
                      className="h-8 w-auto dark:hidden"
                      src="/images/banner3.png"
                      alt="MasterCard"
                      width={80}
                      height={32}
                    />
                    <Image
                      className="hidden h-8 w-auto dark:flex"
                      src="/images/banner3.png"
                      alt="MasterCard Dark"
                      width={80}
                      height={32}
                    />
                  </div>
                </div>
              </div>

              <p className="mt-6 text-center text-gray-500 dark:text-gray-400 sm:mt-8 lg:text-left">
                Payment processed by{" "}
                <a
                  href="#"
                  className="font-medium text-primary-700 underline hover:no-underline dark:text-primary-500"
                >
                  Paddle
                </a>{" "}
                for{" "}
                <a
                  href="#"
                  className="font-medium text-primary-700 underline hover:no-underline dark:text-primary-500"
                >
                  Flowbite LLC
                </a>{" "}
                - United States Of America
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Payment;
