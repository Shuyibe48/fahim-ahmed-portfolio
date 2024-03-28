import { NavLink, Outlet } from "react-router-dom";
import Navigation from "../component/Shared/Navigation";
import { motion } from "framer-motion";
import { useState } from "react";

const HomeLayout = () => {
  const [fold, setFold] = useState(true);

  return (
    <div className="lg:grid grid-cols-12">
      <div className="block lg:hidden mt-4 absolute top-2 left-4">
        <div className="flex justify-between items-center gap-20 bg-[#09101A] px-4 py-2 rounded-3xl">
          <NavLink to="/">
            <motion.div
              initial={{ y: -100 }}
              animate={{ y: 0 }}
              transition={{ type: "spring", stiffness: 120, duration: 5 }}
              className="flex justify-start items-center col-span-1"
            >
              <motion.img
                initial={{ x: 100 }}
                animate={{ x: 0 }}
                transition={{ type: "spring", duration: 2 }}
                className="w-[25px] h-[25px]"
                src="/public/logo.png"
                alt="Logo"
              />
              <motion.h1
                initial={{ x: -100 }}
                animate={{ x: 0 }}
                transition={{ type: "spring", duration: 4 }}
                className="text-[#55e6a5] font-bold"
              >
                FAHIM
              </motion.h1>
            </motion.div>
          </NavLink>
          <div onClick={() => setFold(!fold)} className="text-[#55e6a5]">
            <div className={`${fold ? "block" : "hidden"}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </div>
            <div className={`${fold ? "hidden" : "block"}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className={`${fold? 'hidden': 'block'}`}>
          <Navigation />
        </div>
      </div>
      <div className="col-span-2 hidden lg:block">
        <Navigation />
      </div>
      <div className="col-span-10">
        <Outlet />
      </div>
    </div>
  );
};

export default HomeLayout;
