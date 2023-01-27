import styles from"./input.module.css"
import "./input.module.css"


export const Input = ({id , labelName, inputType , ...rest}) => {
  return (
   
  <div className={styles.inputWrapper}>
        <label className={styles.label}  htmlFor={id} >{labelName}</label>
        <input   type={inputType} id={id} {...rest}/>
    </div>

  );
};
