import React, { useState } from "react";
import styles from "./Navbar.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const handleOpenAndCloseMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <nav className={styles.navbar}>
      <a href="/" className={styles.title}>
        Nguyen Duc Hai <span className={styles.name}>Nam</span>
      </a>
      <div className={styles.menu}>
        {openMenu ? (
          <CloseIcon
            onClick={handleOpenAndCloseMenu}
            className={styles.menuBtnClose}
            // sx={{ display: "none" }}
          />
        ) : (
          <MenuIcon
            className={styles.menuBtnOpen}
            onClick={handleOpenAndCloseMenu}
            // sx={{ display: "none" }}
          />
        )}

        <ul className={`${styles.menuItems} ${openMenu && styles.openMenu}`}>
          <li>
            <a href="#about" onClick={handleOpenAndCloseMenu}>
              About
            </a>
          </li>
          <li>
            <a href="#experience" onClick={handleOpenAndCloseMenu}>
              Experience
            </a>
          </li>
          <li>
            <a href="#certificates" onClick={handleOpenAndCloseMenu}>
              Certificates
            </a>
          </li>
          <li>
            <a href="#project" onClick={handleOpenAndCloseMenu}>
              Project
            </a>
          </li>
          <li>
            <a href="#interest" onClick={handleOpenAndCloseMenu}>
              Interest
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
