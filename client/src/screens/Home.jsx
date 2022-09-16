import { Link } from "react-router-dom";
import styled from "styled-components";
import { Card, Navbar } from "../components";
import Button from "../components/Button";

const StyledHome = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  margin-top: 20px;
`;

const Home = (props) => {
  return (
    <>
      <StyledHome>
        <Card width="100%" height="100px" backGround="#F9F9F9" justify="center">
          <h1 className="title">Welcome to Dev-Duel</h1>
        </Card>
        <Card
          height="100px"
          width="20%"
          backGround="#F9F9F9"
          justify="space-around"
        >
          <Link to="/inspect">
            <Button width="120px" height="40px" backGround="#F9F9F9">
              Inspect
            </Button>
          </Link>

          <Link to="/duel">
            <Button width="120px" height="40px" backGround="#F9F9F9">
              Duel
            </Button>
          </Link>
        </Card>
      </StyledHome>
    </>
  );
};

export default Home;
