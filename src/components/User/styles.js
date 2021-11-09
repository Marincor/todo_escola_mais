import styled from "styled-components";

export const TitleUserList = styled.h2`
  font-size: 2rem;
  color: black;
  font-family: "Raleway", sans-serif;
  font-weight: bold;
  margin: 3rem 2rem;
`;

export const List = styled.ul`
  width: 60%;
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Username = styled.p`
  font-size: 1rem;
  color: white;
  font-family: "Raleway", sans-serif;
  margin: 2rem;
  width: 100%;
  text-align: center;
`;

export const ListItem = styled.li`
  width: auto;
  height: auto;
  padding: 1rem;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  background-color: rgba(47, 51, 141, 0.4);
  justify-content: center;
  align-items: center;
  border-radius: 2rem;

  :hover {
    background-color: rgba(47, 51, 141, 0.8);
  }
`;
