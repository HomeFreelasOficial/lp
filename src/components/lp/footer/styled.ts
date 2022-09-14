import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    width: 100vw;
    height: max-content;
    padding: 6.3rem 8rem;
    background-color: var(--gray);
`

export const ColumnsDiv = styled.div`
    display: grid;
    grid-column: 3;
`

export const ItemsFooterDiv = styled.div`
    display: flex;
    flex-direction: column;
`

export const TitleColumns = styled.h2`
    color: #fff;
    font-weight: bold;
    font-size: 2.5rem;
    line-height: 2.5rem;
`

export const ItemsColumns = styled.a`

`

export const SpanCopyright = styled.div`
    display: flex;
    justify-content: space-between;
`

export const SpanItem = styled.span`
    color: #fff;
    font-size: 2rem;
    line-height: 2.5rem;
`