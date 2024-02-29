import React from "react";
import Navbar from "../../components/navbar.component";
import Footer from "../../components/footer-component";
// import tap from "../../src/assets/provide-access-to-clean-and-safe-water.png";
import tap from "../../assets/provide-access-to-clean-and-safe-water.png";

const About = () => {
  return (
    <div>
      <div className="mx-[3%]">
        <Navbar />
        <div className="mx-auto sm:max-w-xl md:max-w-5xl lg:max-w-5xl xl:max-w-5xl md:container">
          <div className=" md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-2 ">
            <div className="!gap-3 justify-start ">
              <h1 className=" text-3xl sm:text-4xl font-bold ">What we are?</h1>
              <p className="mt-6 text-gray-800 justify-start leading-8 text-2xl font-semibold">
                ZakatChain is a platform that leverages the power of blockchain
                technology to facilitate safe, efficient and transparent Zakat &
                Sadaqah payments and disbursements.
              </p>
              <p className="text-gray-700 font-semibold leading-7 pt-3">
                We strive to reach out to every possible person in need (the
                poor, the displaced, the challenged, etc), most especially
                muslims around the world through donations from crypto users.
              </p>
            </div>
            {/* for the bent image  */}
            <div className="img-cont">
              <img src={tap} alt="bent image" />
            </div>
          </div>

          <div className="flex flex-col justify-center items-center border rounded-2xl m-auto p-5 gap-5 nft_page">
            <h1 className="text-2xl sm:text-4xl font-bold">Our Story:</h1>
            <h2 className="text-2xl sm:text-3xl font-semibold">
              ZakatChain is born out of the pristine Islamic spirit.
            </h2>
            <p className=" leading-7 font-semibold ">
              Every day, 25,000 people including over 10,000 people die from
              hunger and poverty. That's more 15 deaths per minute, causing more
              casualties than any war or disaster witnessed on earth. As Muslims
              who are commanded to lookout for mankind, ZakatChain was conceived
              to help tackle this dire plight through the facilitation of
              transparent charity, and the revival of the true essence of
              charity which is to increase Taqwah, Purification of wealth,
              blurring the gap between the rich and the legitimate recipients as
              mentioned in Q9 vs 9. We want to cater for the overall well being
              of Muslims, Non-muslims all around the world.
            </p>
          </div>

          <div className=" md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-2 my-16">
            <div className="w-auto justify-center items-center">
              <img src={tap} alt="how we operate" />
            </div>
            <div className="!gap-3 !justify-start ">
              <h1 className="text-2xl sm:text-4xl font-bold">
                How we operate:
              </h1>
              <p className="mt-6 text-gray-800 justify-start leading-8 text-2xl font-semibold">
                Through our easy to navigate platform, we get Zakat & Sadaqah
                through to those who need it regardless of their location and
                according to their needs.
              </p>
              <p className="text-gray-700 font-semibold leading-7 pt-3">
                We leverage the different reliable and trusted platforms (e.g
                Muslim Relief, Kaid Charity, BabusSalaam Orphanage e.t.c) to get
                to those in need. Our users (donators), can monitor how and what
                causes their funds are channeled into. We serve as the channel
                between your charity and its recipients.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
