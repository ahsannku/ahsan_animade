import ContactUs from "../../components/ContactUs";
import { Header, Footer } from "../../components";
import AOS from "aos";
import { useEffect } from "react";
const ContactUsPage = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <main>
      <Header />
      <div className="py-20">
        <ContactUs />
      </div>
      <Footer />
    </main>
  );
};

export default ContactUsPage;
