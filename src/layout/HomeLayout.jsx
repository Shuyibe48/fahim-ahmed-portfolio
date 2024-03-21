import { Outlet } from "react-router-dom";
import Navigation from "../component/Shared/Navigation";

const HomeLayout = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-1">
        <Navigation />
      </div> 
      <div className="col-span-11">
        <Outlet />
      </div>
    </div>
  );
};

export default HomeLayout;
