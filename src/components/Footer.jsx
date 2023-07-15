import React from "react";
import styled from "styled-components";
import { Button } from "../styles/Button";
import { NavLink } from "react-router-dom";
import { FaLinkedin, FaGit, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <Wrapper>
      <section className="contact-short">
        <div className="grid grid-two-column">
          <div>
            <h3>Ready to get started?</h3>
            <h3>Talking to us today</h3>
          </div>

          <div className="contact-short-btn">
            <NavLink to="/">
              <Button>_Get Started_</Button>
            </NavLink>
          </div>
        </div>
      </section>

      {/* footer section  */}

      <footer>
        <div className="container grid grid-four-column">
          <div className="footer-about">
            <h3>Saleem Ullah</h3>
            <p>
              User-Centric Design: We believe that great software should not
              only be powerful but also user-friendly.
            </p>
          </div>

          {/* 2nd column */}
          <div className="footer-subscribe">
            <h3>Saleem Ullah</h3>
            <h3>Programing Services For Contact</h3>
            <form
              action="https://formspree.io/f/xayzrlrq"
              method="POST"
              className="contact-inputs"
            >
               <input
              type="text"
              name="username"
              placeholder="username"
              autoComplete="off"
              required
            /> 
              <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
            /> 
          {/* Send */}
              <input type="submit" value="Send Now" />
            </form>
          </div>

          {/* 3rs column  */}
          <div className="footer-social">
            <h3>Follows Us</h3>
            <div className="footer-social--icons">
              <div>
                <a href="https://www.linkedin.com/in/saleem83" target="_blank">
                  <FaLinkedin className="icons" />
                </a>
              </div>
              <div>
                <a href="https://github.com/Saleemullah-Khan" target="_blank">
                  <FaGit className="icons" />
                </a>
              </div>
              <div>
                <a
                  href="https://www.facebook.com/profile.php?id=100088043948990&mibextid=ZbWKwL"
                  target="_blank"
                >
                  <FaFacebook className="icons" />
                </a>
              </div>
            </div>
          </div>

          {/* 4th column  */}
          <div className="footer-contact">
            <h3>Call Us to Contact</h3>
            <h3>+92 000-123-456</h3>
          </div>
        </div>

        {/* bottom section  */}
        <div className="footer-bottom--section">
          <hr />
          <div className="container grid grid-two-column">
            <p>
              @{new Date().getFullYear()} Saleem Ullah.To All Rights Reserved !.
            </p>
            <div>
              <p>PRIVACY POLICY</p>
              <p>TERMS & CONDITIONS</p>
            </div>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);
  }
  .contact-short-btn {
    justify-self: end;
    align-self: center;
  }

  footer {
    padding: 14rem 0 9rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};

    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;

      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};

        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }

    .footer-bottom--section {
      padding-top: 9rem;

      hr {
        margin-bottom: 2rem;
        color: ${({ theme }) => theme.colors.hr};
        height: 0.1px;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 95vw;
      padding: 2rem 0rem;
      display: flex;
      justify-content: center;
      align-items: center;

      .contact-short-btn {
        text-align: center;
        justify-self: flex-start;
      }
    }

    footer .footer-bottom--section {
      padding-top: 3.2rem;
    }
  }
`;

export default Footer;
