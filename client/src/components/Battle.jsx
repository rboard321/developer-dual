import styled from "styled-components";
import Card from "./Card";
import Profile from "./Profile/Profile";
import Profile2 from "./Profile/Profile2";
import { useEffect, useState } from "react";
const StyledDuel = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: space-around;
`;

const Battle = ({ user1ToDuel, user2ToDuel }) => {
  const [winner1, setWinner1] = useState(false);
  const [winner2, setWinner2] = useState(false);

  const setWinner = (user1ToDuel, user2ToDuel) => {
    if (user1ToDuel && user2ToDuel) {
      if (user1ToDuel["total-stars"] > user2ToDuel["total-stars"]) {
        setWinner1(true);
      }
      if (user1ToDuel["total-stars"] < user2ToDuel["total-stars"]) {
        setWinner2(true);
      }
      if (user1ToDuel["total-stars"] === user2ToDuel["total-stars"]) {
        setWinner1(true);
        setWinner2(true);
      }
    }
  };

  useEffect(() => {
    setWinner(user1ToDuel, user2ToDuel);
  }, [user1ToDuel, user2ToDuel]);

  return (
    <>
      {user1ToDuel && user2ToDuel ? (
        <StyledDuel>
          <Card height="400px" width="50%">
            <Profile userToInspect={user1ToDuel} winner1={winner1} />
          </Card>
          <Card height="400px" width="50%">
            <Profile2 userToInspect={user2ToDuel} winner2={winner2} />
          </Card>
        </StyledDuel>
      ) : (
        <StyledDuel>
          <Card height="400px" width="40%" border="2px solid black">
            <Profile />
          </Card>
          <Card height="400px" width="40%" border="2px solid black">
            <Profile2 />
          </Card>
        </StyledDuel>
      )}
    </>
  );
};

export default Battle;
