import { FaBook } from "react-icons/fa";
import { motion } from "framer-motion";
import Container from "../utils/Container";
import SectionTitle from "../utils/SectionTitle";

const About = () => {
  return (
    <Container>
      <motion.div>
        <SectionTitle
          title={"ABOUT ME"}
          description={"Crafting stories through design and innovation"}
        />

        <div className="grid grid-cols-12 gap-6 items-center">
          <div className="col-span-12 md:col-span-6">
            <div>
              <div>
                {/* <img src="/public/about_1.png" alt="" /> */}
              </div>

              <div>
                <h2 className="h">My Ambition</h2>
                <p className="p">
                  Hello there! I'm Fahim Ahmed, a skilled MERN stack web
                  developer. With over a year of hands-on experience in web
                  development, I'm not just hardworking but totally dedicated.
                  When you choose to collaborate with me, expect nothing less
                  than my absolute best to bring your web projects to life
                  effortlessly. Got questions? Feel free to shoot me a message
                  anytime!
                </p>
              </div>
            </div>

            <div>
              <div>
                {/* <img src="../assets/about_1.png" alt="fahim ahemd" /> */}
              </div>

              <div>
                <div>
                  <h2 className="h">My Purpose</h2>
                  <p className="p">
                    I'm not just hardworking but totally dedicated. When you
                    choose to collaborate with me, expect nothing less than my
                    absolute best to bring your web projects to life
                    effortlessly.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6">
            <div className="relative aboutImage">
              <div className="about-bg bg-cover bg-center h-[500px] w-[500px]">
                {/* <img src="../../../public/about_img_2.png" alt="fahim" /> */}
              </div>
              <div className="bg-[#55E6A5] rounded-lg absolute -bottom-8 right-0 px-4 py-2">
                <div className="flex justify-center gap-x-4 items-center">
                  <button className="text-3xl text-[#55E6A5] bg-cyan-50 p-4 rounded-lg">
                    <span className="text-black">
                      <FaBook />
                    </span>
                  </button>
                  <div>
                    <h1 className="text-3xl font-bold">2+</h1>
                    <h4 className="text-xl font-semibold">
                      Years Of Experience
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Container>
  );
};

export default About;
