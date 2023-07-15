import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import { CgMenu, CgCloseR } from "react-icons/cg";

const Nav = styled.nav`
.logg {
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  border-radius: 4px;
  background-color: #4CAF50;
  color: #FFFFFF;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
}

.logg:hover {
  background-color: #45a049;
}

.logg:active {
  background-color: #3e8e41;
}

.user-details {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.user-picture {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.user-info {
  display: flex;
  flex-direction: column;
}

  .navbar-list {
    display: flex;
    gap: 4.8rem;

    li {
      list-style: none;

      .navbar-link {
        &:link,
        &:visited {
          display: inline-block;
          text-decoration: none;
          font-size: 1.8rem;
          text-transform: uppercase;
          color: ${({ theme }) => theme.colors.black};
          transition: color 0.3s linear;
        }

        &:hover,
        &:active {
          color: ${({ theme }) => theme.colors.helper};
        }
      }
    }
  }

  .mobile-navbar-btn {
    display: none;

    .close-outline {
      display: none;
    }
  }

  .mobile-navbar-btn[name="close-outline"] {
    display: none;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .mobile-navbar-btn {
      display: inline-block;
      z-index: 999;
      border: ${({ theme }) => theme.colors.black};

      .mobile-nav-icon {
        font-size: 4.2rem;
        color: ${({ theme }) => theme.colors.black};
      }
    }

    /* hide the original nav menu  */
    .navbar-list {
      width: 100vw;
      height: 100vh;
      position: absolute;
      top: 0;
      left: 0;
      background-color: #fff;

      display: flex;
      justify-content: center;
      align-content: center;
      flex-direction: column;
      text-align: center;

      transform: translateX(100%);

      visibility: hidden;
      opacity: 0;

      li {
        .navbar-link {
          &:link,
          &:visited {
            font-size: 4.2rem;
          }

          &:hover,
          &:active {
            color: ${({ theme }) => theme.colors.helper};
          }
        }
      }
    }

    .active .mobile-nav-icon {
      display: none;
      font-size: 4.2rem;
      position: absolute;
      top: 3%;
      right: 10%;
      color: ${({ theme }) => theme.colors.black};
      z-index: 9999;
    }

    .active .close-outline {
      display: inline-block;
    }

    .active .navbar-list {
      visibility: visible;
      opacity: 1;
      transform: translateX(0);
      z-index: 999;
    }
   


    
    }
  }
`;

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  const menuItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/service", label: "Services" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <Nav>
      <div className={openMenu ? "menuIcon active" : "menuIcon"}>
        <ul className="navbar-list">
          {menuItems.map((menuItem, index) => (
            <li key={index}>
              <NavLink
                className="navbar-link"
                onClick={() => setOpenMenu(false)}
                to={menuItem.to}
              >
                {menuItem.label}
              </NavLink>
            </li>
          ))}
       <li>
      {isAuthenticated && (
        <div className="user-details">
          <img className="user-picture" src={user.picture} alt={user.name} />
          <div className="user-info">
            <h3>{user.name}</h3>
            <p>{user.email}</p>
          </div>
        </div>
      )}
          </li>
          <li>
            {isAuthenticated ? (
              <button className="logg" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                Log Out
              </button>
            ) : (
              <button className="logg" onClick={() => loginWithRedirect()}>Log In</button>
            )}
          </li>
        </ul>
        {/* //nav icon */}
        <div className="mobile-navbar-btn">
          <CgMenu
            name="menu-outline"
            className="mobile-nav-icon"
            onClick={() => setOpenMenu(true)}
          />
          <CgCloseR
            name="close-outline"
            className="close-outline mobile-nav-icon"
            onClick={() => setOpenMenu(false)}
          />
        </div>
      </div>
    </Nav>
  );
};

export default Navbar;
