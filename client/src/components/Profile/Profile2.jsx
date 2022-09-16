import styled from "styled-components";
import Card from "../Card";

const StyledProfileInfo = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
`;

const Profile2 = ({ userToInspect, winner2 }) => {
  return (
    <>
      {userToInspect && "username" in userToInspect ? (
        <StyledProfileInfo>
          <Card width="50%" flexd="column" justify="center">
            {winner2 ? <h1>Winner!!</h1> : null}
            <img
              src={userToInspect["avatar-url"]}
              alt={userToInspect["avatar-url"]}
            />
            <h5>{userToInspect.bio}</h5>
          </Card>
          <Card height="100%" width="50%" flexd="column" justify="space-around">
            <h5>
              <button>UserName:</button> {userToInspect.username}
            </h5>
            <h5>
              <button>Name:</button> {userToInspect.name}
            </h5>
            <h5>
              <button>Location:</button>{" "}
              {userToInspect.location ? userToInspect.location : "none"}
            </h5>
            <h5>
              <button>Favorite languages:</button>{" "}
              {userToInspect["favorite-language"]}
            </h5>
            <h5>
              <button>Highest starred:</button>{" "}
              {userToInspect["highest-starred"]}
            </h5>
            <h5>
              <button>Public Repos:</button> {userToInspect["public-repos"]}
            </h5>
            <h5>
              <button>Perfect repos:</button> {userToInspect["perfect-repos"]}
            </h5>
            <h5>
              <button>Total starred:</button> {userToInspect["total-stars"]}
            </h5>
            <h5>
              {" "}
              <button>Titles:</button> {userToInspect.titles[0]},{" "}
              {userToInspect.titles[1]}
            </h5>
            <h5>
              <button>Followers:</button> {userToInspect.followers}
            </h5>
            <h5>
              <button>Following:</button> {userToInspect.following}
            </h5>
          </Card>
        </StyledProfileInfo>
      ) : (
        <StyledProfileInfo>
          {userToInspect && "tips" in userToInspect ? (
            <h2>{userToInspect.tips}</h2>
          ) : (
            <h2>Please enter a username to inspect</h2>
          )}
        </StyledProfileInfo>
      )}
    </>
  );
};

export default Profile2;
