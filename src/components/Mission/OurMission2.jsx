const OurMission2 = () => {
    return (
      <section className="py-12 tablet:py-20">
        <div className=" text-center custom-container relative z-10">
          <div className="grid grid-cols-1 tablet:grid-cols-2 text-left items-center gap-10">
            <div
              className="relative"
              data-aos-duration="1000"
              data-aos="fade-right"
            >
              <img src="/assets/images/our-misson-side.png" alt="" />
            </div>
            <div className="pr-6" data-aos-duration="1000" data-aos="fade-left">
              <div className="bg-[#213851] pl-2 pr-4 py-2 rounded-full w-fit flex gap-4 items-center justify-between mb-4">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_234_4415)">
                      <rect
                        x="30"
                        y="30"
                        width="30"
                        height="30"
                        rx="15"
                        transform="rotate(180 30 30)"
                        fill="white"
                      />
                      <path
                        d="M20.25 15L9.75 15"
                        stroke="#213851"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M20.25 15L15.75 10.5"
                        stroke="#213851"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M20.25 15L15.75 19.5"
                        stroke="#213851"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_234_4415">
                        <rect
                          x="30"
                          y="30"
                          width="30"
                          height="30"
                          rx="15"
                          transform="rotate(180 30 30)"
                          fill="white"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <h6 className="font-light">Our Mission</h6>
              </div>
              <h5 className="text-4xl font-bold mb-4 leading-tight pr-8 laptop:pr-0">
                Empowering artists & entrepreneurs
              </h5>
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
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default OurMission2;
  