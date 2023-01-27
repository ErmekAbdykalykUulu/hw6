import { UsersList } from "../UsersList/UsersList";
import styles from"./Users.module.css";

export const Users = ({ users }) => {
  return (
    <div className={styles.user}>
      {users.map((elem) => {
        return <UsersList key={elem.name} name={elem.name} age={elem.age} />;
      })}
    </div>
  );
};
