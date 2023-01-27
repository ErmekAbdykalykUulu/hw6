import { useState } from "react";
import { Input } from "../Input/Input";
import styled from "styled-components";


export const UserForm = (props) => {
  
console.log(props.onNewaddUsers);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const changeName = (event) => {
    setName(event.target.value);
  };

  const changeAge=(event)=>{
    setAge(event.target.value)
  }
 
  const changeButton=(event)=>{
    event.preventDefault()

    const usersData={
      name,
      age
    };
   props.onNewaddUsers(usersData);
   setName("")
   setAge("")
  }

 
  return (
    <StyledDiv >
        <StyledContainer >
      <Input id="name" labelName="UserName" inputType="text" value={name} onChange={changeName}/>
      <Input id="number" labelName="Age(Years)" inputType="number" value={age} onChange={changeAge}/>
      <StyledButton className="Button" onClick={changeButton} >Add User</StyledButton>
    </StyledContainer>
    </StyledDiv>
   
  );
};

const StyledDiv = styled.div`
   margin-top: 2rem;
`

const StyledButton = styled.button`
   background-color: rgb(189, 43, 226);
    color: azure;
    border: none;
    width: 150px;
    height: 35px;
    margin-top: 1rem;
    border-radius: 10px;
    margin-left: 70%;
`

const StyledContainer = styled.div`
   background-color: rgb(255, 255, 255);
    width: 600px;
    margin: 0 auto;
    padding: 25px;
    display: flex;
    flex-direction: column;
    text-align: left;
    border-radius: 10px;
  
`


