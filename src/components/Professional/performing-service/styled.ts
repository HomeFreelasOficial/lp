import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 95vh;
`

export const WrapperCard = styled.div<{ children: any }>`
  width: max-content;
  height: max-content;
  border-radius: 8px;
  background-color: #F4F4F4;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`

export const TitleWrapperCard = styled.h1`
  font-size: 2.5rem;
  font-weight: 600;
  line-height: 2rem;
`