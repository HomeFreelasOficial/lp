import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 67rem;
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
  flex-direction: column;
  gap: 2rem;
  text-align: justify;
  margin-top: 2.5rem;
`

export const Description = styled.p`
  font-size: 2.5rem;
  line-height: 3rem;
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
  font-weight: 700;
  line-height: 3rem;
    
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

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: 600;
  line-height: 2rem;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`

export const Address = styled.p`
  font-size: 2rem;
  line-height: 2rem;
  letter-spacing: .3rem;

  @media (min-width: 769px) {
    font-size: 1.5rem;
  }
`