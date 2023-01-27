import styled from "styled-components";


export const Input = ({id , labelName, inputType , ...rest}) => {
  return (
   
  <InputWrapper>
        <StyledLabel htmlFor={id} >{labelName}</StyledLabel>
        <input   type={inputType} id={id} {...rest}/>
    </InputWrapper>

  );
};

const StyledLabel = styled.label`
  font-weight: 500;
    padding: 5px;
`

const InputWrapper = styled.div`
  display: flex;
    flex-direction: column;
    text-align: left;
`
