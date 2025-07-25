import { Banner } from "../_components/banner";
import { Navbar } from "../_components/navbar/navbar";

export const Header = () => {
  return (
    <header className="sticky top-0">
      <Banner />
      <Navbar />
    </header>
  );
};
