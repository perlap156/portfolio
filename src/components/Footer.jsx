import React from "react";


const Footer = () => {
  const icons = [
    { icon: "fa-brands fa-github" , link: "https://github.com/perlap156", label: "GitHub" },
    { icon: "fa-brands fa-linkedin", link: "https://www.linkedin.com/in/perla-perez-orona-07221394/", label: "LinkedIn" },
    { icon: "fa-regular fa-file", link: "../assets/Perla_Orona_Resume.pdf", label: "Resume" },
  ];

  return (
    <footer className="footer">
        <div className="container">
        <hr />
        <ul>
            {icons.map(({ icon, link, label }, index) => (
                <li key={index}>
                    <a
                    key={label}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link hover-effect"
                    aria-label={label}
                    >
                       <i className={icon}></i>
                    </a>
                </li>

            ))}
        </ul>
        </div>


    </footer>
  );
};

export default Footer;


