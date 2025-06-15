import { BgEffect } from "@/components/ui/BgEffect";
import { Button2 } from "@/components/ui/Button";
import { FormUid } from "@/components/ui/FormUid";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="px-3.5 md:p-0">
      <BgEffect className="absolute -translate-28 md:-translate-x-72 md:-translate-y-[18rem]" />
      <div className="container h-[90vh] mx-auto flex flex-col md:flex-row gap-10 pt-12 md:p-0">
        {/* Left Side of Hero Section */}
        <div className="md:flex-5/12 space-y-6 md:space-y-8 md:mt-16">
          <p className="font-semibold text-xl md:text-2xl text-primary">
            Digital Bank ___
          </p>
          <h2 className="text-4xl md:text-6xl font-semibold md:font-bold font-body md:pe-20 md:leading-18 text-text dark:text-dark-text">
            Smart Banking to Manage Your Money & Transections
          </h2>
          <p className="md:text-xl font-body text-text-secondary dark:text-dark-text-secondary">
            "A fast, secure, and smart way to deposit, track expenses, and
            manage your money — all in one platform."
          </p>

          <div className="space-x-10">
            <Button2>Get Started</Button2>
            <Button2>Learn More</Button2>
          </div>
        </div>

        {/* Right Side of Hero Section */}
        <div className="md:flex-1/2 w-full flex flex-col items-center md:ms-20">
          <FormUid />
          <Image
            src="/images/robot-hand.png"
            width={1000}
            height={1000}
            alt="hand Image"
            className="-me-7 md:-me-0 md:absolute md:right-0 md:bottom-28 w-[100%] md:w-[45%] -z-10"
          />
        </div>
      </div>
    </section>
  );
};
