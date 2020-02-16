import React from "react"
import { Link } from "gatsby"
import { slide as Menu } from "react-burger-menu"

const MenuMobile = () => {
  return (
    <Menu
      pageWrapId={"page-wrap"}
      outerContainerId={"outer-container"}
      className="bg-myGrey-secondary text-myGrey-primary pl-6 pt-2"
      width={"290px"}
      left
    >
      <Link id="titles" className="menu-item outline-none pb-4" to="/titres">
        Titres
      </Link>
      <Link id="authors" className="menu-item outline-none pb-4" to="/auteurs">
        Auteurs
      </Link>
      <Link
        id="editeurs"
        className="menu-item outline-none pb-4"
        to="/editeurs"
      >
        Éditeurs
      </Link>
      <Link
        id="collections"
        className="menu-item outline-none pb-4"
        to="/collections"
      >
        Collections
      </Link>
      <Link id="about" className="menu-item outline-none pb-4" to="/a-propos">
        À propos
      </Link>
    </Menu>
  )
}

export default MenuMobile
