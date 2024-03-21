import { FaPhone } from "react-icons/fa";
import { FaSearchLocation } from "react-icons/fa";
import { FaEnvelopeSquare } from "react-icons/fa";
import Container from "../utils/Container";

const contacts = [
  {
    id: 1,
    icon: <FaPhone />,
    serviceName: "Phone",
    description: "+8801828905230",
  },
  {
    id: 2,
    icon: <FaSearchLocation />,
    serviceName: "Location",
    description:
      "Dhaka 102, m eros justo, posuer oborti viverra laor house of street",
  },
  {
    id: 3,
    icon: <FaEnvelopeSquare />,
    serviceName: "24/7",
    description: "shuyibesiddiki@gmail.com",
  },
];

const Contact = () => {
  return (
    <Container className="grid grid-cols-1 gap-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
        {contacts.map((contact) => {
          return (
            <div
              className="bg-[#09101A] flex flex-col justify-center items-center px-4 py-8 h-[290px] rounded-md"
              key={contact.id}
            >
              <button className="icon">{contact.icon}</button>
              <div>
                <h3 className="text-cyan-50 text-2xl font-medium my-4">
                  {contact.serviceName}
                </h3>
                <p className="text-[#A2A2A2] text-[16px] leading-tight">
                  {contact.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <form>
        <div className="grid grid-cols-12 gap-4">
          <div className="contact-input-div">
            <input
              type="text"
              id="name"
              name="name"
              className="contact-input"
              placeholder="Your Name"
              required
            />
          </div>

          <div className="contact-input-div">
            <input
              type="email"
              id="email"
              name="email"
              className="contact-input"
              placeholder="Your Email"
              required
            />
          </div>

          <div className="contact-input-div">
            <input
              type="tel"
              id="phone"
              name="phone"
              className="contact-input"
              placeholder="Phone Number"
              required
            />
          </div>

          <div className="contact-input-div">
            <input
              type="url"
              id="website"
              name="website"
              className="contact-input"
              placeholder="Your Email"
              required
            />
          </div>

          <div className="col-span-12">
            <textarea
              id="message"
              name="message"
              rows="4"
              className="contact-input"
              placeholder="Message"
              required
            ></textarea>
          </div>
        </div>

        <div className="text-center mt-2">
          <button
            type="submit"
            className="text-[#09101A] bg-[#55E6A5] py-3 px-8 rounded-md font-medium hover:bg-white transition duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </Container>
  );
};

export default Contact;
