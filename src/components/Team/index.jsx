import Image from "/assets/imdr.png";
import Image1 from "/assets/imdg.png";

const Team = () => {
  return (
    <section className="custom-container relative z-10">
      <h2 className="text-4xl font-bold mb-10">Meet The Animade Team</h2>
      <div className="grid grid-cols-4 gap-4">
        <div data-aos-duration="1000" data-aos="zoom-in">
          <img src={Image1} alt="slide__image" />
          <h6 className="font-bold text-xl mt-2">Luca Bertuzzi</h6>
          <p className="text-[#9C9A9E] text-base">
            Founder & Technical Director
          </p>
        </div>
        <div data-aos-duration="1300" data-aos="zoom-in">
          <img src={Image} alt="slide__image" />
          <h6 className="font-bold text-xl mt-2">Benjamin Ellis</h6>
          <p className="text-[#9C9A9E] text-base">
            Founder & Managing Director
          </p>
        </div>
      </div>
    </section>
  );
};

export default Team;
