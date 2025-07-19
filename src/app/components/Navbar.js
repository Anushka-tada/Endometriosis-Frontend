"use client"
import React from "react";
import Link from "next/link";
import { useState , useEffect} from "react";

const Navbar = () => {
  const navArr = [
    {
      name: "Treatment",
      link: "/",
      icon: "/assets/Nav_icon_1.svg",
      subItems: [
        { name: "How We Help", link: "/how-we-help" },
        { name: "Appointment Form", link: "/appointment-form" },
        { name: "Our Team", link: "/our-team", },
        { name: "Endometriosis Mapping", link: "endometriosis-mapping" },
        { name: "Why ESSI", link: "/why-essi", },
        { name: "Endometriosis Surgery", link: "/endometriosis-surgery" },
        { name: "Endometriosis and infertility", link: "/endometriosis-and-fertility" },
      ],

    },
    {
      name: "Company",
      link: "/how-we-help",
      icon: "/assets/Nav_icon_2.svg",
    },
    {
      name: "Location",
      link: "/",
      icon: "/assets/Nav_icon_3.svg",
    },
    {
      name: "Support",
      link: "/",
      icon: "/assets/Nav_icon_4.svg",
    },

    {
      name: "Blog",
      link: "/",
      icon: "/assets/Nav_icon_5.svg",
    },
  ];

   const [activeDropdown, setActiveDropdown] = useState(null);
   const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);

  const handleDropdownToggle = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const handleMobileDropdownToggle = (index) => {
  setActiveMobileDropdown(activeMobileDropdown === index ? null : index);
};

// to remove faded backround

useEffect(() => {
  if (typeof window !== "undefined" && typeof bootstrap === "undefined") {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }
}, []);

const closeOffcanvas = () => {
  const offcanvasEl = document.getElementById("mobileMenu");
  const backdrop = document.querySelector(".offcanvas-backdrop");

  if (offcanvasEl) {
    const offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvasEl);
    if (offcanvasInstance) {
      offcanvasInstance.hide();
    }
  }

  // Remove the backdrop manually if needed
  if (backdrop) {
    backdrop.remove();
    document.body.classList.remove("offcanvas-backdrop");
    document.body.style.overflow = "auto"; // Reset scrolling
  }
};

  return (
    
    <>
      <div className="navbarOuter d-flex justify-content-between p-3 px-sm-5 px-3">
        <div className="logo">
          <a href="/"><img src="/assets/logo.png" alt="logo" className="logo-img" /></a>
        </div>
        <ul
          className="nav-links list-unstyled mb-0 d-none d-lg-flex gap-3 "
          style={{
            border: "2px solid rgba(186, 185, 185, 0.50)",
            borderRadius: "10px",
          }}
        >
          {navArr.map((v, i) => (
            <li key={i} className="position-relative d-flex align-items-center">
              <div
                onClick={() => v.subItems ? handleDropdownToggle(i) : null}
                className="d-flex align-items-center gap-2 px-3 py-2 cursor-pointer"
                style={{ cursor: v.subItems ? "pointer" : "default" }}
              >
                <img src={v?.icon} alt={v.name} />
                <p className="mb-0 nav-link text-black">{v.name}</p>
               <img src="/assets/Nav_dropdown.svg" alt="dropdown"   style={{
                transform: activeDropdown === i ? "rotate(180deg)" : "rotate(0)",
                transition: "0.3s",
              }} />
              </div>

              {/* Submenu dropdown */}
              {v.subItems && activeDropdown === i && (
                <ul
                  className="position-absolute  shadow p-3 rounded"
                  style={{
                    top: "100%",
                    left: -13,
                    zIndex: 100,
                    minWidth: "200px",
                    backgroundColor:"rgba(250, 250, 250, 1)"
                  }}
                >
                  {v.subItems.map((sub, j) => (
                    <li key={j} className="mb-2" style={{listStyle:"none"}}>
                      <Link
                        href={sub.link}
                        className="d-flex align-items-center gap-2 text-decoration-none text-dark"
                      >
                        <span className="textPrimary">{sub.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}

              {/* Divider */}
              {i !== navArr.length - 1 && (
                <p className="nav-line mb-0 mx-0">|</p>
              )}
            </li>
          ))}
        </ul>

        <button
          className="px-3 py-2 text-white bgPrimary loginbtn border-0 d-none d-lg-block"
          style={{ borderRadius: "8px" }}
        >
          Login / Signup
        </button>

         <button
          className="d-lg-none bg-transparent border-0"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#mobileMenu"
          aria-controls="mobileMenu"
        >
          <img src="/assets/menu_icon.png" alt="menu" />
          
        </button>

      </div>

      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="mobileMenu"
        aria-labelledby="mobileMenuLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="mobileMenuLabel">Menu</h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="list-unstyled">
    {navArr?.map((v, i) => (
      <li key={i} className="mb-3">
        <div
          className="d-flex align-items-center gap-2 justify-content-between"
          onClick={() => v.subItems ? handleMobileDropdownToggle(i) : null}
          style={{ cursor: v.subItems ? "pointer" : "default" }}
        >
          <div className="d-flex align-items-center gap-2">
            <img src={v?.icon} alt="" />
            <p className="mb-0">{v?.name}</p>
          </div>
          {v.subItems && (
            <img
              src="/assets/Nav_dropdown.svg"
              alt="dropdown"
              style={{
                transform: activeMobileDropdown === i ? "rotate(180deg)" : "rotate(0)",
                transition: "0.3s",
              }}
            />
          )}
        </div>

        {/* Submenu for mobile */}
        {v.subItems && activeMobileDropdown === i && (
          <ul className="mt-2 ms-4">
            {v.subItems.map((sub, j) => (
              <li key={j} className="mb-2" style={{listStyle:"none"}}>
                <Link
                  href={sub.link}
                  className="text-decoration-none text-dark d-flex align-items-center gap-2"
                     onClick={closeOffcanvas}
                >
                  <span className="textPrimary">{sub.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </li>
    ))}
  </ul>
          <button
            className="px-3 py-2 text-white bgPrimary loginbtn border-0 mt-3"
            style={{ borderRadius: "8px" }}
          >
            Login / Signup
          </button>
        </div>
        </div>
    </>
  );
};

export default Navbar;
