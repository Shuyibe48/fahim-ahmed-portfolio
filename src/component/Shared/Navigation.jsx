import { FaHome } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { MdOutlineDesignServices } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import { GrProjects } from "react-icons/gr";
import { MdContactMail } from "react-icons/md";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const navLinks = [
  {
    id: 1,
    link: "home",
    navLink: "/",
    icon: <FaHome />,
    delay: 0.2,
  },
  {
    id: 2,
    link: "about",
    navLink: "/about",
    icon: <ImProfile />,
    delay: 0.3,
  },
  {
    id: 3,
    link: "services",
    navLink: "/services",
    icon: <MdOutlineDesignServices />,
    delay: 0.4,
  },
  {
    id: 4,
    link: "skills",
    navLink: "/skills",
    icon: <GiSkills />,
    delay: 0.5,
  },
  {
    id: 5,
    link: "showcase",
    navLink: "/showcase",
    icon: <GrProjects />,
    delay: 0.6,
  },
  {
    id: 7,
    link: "contact",
    navLink: "/contact",
    icon: <MdContactMail />,
    delay: 0.8,
  },
];

const Navigation = () => {
  return (
    <div className="flex flex-col gap-y-4 h-screen fixed left-2 top-4">
      <NavLink to="/">
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 120, duration: 5 }}
          className="flex justify-start items-center"
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
      <div className="flex flex-col gap-2">
        {navLinks.map((navLink) => {
          return (
            <NavLink
              to={navLink.navLink}
              key={navLink.id}
              className={({ isActive }) =>
                isActive
                  ? "text-[#55e6a5] text-[10px] md:text-[12px] uppercase flex justify-s items-center gap-2"
                : "text-[#A2A2A2] text-[10px] md:text-[12px] uppercase flex justify-s items-center gap-2"
              }
            >
              <span className="text-[20px] rounded-md">{navLink.icon}</span>
              <span className="">{navLink.link}</span>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default Navigation;
