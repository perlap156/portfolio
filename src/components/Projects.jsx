import React from "react";
import ProjectCard from "./ProjectCard";


const Projects = () => (
  <section id="projects" className="projects container">
    <div className="heading-wrapper heading-wrapper--light">
        <h2 className="heading--med">Projects</h2>
    </div>
    <div className="project-wrapper">
    <ProjectCard
        title="Hey! I'm Trans"
        alt="Screenshot of Hey! I'm Trans Homepage"
        description="Lead Developer for the Hey! I'm Trans website, building modular WordPress blocks and patterns to create a scalable, user-friendly platform that empowers individuals to share their authentic selves."
        link="https://heyimtrans.com/"
        image="../assets/images/heyimtrans.png"
        projectStack="WordPress · Custom Theme development"
      />
      <ProjectCard
        title="DCI Donor Services"
        alt="Screenshot of DCI Donor Services Homepage"
        description="Built and maintained a multi-site WordPress implementation with a shared custom theme, supporting four websites with unique color schemes, branding, and block variations."
        link="https://www.dcids.org/"
        image="../assets/images/dcids.png"
        projectStack="Multi-site WordPress · Custom Theme development"
      />
      <ProjectCard
        title="New Mexico Donor Services"
        alt="Screenshot of New Mexico Donor Services Homepage"
        description="Implemented a custom WordPress carousel for New Mexico Donor Services to highlight individual donors, honoring them and their families with a dynamic, accessible showcase."
        link="https://donatelifenm.org/"
        image="../assets/images/nm-donor-services.png"
        projectStack="Multi-site WordPress · Custom Theme development"
      />
      <ProjectCard
        title="Sierra Donor Services"
        alt="Screenshot of Sierra Donor Services Homepage"
        description="Developed a dynamic donor wall feature for Sierra Donor Services that auto-refreshes to honor life-saving donors, later adapted and implemented across multiple related sites."
        link="https://sierradonor.org/"
        image="../assets/images/sierra-donor-services.png"
        projectStack="Multi-site WordPress · Custom Theme development"
      />
      <ProjectCard
        title="Tennessee Donor Services"
        alt="Screenshot of Tennessee Donor Services Homepage"
        description="Built an events management feature for Tennessee Donor Services, enabling creation and display of events, which was later replicated across other sites for consistency and scalability."
        link="https://tennesseedonor.org/"
        image="../assets/images/tds.png"
        projectStack="Multi-site WordPress · Custom Theme development"
      />
        <ProjectCard
        title="phade"
        alt="Screenshot of phade Homepage"
        description="Developed reusable WordPress blocks for consistent content across the site and integrated Shopify products into WordPress to streamline e-commerce functionality."
        link="https://www.phadeproducts.com/"
        image="../assets/images/phade.png"
        projectStack="Shopify · WordPress · Custom Theme development"
      />
      <ProjectCard
        title="Mainetti"
        alt="Screenshot of Mainetti Homepage"
        description="Participated in a full WordPress redesign, creating and refactoring reusable blocks and cleaning up legacy code to ensure consistent design and efficient content management across the site."
        link="https://www.mainetti.com/"
        image="../assets/images/mainetti.png"
        projectStack="WordPress · Custom Theme development"
      />
        <ProjectCard
        title="Music City Solar"
        alt="Screenshot of Music City Solar Homepage"
        description="Redesigned the homepage and developed reusable WordPress blocks to streamline future site updates and ensure consistent design across pages."
        link="https://gosolarmusiccity.com/"
        image="../assets/images/music-city-solar.png"
        projectStack="WordPress · Custom Theme development"
      />
    </div>
  </section>
);

export default Projects;
