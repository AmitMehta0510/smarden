import AboutCompany from "./AboutCompany";
import Animation from "./Animation";
import Categories from "./Categories";
import Features from "./Features";
import MobileApp from "./MobileApp";

const Body = () => {
  return (
    <div className="main-container">
      <Animation />
      <AboutCompany />
      <Categories />
      <MobileApp />
      <Features />
    </div>
  );
};

export default Body;
