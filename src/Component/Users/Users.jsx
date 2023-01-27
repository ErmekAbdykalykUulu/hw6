import { UsersList } from "../UsersList/UsersList";
import styled from "styled-components";

export const Users = ({ users }) => {
  return (
    <User>
      {users.map((elem) => {
        return <UsersList key={elem.name} name={elem.name} age={elem.age} />;
      })}
    </User>
  );
};

const User = styled.div`
  width: 640px;
    margin: 0 auto;
    background-color: white;
    border-radius: 8px;
    padding: 3px;
    margin-top: 2rem;
    padding-bottom: 20px;
`