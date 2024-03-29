import React, { useState } from "react";
import NavItems from "./NavItems";
import Contact from "./Contact Form/Contact";
import Portfolio from "./Portfolio";
import Resume from "./Resume";
import About from "./About";
import background from "../images/ContentContainer.jpg";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("");

  const renderPage = () => {
    // if (currentPage === "Contact") {
    //   return <Contact />;
    // }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
    return <About />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <div>
        <NavItems
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      </div>
      <div
        className="content"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
        }}
      >
        {renderPage()}
      </div>
    </div>
  );
}
