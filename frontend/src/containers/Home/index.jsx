import Presentation from "../../components/Presentation";
import NavigationBar from "../../components/Navigation/Navigation";
import AboutUs from "../../components/AboutUs";
import Pricing from "../../components/Pricing/index";
import ContactUs from "../../components/ContactUs/index";
import Footer from "../../components/Footer/Footer";

export function Home() {
  return (
    <div>
      <NavigationBar />
      <Presentation />
      <AboutUs />
      <Pricing />
      <ContactUs />
      <Footer />
    </div>
  );
}
