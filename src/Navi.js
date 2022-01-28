import React, { useState } from 'react';
import './navi.css';

const Navi = () => {
  const [showMenu, setShowMenu] = useState(true);
  const toggleMenu = (e) => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <nav id="navbar">
        <div className="nav-wrapper">
          <span className="brand">
            <i class="fas fa-code me-2 " />
            musaKundakcı
          </span>
          <div className="right-side">
            <span>Hakkımda</span>
            <span>Portfölyom</span>
            <span>Iletisim</span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navi;
/*
  Bar
          <a
            onClick={toggleMenu}
            className={showMenu == true ? 'menu-button' : 'menu-button open'}
          >
            <span />
            <span />
            <span />
          </a>
*/
