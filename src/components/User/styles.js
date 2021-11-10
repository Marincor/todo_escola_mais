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

// id styles //

export const TitleUserId = styled(TitleUserList)``;

export const ListTask = styled.ul`
  width: 80%;
  background-color: rgba(47, 51, 141, 0.4);
  margin: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (min-width: 768px) {
    width: 60%;
  }

  .showTask {
    visibility: visible;
    animation: anime 0.6s;
  }

  @keyframes anime {
    0%,
    50% {
      opacity: 0;
      transform: translate3d(0, -50px, 0);
    }

    100% {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
`;

export const ItemTask = styled.li`
  background-color: whitesmoke;
  margin: 1rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  border-radius: 1rem;
`;

export const TaskName = styled(Username)`
  color: black;
  font-weight: bold;
  text-transform: capitalize;
  text-align: left;
  width: 100%;
  margin: 1rem 0rem 0rem 0rem;
  display: flex;
  flex-wrap: wrap;
  border: 1px solid black;
  padding: 1rem 0.2rem;
`;

export const ButtonTask = styled.button`
  background-color: rgb(230, 0, 126);
  cursor: pointer;
  border: none;

  :hover {
    background-color: rgb(255, 237, 0);
  }

  :active {
    background-color: rgb(0, 159, 227);
  }
`;

export const Task = styled.p`
  border: 1px solid black;
  padding: 1rem 0.2rem;
  line-height: 1.2rem;
  text-transform: lowercase;
  visibility: hidden;
  background-color: lightgray;
`;
