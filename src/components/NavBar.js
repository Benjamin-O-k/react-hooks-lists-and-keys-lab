import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  let anchor = links.map((link) => {
    return <a key={link} href={`#${link}`}>{link}</a>;
  })
  return <nav>
    {anchor}
  </nav>;
}

export default NavBar;
