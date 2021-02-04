import React from "react";
import "./SideBarSub.css";
const SideBarSub = () => {
  return (
    <div className="l-navbar" id="navbar">
      <nav className="nav">
        <div>
          <div className="nav__brand">
            <ion-icon
              name="menu-outline"
              className="nav__toggle"
              id="nav-toggle"
            ></ion-icon>
            <a href="#" className="nav__logo">
              Bedimcode
            </a>
          </div>
          <div className="nav__list">
            <a href="#" className="nav__link active">
              <ion-icon name="home-outline" className="nav__icon"></ion-icon>
              <span className="nav__name">Dashboard</span>
            </a>
            <a href="#" className="nav__link">
              <ion-icon name="chatbubbles-outline" className="nav__icon"></ion-icon>
              <span className="nav__name">Messenger</span>
            </a>

            <div className="nav__link collapse">
              <ion-icon name="folder-outline" className="nav__icon"></ion-icon>
              <span className="nav__name">Projects</span>

              <ion-icon
                name="chevron-down-outline"
                className="collapse__link"
              ></ion-icon>

              <ul className="collapse__menu">
                <a href="#" className="collapse__sublink">
                  Data
                </a>
                <a href="#" className="collapse__sublink">
                  Group
                </a>
                <a href="#" className="collapse__sublink">
                  Members
                </a>
              </ul>
            </div>

            <a href="#" className="nav__link">
              <ion-icon name="pie-chart-outline" className="nav__icon"></ion-icon>
              <span className="nav__name">Analytics</span>
            </a>
            <div className="nav__link collapse">
              <ion-icon name="people-outline" className="nav__icon"></ion-icon>
              <span className="nav__name">Team</span>

              <ion-icon
                name="chevron-down-outline"
                className="collapse__link"
              ></ion-icon>

              <ul className="collapse__menu">
                <a href="#" className="collapse__sublink">
                  Data
                </a>
                <a href="#" className="collapse__sublink">
                  Group
                </a>
                <a href="#" className="collapse__sublink">
                  Members
                </a>
              </ul>
            </div>
            <a href="#" className="nav__link">
              <ion-icon name="settings-outline" className="nav__icon"></ion-icon>
              <span className="nav__name">Settings</span>
            </a>
          </div>
        </div>

        <a href="#" className="nav__link">
          <ion-icon name="log-out-outline" className="nav__icon"></ion-icon>
          <span className="nav__name">Log Out</span>
        </a>
      </nav>
    </div>
  );
};

export default SideBarSub;
