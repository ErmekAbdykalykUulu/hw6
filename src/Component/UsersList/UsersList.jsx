import styles from"./UsersList.module.css"
export const UsersList = ({ name, age }) => {
  return (
    <div className={styles.list}>
       <div className={styles.usersWrapper}>
      <ul className={styles.li}>
        <li>{name} ({age }) </li>
      
      </ul>
    </div>
    </div>
   
  );
};
