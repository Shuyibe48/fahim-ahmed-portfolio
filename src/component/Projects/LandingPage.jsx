const data = [
  {
    id: 1,
    title: "GYM Landing Page",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat, debitis earum corrupti exercitationem modi quidem!",
    image: "../../../public/projects-image/gym-landing-page.png",
  },
  {
    id: 2,
    title: "Doctor Portal Landing Page",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat, debitis earum corrupti exercitationem modi quidem!",
    image: "../../../public/projects-image/doctor-portal-landing-page.png",
  }
];

const LandingPage = () => {
  return (
    <div className="grid sm:grid-cols-2 gap-8 md:gap-10 lg:gap-14">
      {data.map((info) => (
        <div key={info.id} className="relative overflow-hidden showcase-card">
          <div className="h-[290px] project-card overflow-x-hidden overflow-scroll">
            <img src={info.image} alt="gym landing page" />
            <div className="absolute gradient-bg w-full bottom-0 left-0 pl-4 py-4">
              <h3 className="hh">{info.title}</h3>
              <p className="pp">{info.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LandingPage;
