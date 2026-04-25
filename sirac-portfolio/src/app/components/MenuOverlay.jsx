import React from "react";

const MenuOverlay = ({ links, closeMenu }) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <a
            href={link.path}
            onClick={(e) => {
              e.preventDefault();
              closeMenu();
              setTimeout(() => {
                const el = document.querySelector(link.path);
                if (el) {
                  const top =
                    el.getBoundingClientRect().top +
                    window.scrollY -
                    80;
                  window.scrollTo({
                    top,
                    behavior: "smooth",
                  });
                }
              }, 300);
            }}
            className="block py-2 text-slate-200 hover:text-white transition"
          >
            {link.title}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;