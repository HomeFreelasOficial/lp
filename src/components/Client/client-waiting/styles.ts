import styled from "styled-components";


export const Wrapper = styled.div`
display: flex;
flex-direction: column;
`

export const BodyOrganizer = styled.div`
display: flex;
flex-direction: column;
gap: 5em;
align-items: center;
justify-content: center;
padding-block: 10em;
height: 90vh;
`
export const CardBotao = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
text-align: center;
padding: 6em;
gap: 2em;
width: 65em;
background-color: #F4F4F4;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 8px;
`
export const DescriptionForm = styled.form`
display: flex;
gap: 2em;
align-items: center;
justify-content: center;
flex-direction: column;
`
export const InputTitle = styled.input `
  border: 1px solid rgba(0, 0, 0, 0.7);
  border-radius: 8px;
  font-size: 10px;
  padding-left: 8px;
  width: 262px;
  height: 36px;

  ::placeholder {
    color: rgba(0, 0, 0, 0.4);
    font-size: 12px;
    font-family: 'Poppins';
  }
  `

export const Description = styled.textarea`
border: 1px solid rgba(0, 0, 0, 0.7);
  border-radius: 8px;
  font-size: 12px;
  padding: 8px;
  width: 262px;
  height: 10em;

  &::placeholder {
    color: rgba(0, 0, 0, 0.4);
    font-size: 12px;
    font-family: 'Poppins';
  }
`