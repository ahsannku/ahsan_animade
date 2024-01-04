import { OurMission2, AboutHero, Team, Header, Footer } from "../../components";
import Particle from "../../components/Particle";

const Aboutus = () => (
  <>
    {" "}
    <div className="!overflow-hidden">
      <Header />
      <AboutHero />
      <div className="flex justify-center">
        <div className="laptop:w-[950px] w-full aos-init aos-animate" data-aos="fade-right" data-aos-duration="1000">
          <div className="player" style={{ width: "100%", height: "100%" }}>
            <video
              src="https://animade-ten.vercel.app/assets/videos/about-video.mp4"
              autoPlay={true}
              muted={true}
              style={{ width: "100%", height: "100%" }}
              />
          </div>
        </div>
      </div>
      <OurMission2 />
      <Team />
      <Particle />
      <Footer />
    </div>
  </>
);

export default Aboutus;
