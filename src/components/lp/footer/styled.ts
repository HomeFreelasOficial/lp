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
    grid-row: auto;

    padding-bottom: 8rem; 
`

export const ItemsFooterDiv = styled.div`
    display: grid;
    grid-row: 1;
    
    cursor: pointer;
`

export const TitleColumns = styled.h2`
    color: #fff;
    font-weight: bold;
    font-size: 2.5rem;
    line-height: 2.5rem;

    padding-bottom: 4.4rem;
`

export const ItemsColumns = styled.a`
    color: #fff;
    font-size: 2.5rem;
    line-height: 2.5rem;

    padding: 0.9rem 0;
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