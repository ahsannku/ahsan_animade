import { NavLink } from "react-router-dom";
const Mission = () => {
  return (
    <section className="bg-mission py-20 relative">
      <div className="bg-gradient-to-b from-[#140E18]  to-[#140E1800] absolute top-0  w-full h-[400px]"></div>
      <div className="bg-gradient-to-t from-[#140E18]  to-[#140E1800] absolute bottom-0 bg-opacity-70 w-full h-[400px]"></div>
      <div className=" text-center custom-container relative z-10">
        <h2 className="text-center laptop:text-5.5xl tablet:text-4.4xl text-2xl mb-4">
          Our
          <span className="gradient-text "> Mission</span>
        </h2>
        <p className="text-xl font-semibold text-white text-center tablet:w-1/2 tablet:mx-auto">
          Empowering artists and entrepreneurs to create a fairer, more
          accessible art world.
        </p>
        <div
          className="flex justify-between items-center flex-col-reverse tablet:flex-row text-left  mt-4 gap-10"
          data-aos="zoom-in"
        >
          <div className="pr-6 w-full tablet:w-1/2">
            <img
              src="/assets/images/yellow-circle.png"
              className="w-8/12 absolute -left-[20%] -z-10 -top-[10%]"
              alt=""
            />
            <h5 className="text-2xl font-bold mb-2">At our core</h5>
            <p className="mb-2">
              We are driven by the mission of empowering AI artists and
              entrepreneurs to interact with cutting-edge technology and drive
              sales through a simple, user-friendly monetization platform.
            </p>
            <p className="mb-2">
              We believe that by leveraging the power of AI, we can democratize
              access to the world of digital art and enable a new generation of
              creators to realize their full potential.
            </p>
            <p className="mb-2">
              Our platform is designed to simplify the process of creating and
              selling digital art, providing artists with the tools and
              resources they need to thrive in a rapidly-evolving digital
              landscape.
            </p>
            <p className="mb-2">
              We are committed to driving innovation and pushing the boundaries
              of what is possible in the world of AI-powered digital art, and we
              invite you to join us on this exciting journey!
            </p>
            <div className="mt-12 w-48">
              <NavLink to={"/about-us"}>
                <a
                  href=""
                  style={{border: '2px solid rgb(199 0 37 / 1)'}}
                  className="btn-lg hover:text-primary  hover:bg-transparent border-2 border-primary duration-300 bg-primary text-center justify-center text-white text-base flex items-center font-semibold "
                >
                  More About Us
                </a>
              </NavLink>
            </div>
          </div>
          <img
            src="/assets/images/red-cricle.png"
            className="absolute top-1/2 right-0 -z-10 w-1/2"
            alt=""
          />
          <div className="relative w-3/4 tablet:w-1/2">
            <img src="/assets/images/our-misson-side.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
