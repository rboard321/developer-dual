import { useState } from "react";
import styled from "styled-components";
import { Card, Profile } from "../components";
import Button from "../components/Button";
import { inspectUser } from "../services/userService";

const StyledInspect = styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 0px;
  margin-top: 10px;
`;

const Inspect = (props) => {
  const [user, setUser] = useState();
  const [userToInspect, setUserToInspect] = useState();

  const getUser = async (user) => {
    try {
      const userToInspect = await inspectUser(user);
      if (typeof userToInspect === "object") {
        setUserToInspect(userToInspect);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <StyledInspect width="100%" height="200px">
        <Card
          height="100%"
          backGround="#F9F9F9"
          flexd="column"
          justify="center"
        >
          <input
            type="text"
            placeholder="username"
            onChange={(event) => setUser(event.target.value)}
          ></input>
          <Button onClick={(event) => getUser(user)}>Inspect</Button>
        </Card>
      </StyledInspect>
      <StyledInspect width="100%" height="600px">
        <Card
          width="40%"
          height="100%"
          backGround="#F9F9F9"
          border="2px solid black"
        >
          <Profile userToInspect={userToInspect} />
        </Card>
      </StyledInspect>
    </>
  );
};

export default Inspect;
