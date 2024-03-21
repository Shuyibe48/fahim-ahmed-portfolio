import { FaPlay } from "react-icons/fa";
import TextSpan from "../../component/Animate/TextSpan";
import { motion } from "framer-motion";
import Container from "../../utils/Container";

const headingLetter1 = `HI,`.split("");
const headingLetter2 = `I'M FAHIM!`.split("");
const headingLetter3 = `WEB`.split("");
const headingLetter4 = `DEVELOPER`.split("");

const Banner = () => {
  return (
    <div className="banner-bg">
      <Container className="flex justify-self-center items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 2 }}
          id="#"
        >
          <div>
            <div>
              <motion.h1
                initial={{ x: -100 }}
                animate={{ x: 0 }}
                transition={{
                  delay: 0.5,
                  duration: 1,
                  type: "spring",
                  stiffness: 120,
                }}
                className="h"
              >
                <span>
                  {headingLetter1.map((letter, idx) => {
                    return (
                      <TextSpan key={idx}>
                        {letter === " " ? "\u00A0" : letter}
                      </TextSpan>
                    );
                  })}
                </span>

                <span className="block">
                  {headingLetter2.map((letter, idx) => {
                    return (
                      <TextSpan key={idx}>
                        {letter === " " ? "\u00A0" : letter}
                      </TextSpan>
                    );
                  })}
                </span>
                <span>
                  {headingLetter3.map((letter, idx) => {
                    return (
                      <TextSpan key={idx}>
                        {letter === " " ? "\u00A0" : letter}
                      </TextSpan>
                    );
                  })}
                </span>
                <span className="m-4 text-[#55E6A5]">
                  {headingLetter4.map((letter, idx) => {
                    return (
                      <TextSpan key={idx}>
                        {letter === " " ? "\u00A0" : letter}
                      </TextSpan>
                    );
                  })}
                </span>
              </motion.h1>
              <motion.p
                initial={{ x: -100 }}
                animate={{ x: 0 }}
                transition={{
                  delay: 0.5,
                  duration: 1,
                  type: "spring",
                  stiffness: 120,
                }}
                className="p"
              >
                I'm a passionate UI/UX designer with a mission to create
                delightful and intuitive digital experiences. With a strong
                foundation in design principles and a keen eye for detail, I
                specialize in translating complex ideas into user-friendly
                interfaces that captivate and engage.
              </motion.p>
              <div className="flex items-center gap-x-4 md:gap-x-5 lg:gap-x-6">
                <motion.button
                  initial={{ y: 200 }}
                  animate={{ y: 0 }}
                  transition={{
                    delay: 0.5,
                    duration: 1,
                    type: "spring",
                    stiffness: 120,
                  }}
                  className="bg-[#55E6A5] text-[8px] md:text-[10px] lg:text-[12px]  font-semibold p-2 md:p-4 w-[80px] md:w-[96px] lg:w-[110px]"
                >
                  Download CV
                </motion.button>
                <motion.div
                  initial={{ y: 200 }}
                  animate={{ y: 0 }}
                  transition={{
                    delay: 0.5,
                    duration: 1,
                    type: "spring",
                    stiffness: 120,
                  }}
                  className="flex items-center gap-x-2"
                >
                  <span className="text-black inline-block bg-[#55E6A5] p-3 md:p-4 rounded-full text-[8px] md:text-[10] lg:text-[12px]">
                    <FaPlay />
                  </span>
                  <p className="text-cyan-50 font-semibold text-[12px]">
                    Watch The Video
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </div>
  );
};

export default Banner;
