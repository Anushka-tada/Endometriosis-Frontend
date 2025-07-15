import React from "react";

const Navbar = () => {
  const navArr = [
    {
      name: "Treatment",
      link: "/",
      icon: "/assets/Nav_icon_1.svg",
    },
    {
      name: "Company",
      link: "/",
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
      <div className="navbarOuter d-flex justify-content-between p-3 px-5">
        <div className="logo">
          <img src="/assets/logo.png" alt="logo" className="logo-img" />
        </div>
        <ul
          className="nav-links list-unstyled mb-0 d-flex gap-3 px-3"
          style={{
            border: "2px solid rgba(186, 185, 185, 0.50)",
            borderRadius: "10px",
          }}
        >
          {navArr?.map((v, i) => {
            return (
              <li key={i} className="d-flex gap-3">
                <div className="d-flex gap-2 align-items-center">
                  <img src={v?.icon}></img>

                  <p className="mb-0 nav-link"> {v?.name} </p>

                  <img src="/assets/Nav_dropdown.svg"></img>

                  {i !== navArr.length - 1 && (
                    <p className="nav-line mb-0 mx-2">|</p>
                  )}
                </div>
              </li>
            );
          })}
        </ul>

        <button
          className="px-3 py-2 text-white bgPrimary border-0"
          style={{ borderRadius: "8px" }}
        >
          Login / Signup
        </button>
      </div>
    </>
  );
};

export default Navbar;
