import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50rem;
  height: max-content;
  background-color: #F4F4F4;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  padding: 5rem;
  gap: 3.5rem;
  margin-top: 5rem;

  @media (min-width: 769px) {
    padding: 4rem;
  }
`

export const WrapperDescription = styled.div<{ active: boolean }>`
  display: ${props => props.active ? 'flex' : 'none'};
  text-align: justify;
`

export const ShortDescription = styled.p`
  font-size: 2.5rem;
  line-height: 2rem;
  letter-spacing: .3rem;

  @media (min-width: 769px) {
    font-size: 1.5rem;
  }
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 3rem;
`

export const ImageClient = styled.img`
  border-radius: 50%;
  width: 5.5rem;
  height: 5.5rem;
`

export const WrapperNameAndProblem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const Problem = styled.p`
  font-size: 2rem;
  line-height: 2rem;
  letter-spacing: .3rem;

  @media (min-width: 769px) {
    font-size: 1.3rem;
  }
`

export const NameUser = styled(Problem)`
  font-size: 2.5rem;
  font-weight: bold;
    
  @media (min-width: 769px) {
    font-size: 1.7rem;
  }
`

export const Arrow = styled.span<{ active: boolean }>`
  width: 3.5rem;
  height: 3.5rem;
  mask-image: url('/public/assets/arrow.svg');
  mask-position: center;
  mask-size: cover;
  background-color: black;
  cursor: pointer;
  background-repeat: no-repeat;
  transition: transform .1s ease-in-out;
  transform: ${props => props.active ? 'rotate(180deg)' : 'rotate(0)'};
`

export const ButtonAccept = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: max-content;
  width: 40rem;
  height: 3em;
  background-color: #000000;
  border-radius: 8px;
  color: white;
  font-weight: 700;
  font-size: 2rem;
  text-decoration: none;

  transition: all .4s ease;

  :hover {
    cursor: pointer;

    background-color: white;
    border: 2px solid #000000;
    color: #000000;
  }

  @media (min-width: 769px) {
    font-size: 1.7rem;
  }
`