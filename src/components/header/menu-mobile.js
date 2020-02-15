import React from "react"
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
      <a id="titles" className="menu-item outline-none pb-4" href="/titres">
        Titres
      </a>
      <a id="authors" className="menu-item outline-none pb-4" href="/auteurs">
        Auteurs
      </a>
      <a id="editeurs" className="menu-item outline-none pb-4" href="/editeurs">
        Éditeurs
      </a>
      <a
        id="collections"
        className="menu-item outline-none pb-4"
        href="/collections"
      >
        Collections
      </a>
      <a id="about" className="menu-item outline-none pb-4" href="/a-propos">
        À propos
      </a>
    </Menu>
  )
}

export default MenuMobile
