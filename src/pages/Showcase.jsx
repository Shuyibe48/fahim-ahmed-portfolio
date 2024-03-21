import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Container from "../utils/Container";
import SectionTitle from "../utils/SectionTitle";
import { useState } from "react";
import LandingPage from "../component/Projects/LandingPage";
import Business from "../component/Projects/Business";
import Portfolio from "../component/Projects/Portfolio";
import AllProjects from "../component/Projects/AllProjects";

const tabItems = ["All", "Business", "Landing page", "Portfolio"];

const Showcase = () => {
  const [activeItem, setActive] = useState(tabItems[0]);
  return (
    <Container>
      <SectionTitle
        title={"MY RECENT WORKS"}
        description={
          "We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers."
        }
      />

      <div className="text-white">
        <Tabs>
          <TabList className="space-y-2 sm:space-y-0 sm:flex justify-between items-center gap-x-6 bg-[#09101A] px-6 rounded-3xl mb-8">
            {tabItems.map((tabItem) => (
              <Tab
                key={tabItem}
                className={
                  activeItem === tabItem
                    ? "cursor-pointer bg-[#55E6A5] px-2 sm:px-4 sm:py-2 sm:rounded-3xl text-[#09101A] font-semibold outline-none"
                    : "cursor-pointer font-semibold outline-none"
                }
                onClick={() => setActive(tabItem)}
              >
                {tabItem}
              </Tab>
            ))}
          </TabList>

          <TabPanel>
            <AllProjects />
          </TabPanel>
          <TabPanel>
            <Business />
          </TabPanel>
          <TabPanel>
            <LandingPage />
          </TabPanel>
          <TabPanel>
            <Portfolio />
          </TabPanel>
        </Tabs>
      </div>
    </Container>
  );
};

export default Showcase;
