import Business from "./Business";
import LandingPage from "./LandingPage";
import Portfolio from "./Portfolio";

const AllProjects = () => {
  return (
    <div className="space-y-10">
      <Business />
      <LandingPage />
      <Portfolio />
    </div>
  );
};

export default AllProjects;
