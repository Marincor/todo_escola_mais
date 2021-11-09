import styled from "styled-components";

export const Container = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  height: auto;
  width: 100%;
  padding: 2rem 0rem;
`;

export const Header = styled.header`
  align-items: center;
  background-color: white;
  border-bottom: 4px;
  border-style: groove;
  display: flex;
  height: 100px;
  justify-content: center;
  position: fixed;
  width: 100vw;
`;

export const Logo = styled.img`
  width: 6rem;
`;

export const Icon = styled.img`
  width: 2rem;
`;

export const Button = styled.button`
  background-color: #d8308a;
  border-radius: 2rem;
  border: none;
  color: white;
  cursor: pointer;
  font-family: "Raleway", sans-serif;
  font-weight: bold;
  padding: 1rem;

  :hover {
    background-color: rgb(255, 237, 0);
    color: rgb(0, 0, 112);
  }
  
  :active {
    background-color: rgb(0, 159, 227);
  }
`;
