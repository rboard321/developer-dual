import { useState } from "react";
import { Card} from "../components";
import Battle from "../components/Battle";
import Button from "../components/Button";
import { duelUsers } from "../services/userService";

const Duel = (props) => {
  const [user1ToDuel, setUser1ToDuel] = useState();
  const [user2ToDuel, setUser2ToDuel] = useState();
  const [userBattle, setUserBattle] = useState([]);

  const duel = async (user1ToDuel, user2ToDuel) => {
    try {
      const battle = await duelUsers(user1ToDuel, user2ToDuel);
      setUserBattle(battle);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Card height="100px" width="100%" justify="center">
        <input
          type="text"
          placeholder="username-1"
          onChange={(event) => setUser1ToDuel(event.target.value)}
        ></input>
        <input
          type="text"
          placeholder="username-2"
          onChange={(event) => setUser2ToDuel(event.target.value)}
        ></input>
      </Card>
      <Card
        width="100%"
        justify="center"
        flexd="column"
        align="center"
        height="100px"
      >
        <Button onClick={() => duel(user1ToDuel, user2ToDuel)}>Duel</Button>
        {userBattle && "tips" in userBattle ? <h2>{userBattle.tips}</h2> : null}
      </Card>
      <Battle user1ToDuel={userBattle[0]} user2ToDuel={userBattle[1]}></Battle>
    </>
  );
};

export default Duel;
