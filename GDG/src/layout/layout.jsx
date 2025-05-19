import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Header from "../components/header";
import SectionOne from "../components/sectionOne";
import SectionTwo from "../components/sectionTwo";
import SectionThree from "../components/sectionThree";
import SectionFour from "../components/sectionFour";
import SectionFive from "../components/sectionFive";
import SectionSix from "../components/sectionSix";
import Footer from "../components/footer.jsx";
const Layout = () => {
  return (
    <Box>
      <Header />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <Footer />
       
      <Box as="main" p={4} >
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
