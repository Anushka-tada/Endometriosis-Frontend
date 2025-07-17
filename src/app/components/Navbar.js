import React from "react";
import Link from "next/link";

const Navbar = () => {
  const navArr = [
    {
      name: "Treatment",
      link: "/",
      icon: "/assets/Nav_icon_1.svg",
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
  return (
    <>
      <div className="navbarOuter d-flex justify-content-between p-3 px-sm-5 px-3">
        <div className="logo">
          <a href="/"><img src="/assets/logo.png" alt="logo" className="logo-img" /></a>
        </div>
        <ul
          className="nav-links list-unstyled mb-0 d-none d-lg-flex gap-3 px-3"
          style={{
            border: "2px solid rgba(186, 185, 185, 0.50)",
            borderRadius: "10px",
          }}
        >
          {navArr?.map((v, i) => {
            return (
              <li key={i} className="d-flex gap-xl-3 gap-2">
                 <Link href={v.link} className="text-decoration-none d-flex text-black">
                <div className="d-flex gap-xl-2 gap-1 align-items-center">
                  <img src={v?.icon}></img>

                  <p className="mb-0 nav-link"> {v?.name} </p>

                  <img src="/assets/Nav_dropdown.svg"></img>

                  {i !== navArr.length - 1 && (
                    <p className="nav-line mb-0 mx-2">|</p>
                  )}
                </div>
                </Link>
              </li>
            );
          })}
        </ul>

        <button
          className="px-3 py-2 text-white bgPrimary border-0 d-none d-lg-block"
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
              <li key={i} className="mb-3 d-flex align-items-center gap-2">
                <img src={v?.icon} alt="" />
                <p className="mb-0">{v?.name}</p>
              </li>
            ))}
          </ul>
          <button
            className="px-3 py-2 text-white bgPrimary border-0 mt-3"
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
