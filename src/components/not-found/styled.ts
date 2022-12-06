import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 87.2vh;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Title = styled.h1`
  color: #676767;
  font-size: 10rem;
  font-weight: 600;
`

export const Description = styled.p`
  text-align: center;
  color: #676767;
  font-size: 3rem;
`

export const ButtonHome = styled.button`
  margin-top: 3rem;
  background-color: #000;
  color: #fff;
  font-size: 2rem;
  cursor: pointer;
  padding: 2rem;
  border-radius: 8px;

  transition: all .3s ease-in-out;

  &:hover {
    opacity: .6;
  }
`