import React from "react";
import AboutMe from "./components/pages/AboutMe";
import MyContacts from "./components/pages/ContactInfo";
import MyPortfolio from "./components/pages/Portfolio";
import MyResume from "./components/pages/Resume";

const routes = {
    "#about": () => <AboutMe />,
    "#resume": () => <MyResume />,
    "#portfolio": () => <MyPortfolio />,
    "#contacts": () => <MyContacts />
}

export default routes;