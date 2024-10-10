import React from "react";
import Image from "next/image";
import { CreditCard, HelpCircle } from "lucide-react";
import BreadcrumbBar from "@/components/BreadCrumbComponent";
import { Input } from "@/components/ui/input"; // Using ShadCN input component

const Payment = () => {
  return (
    <div className="flex items-center pb-10 justify-center">
      <div className="max-w-6xl w-full">
        <BreadcrumbBar />

        <section className="bg-background antialiased md:py-16">
          <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
            <div className="mx-auto max-w-5xl">
              <div className="mt-6 lg:mt-0 sm:mt-8 lg:flex lg:items-start lg:gap-12">
                <form className="w-full rounded-lg border border-border bg-background p-4 shadow-sm sm:p-6 lg:max-w-xl lg:p-8">
                  <div className="mb-6 grid grid-cols-2 gap-4">
                    <div className="col-span-2 sm:col-span-1">
                      <label
                        htmlFor="full_name"
                        className="mb-2 block text-sm font-medium text-foreground"
                      >
                        Full name (as displayed on card)*
                      </label>
                      <Input
                        type="text"
                        id="full_name"
                        placeholder="Bonnie Green"
                        required
                      />
                    </div>

                    <div className="col-span-2 sm:col-span-1">
                      <label
                        htmlFor="card-number-input"
                        className="mb-2 block text-sm font-medium text-foreground"
                      >
                        Card number*
                      </label>
                      <div className="relative">
                        <Input
                          type="text"
                          id="card-number-input"
                          placeholder="xxxx-xxxx-xxxx-xxxx"
                          pattern="^4[0-9]{12}(?:[0-9]{3})?$"
                          required
                        />
                        <CreditCard className="absolute inset-y-0 right-3 h-5 w-5 text-gray-500" />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="card-expiration-input"
                        className="mb-2 block text-sm font-medium text-foreground"
                      >
                        Card expiration*
                      </label>
                      <Input
                        type="text"
                        id="card-expiration-input"
                        placeholder="12/23"
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="cvv-input"
                        className="mb-2 flex items-center gap-1 text-sm font-medium text-foreground"
                      >
                        CVV*
                        <HelpCircle className="h-4 w-4 text-gray-400 hover:text-foreground" />
                      </label>
                      <Input
                        type="number"
                        id="cvv-input"
                        placeholder="•••"
                        required
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="flex w-full items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-foreground hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300"
                  >
                    Pay now
                  </button>
                </form>

                <div className="mt-6 grow sm:mt-8 lg:mt-0">
                  <div className="space-y-4 rounded-lg border border-border bg-background p-6">
                    <div className="space-y-2">
                      <dl className="flex items-center justify-between gap-4">
                        <dt className="text-base font-normal text-gray-500">
                          Original price
                        </dt>
                        <dd className="text-base font-medium text-foreground">
                          $6,592.00
                        </dd>
                      </dl>

                      <dl className="flex items-center justify-between gap-4">
                        <dt className="text-base font-normal text-gray-500">
                          Savings
                        </dt>
                        <dd className="text-base font-medium text-green-500">
                          -$299.00
                        </dd>
                      </dl>

                      <dl className="flex items-center justify-between gap-4">
                        <dt className="text-base font-normal text-gray-500">
                          Store Pickup
                        </dt>
                        <dd className="text-base font-medium text-foreground">
                          $99
                        </dd>
                      </dl>

                      <dl className="flex items-center justify-between gap-4">
                        <dt className="text-base font-normal text-gray-500">
                          Tax
                        </dt>
                        <dd className="text-base font-medium text-foreground">
                          $799
                        </dd>
                      </dl>
                    </div>

                    <dl className="flex items-center justify-between gap-4 border-t border-border pt-2">
                      <dt className="text-base font-bold text-foreground">
                        Total
                      </dt>
                      <dd className="text-base font-bold text-foreground">
                        $7,191.00
                      </dd>
                    </dl>
                  </div>

                  <div className="mt-6 flex items-center justify-center gap-8">
                    <Image
                      className="h-8 w-auto"
                      src="/images/paypal.svg"
                      alt="PayPal"
                      width={80}
                      height={32}
                    />
                    <Image
                      className="h-8 w-auto"
                      src="/images/visa.svg"
                      alt="Visa"
                      width={80}
                      height={32}
                    />
                    <Image
                      className="h-8 w-auto"
                      src="/images/mastercard.svg"
                      alt="MasterCard"
                      width={80}
                      height={32}
                    />
                  </div>
                </div>
              </div>

              <p className="mt-6 text-center text-gray-500 sm:mt-8 lg:text-left">
                Payment processed by{" "}
                <a
                  href="#"
                  className="font-medium text-primary-700 underline hover:no-underline"
                >
                  Stripe
                </a>{" "}
                for{" "}
                <a
                  href="#"
                  className="font-medium text-primary-700 underline hover:no-underline"
                >
                 Omoyeni Taiwo
                </a>{" "}
                - Nigeria
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Payment;
