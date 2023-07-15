import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "./context";
import { NavLink } from "react-router-dom";
import { Button } from "./styles/Button";
import "./App.css";

const Services = () => {
  const { services } = useGlobalContext();
  console.log(services);

  return (
    <Wrapper className="section">
      <h2 className="common-heading">Our Services</h2>
      <div className="container grid grid-four-column">
        {services.map((curElem) => {
          const { id, name, image, description, price } = curElem;
          return (
            <div key={id} className="card">
              <figure>
                <img src={image} alt={name} />
              </figure>
              <div className="card-data">
                <h3>{name}</h3>
                <p className="PARA">{description}</p>
                <h2>{price}</h2>
                <NavLink to="/contact">
                  <Button className="btn">_Buy Now!_</Button>
                </NavLink>
              </div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

  .section {
    padding: 20px;
    background-color: #f5f5f5;
  }

  .common-heading {
    font-size: 24px;
    margin-bottom: 20px;
    text-align: center;
  }

  .container {
    display: grid;
    grid-template-columns: repeat(4, 1fr); /* Adjust the number of columns as needed */
    gap: 20px;
  }

  .card {
    background-color: #fff;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.2s linear;
      cursor: pointer;
    }
    &:hover::after {
      width: 100%;
    }
    &:hover img {
      transform: scale(1.2);
    }
    img {
      max-width: 90%;
      margin-top: 1.5rem;
      height: 20rem;
      transition: all 0.2s linear;
    }
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 5px;
  }

  .card-data {
    text-align: center;
  }

  h3 {
    font-size: 20px;
    margin-bottom: 10px;
  }

  .PARA {
    font-size: 16px;
    margin-bottom: 10px;
    text-align: justify;
  }

  h2 {
    font-size: 18px;
    margin-bottom: 10px;
    color: #333;
  }

  .btn {
    background-color: #4caf50;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    margin-top: auto;
  }

  @media (max-width: ${({ theme }) => theme.media.tab}) {
    .container {
      grid-template-columns: repeat(2, 1fr); /* Adjust the number of columns for tablet view */
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .container {
      grid-template-columns: 1fr; /* Change to one column for mobile view */
    }
  }
`;

export default Services;
