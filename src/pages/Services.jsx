import { FaDiceSix } from "react-icons/fa";
import { FaDeezer } from "react-icons/fa";
import { FaMailchimp } from "react-icons/fa";
import { animate, motion } from "framer-motion";
import SectionTitle from "../utils/SectionTitle";
import Container from "../utils/Container";

const services = [
  {
    id: 1,
    icon: <FaDiceSix />,
    serviceName: "website design",
    description:
      "Nemo design enim ipsam voluptatem quim voluptas sit aspernaturaut odit auting fugit sed thisnquia consequuntur magni doloreseos designer heresm qui",
  },
  {
    id: 2,
    icon: <FaDeezer />,
    serviceName: "website development",
    description:
      "Nemo design enim ipsam voluptatem quim voluptas sit aspernaturaut odit auting fugit sed thisnquia consequuntur magni doloreseos designer heresm qui",
  },
  {
    id: 3,
    icon: <FaMailchimp />,
    serviceName: "website maintain",
    description:
      "Nemo design enim ipsam voluptatem quim voluptas sit aspernaturaut odit auting fugit sed thisnquia consequuntur magni doloreseos designer heresm qui",
  },
];

const Services = () => {
  return (
    <Container>
      <motion.div>
        <SectionTitle
          title={"MY SERVICE"}
          description={"Crafting stories through design and innovation"}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-6">
          {services.map((service) => {
            return (
              <div
                className="bg-[#09101A] p-8 rounded-md h-[290px] relative"
                key={service.id}
              >
                <button className="icon absolute -top-10">
                  {service.icon}
                </button>
                <div>
                  <h3 className="text-cyan-50 text-2xl font-medium mb-4">
                    {service.serviceName}
                  </h3>
                  <p className="text-[#A2A2A2] text-sm leading-snug">
                    {service.description}
                  </p>
                </div>
                <div className="absolute bottom-4">
                  <button className="hover:text-cyan-50 hover:bg-[#02050A] text-[#09101A] text-xs px-4 py-2 bg-[#55E6A5] font-medium">
                    Hire me
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </Container>
  );
};

export default Services;
