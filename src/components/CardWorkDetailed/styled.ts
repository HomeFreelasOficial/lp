import styled, { keyframes } from "styled-components";
import { Link } from 'react-router-dom';
import * as Dialog from '@radix-ui/react-dialog';

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

export const ButtonAccept = styled.button`
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

export const ButtonCancel = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: max-content;
  width: 40rem;
  height: 3em;
  background-color: #FF0000;
  border-radius: 8px;
  color: white;
  font-weight: 700;
  font-size: 2rem;
  text-decoration: none;

  transition: all .4s ease;

  :hover {
    cursor: pointer;

    background-color: white;
    border: 2px solid #FF0000;
    color: #FF0000;
  }

  @media (min-width: 769px) {
    font-size: 1.7rem;
  }
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

export const WrapperButton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const Root = styled(Dialog.Root)``

export const Trigger = styled(Dialog.Trigger)``

export const Portal = styled(Dialog.Portal)``

export const Overlay = styled(Dialog.Overlay)`
  background-color: black;
  position: fixed;
  opacity: 0.8;
  inset: 0;
`

export const Content = styled(Dialog.Content)`
  display: flex;
  flex-direction: column;
  width: 45rem;
  height: max-content;
  background-color: #F4F4F4;
  color: #0D0D0D;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  position: fixed;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  padding: 5rem 5rem;

  @media (min-width: 375px) {
    width: 55rem;
  }
`

export const TitleModal = styled(Dialog.Title)`
  color: #000000;
  font-size: 2rem;

  @media (min-width: 375px) {
    font-size: 4rem;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
`

export const DescriptionModal = styled(Dialog.Description)`
  color: #252525;
  font-size: 1.5rem;

  @media (min-width: 375px) {
    font-size: 3rem;
  }
`

export const CloseModal = styled(Dialog.Close)`
  display: flex;
  justify-content: center;
  gap: 2rem;
`

export const ButtonClose = styled.button`
  background-color: #FF0000;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  font-weight: 700;
  cursor: pointer;
  color: white;
  transition: all 0.3s ease;
  &:hover {
    opacity: 0.7;
  }

  @media (min-width: 375px) {
    font-size: 3rem;
    padding: 1rem;
  }
`

export const ButtonConfirm = styled.button`
  background-color: #000000;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  font-weight: 700;
  cursor: pointer;
  color: white;
  transition: all 0.3s ease;
  &:hover {
    opacity: 0.7;
  }

  @media (min-width: 375px) {
    font-size: 3rem;
    padding: 1rem;
  }
`

export const InputHour = styled.input`
  border-radius: 8px;
  font-size: 4rem;
  background-color: #FFF;
`