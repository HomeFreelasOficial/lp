import * as ScrollArea from '@radix-ui/react-scroll-area'; 
import styled from 'styled-components';

export const RootList = styled(ScrollArea.Root)`
  width: 50rem;
  height: 74.4rem;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
  background-color: #F4F4F4;
  --scrollbar-size: 1rem;
`

export const ViewportList = styled(ScrollArea.Viewport)`
  width: 100%;
  height: 100%;
  border-radius: inherit;
`

export const ScrollbarList = styled(ScrollArea.Scrollbar)`
  display: flex;
  user-select: none;
  touch-action: none;
  padding: 2px;
  background: lightgray;
  transition: all 160ms ease-out;

  &:hover {
    background: gray;
  }

  &[data-orientation="vertical"] {
    width: var(--scrollbar-size);
  }
`

export const ThumbList = styled(ScrollArea.Thumb)`
  flex: 1;
  background: white;
  border-radius: var(--scrollbar-size);
  position: relative;
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
`

export const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 75rem;
  gap: 3rem;
  height: max-content;
  background-color: #F4F4F4;
  border-radius: 8px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 4rem;
`

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  line-height: 2rem;
  letter-spacing: .3rem;
  color: black;
  padding: 2.7rem;
`