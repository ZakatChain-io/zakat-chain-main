import React, { useEffect, useState, useRef } from "react";
import { ReactComponent as ZakatPayersIcon } from "../assets/zakat-payers-grp-icon.svg";
import { ReactComponent as SadaqahPayersIcon } from "../assets/zakat-payers-grp-icon.svg";
import { ReactComponent as BeneficiariesIcon } from "../assets/beneficiaries-group-icon.svg";

const ProjectShowcase = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  const sectionRef = useRef(null);

  const startCounting = () => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const interval1 = setInterval(() => {
            setCount1((prevCount) => (prevCount < 35 ? prevCount + 1 : 35));
          }, 50);

          setTimeout(() => {
            const interval2 = setInterval(() => {
              setCount2((prevCount) => (prevCount < 2 ? prevCount + 1 : 2));
            }, 500);

            setTimeout(() => {
              const interval3 = setInterval(() => {
                setCount3((prevCount) =>
                  prevCount < 100 ? prevCount + 1 : 100
                );
              }, 10);

              return () => {
                clearInterval(interval3);
              };
            }, 500); // Delay for the third counter
          }, 500); // Delay for the second counter

          return () => {
            clearInterval(interval1);
          };
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
  };

  useEffect(() => {
    startCounting();
  }, []);

  return (
    <div
      ref={sectionRef}
      id="showcase"
      className="p-0.5 bg-gradient-to-r from-[#FF9606] from-50% to-[#17163E] mt-3"
    >
      {" "}
      <div className="bg-white bg-contain bg-no-repeat flex flex-col gap-y-7 pt-3 pb-14 px-16">
        <div className="text-center">
          <h3 className="font-semibold text-2xl">Project Showcase</h3>
          <p className="font-light text-lg">Our work speaks for us</p>
        </div>

        <div className="flex flex-col gap-y-10 md:flex-row md:justify-between md:gap-y-0">
          {/* ZAKAT PAYERS */}
          <div className="flex flex-col md:block">
            <div className="border border-[#FF9606] rounded-full py-10 px-11 text-center h-52 w-52 self-center flex flex-col justify-center md:h-auto md:w-auto">
              {/* ICON */}
              <div className="flex justify-center items-center">
                <ZakatPayersIcon />
              </div>
              <div>
                <p className="font-bold text-2xl">{count2}</p>
                <p>Zakat Payers</p>
              </div>
            </div>
            <p className="text-center mt-5 text-xl font-semibold">
              Zakat Payers
            </p>
          </div>

          {/* SADAQAH PAYERS */}
          <div className="flex flex-col">
            <div className="max-h-fit p-[1px] bg-gradient-to-b from-[#FF9606] from-20% to-[#17163E] rounded-full h-52 w-52 self-center flex flex-col justify-center md:h-auto md:w-auto">
              <div className="bg-white p-10 text-center rounded-full h-full w-full">
                {/* ICON */}
                <div className="flex justify-center items-center">
                  <SadaqahPayersIcon />
                </div>
                <div>
                  <p
                    className="font-bold text-2xl"
                    style={{ animationDelay: "1s" }}
                  >
                    {count1}
                  </p>
                  <p>Sadaqah Payers</p>
                </div>
              </div>
            </div>
            <p className="text-center mt-5 text-xl font-semibold">
              Sadaqah Payers
            </p>
          </div>

          {/* BENEFICIARIES */}
          <div className="flex flex-col">
            <div className="border border-[#17163E] rounded-full py-10 px-11 text-center h-52 w-52 self-center flex flex-col justify-center md:h-auto md:w-auto">
              {/* ICON */}
              <div className="flex justify-center items-center">
                <BeneficiariesIcon />
              </div>
              <div>
                <p
                  className="font-bold text-2xl"
                  style={{ animationDelay: "2s" }}
                >
                  {count3}+
                </p>
                <p>Beneficiaries</p>
              </div>
            </div>
            <p className="text-center mt-5 text-xl font-semibold">
              Beneficiaries
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectShowcase;
