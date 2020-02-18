import React from "react"
import { Link } from "gatsby"
import { slide as Menu } from "react-burger-menu"

const MenuMobile = () => {
  // Keep styles as CSS-in-JS to be processed in production build
  var styles = {
    bmBurgerButton: {
      position: "fixed",
      width: "36px",
      height: "30px",
      top: "1rem",
      right: "1rem",
    },
    bmBurgerBars: {
      background: "#E5E5E5",
    },
  }
  return (
    <Menu
      pageWrapId={"page-wrap"}
      outerContainerId={"outer-container"}
      className="bg-myGrey-secondary text-primary text-3xl pl-8 pt-6 uppercase"
      styles={styles}
      width={"290px"}
      left
    >
      <Link id="titles" className="menu-item outline-none pb-4" to="/titres">
        Titre
      </Link>
      <Link id="authors" className="menu-item outline-none pb-4" to="/auteurs">
        Auteur
      </Link>
      <Link
        id="editeurs"
        className="menu-item outline-none pb-4"
        to="/editeurs"
      >
        Éditeur
      </Link>
      <Link
        id="collections"
        className="menu-item outline-none pb-4"
        to="/collections"
      >
        Collection
      </Link>
      <Link id="about" className="menu-item outline-none pb-4" to="/a-propos">
        À propos
      </Link>
    </Menu>
  )
}

export default MenuMobile
