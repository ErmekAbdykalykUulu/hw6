import styled from "styled-components";

export const UsersList = ({ name, age }) => {
  return (
    <Styled>
       <UserWrapper>
      <StyledUl>
        <li>{name} ({age }) </li>
      
      </StyledUl>
    </UserWrapper>
    </Styled>
   
  );
};

const UserWrapper = styled.div`
  margin: 0 auto;
    width: 600px;
    border: 1px solid;
    border-radius: 8px;

    height: fit-content;
`

const StyledUl = styled.ul`
   list-style: none;
    display: flex;
    gap: 2rem;
`


const Styled = styled.div`
   width: 600px;
    border-radius: 8px;
    background-color: white;
    margin: 0 auto;
    margin-top:20px;
`