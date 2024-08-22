import { Footer } from "../Footer/Footer";
import { Menu } from "../Menu/Menu";
import { SeccionIni } from "../seccion/SeccionIni";
import { Team } from "../Team/Team";

export const TeamPant = () => {
  return (
    <div>
      <Menu />
      <SeccionIni nombre= "About Us" />
      <Team />
      <Footer />
    </div>
  );
}