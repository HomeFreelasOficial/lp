import styled from "styled-components";

export const Card = styled.div`
    display: flex;
    padding: 2rem;
    width: 60rem;
    background-color: #F4F4F4;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    border-radius: 8px;

    @media (min-width: 375px){
        width: 40em
    }
`
export const TextBold = styled.p`
    font-weight: 700;
    font-size: 12px;
`

export const Text = styled.p`
    font-size:12px;
`

export const Label = styled(Text)`
  @media (min-width: 375px) {
        display: flex;
        justify-content: center;
        align-items: center;
        }
`

export const Input = styled.input`
    border: 1px solid rgba(0, 0, 0, 0.7);
    border-radius: 8px;
    padding-left: 8px;
    width: 200px;
    height: 25px;

    ::placeholder {
    color: rgba(0, 0, 0, 0.4);
    font-size: 12px;
    font-family: 'Poppins';
    }

    @media (min-width: 375px) {
        width: 30rem;
    }
`

export const SaveButton = styled.button`
    border-radius: 8px;
    align-items: center;
    width: 11rem;
    height: 5rem;
    font-size: 10px;
    cursor: pointer;
    background-color: #039487;
    color: white;
`
export const JobButton = styled.button<{ isClicked: boolean, color: string }>`
    color: ${props => props.isClicked ? props.color : 'white'};
    background-color: ${props => props.isClicked? 'white' : props.color};
    border: ${props => props.isClicked? '1px solid' + props.color : 'none'};
    border-radius: 8px;
    align-items: center;
    width: 11rem;
    height: 3rem;
    font-size: 10px;
    cursor: pointer;
`