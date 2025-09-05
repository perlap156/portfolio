import React, { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
        <a href="#top">
            <h2 className="heading--sm color--black">PO<span className="color--accent">.</span></h2>
        </a>
        <div className="header-left">
            {/* Hamburger Button */}
            <button
                className={`hamburger ${menuOpen ? "active" : ""}`}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            {/* Navigation */}
            <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
                <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
                <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
                <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
            </nav>

            <ThemeToggle />
        </div>

    </header>
  );
};

export default Header;


