import styled from "styled-components";

export interface IJobButton {
    isClicked: boolean,
    color: string
}

export const Styles = {

    Card : styled.div`
    display: flex;
    padding: 2em;
    width: 60em;
    background-color: #F4F4F4;
    flex-direction: column;
    gap: 1em;
    border-radius: 8px;
    `,

    TextBold : styled.p`
    font-weight: 700;
    font-size: 12px;
    `,

    Text : styled.p`
    font-size: 12px;
    `,

    JobButton : styled.button<IJobButton>`
    color: ${props => props.isClicked ? props.color : 'white'};
    background-color: ${props => props.isClicked? 'white' : props.color};
    border: ${props => props.isClicked? '1px solid' + props.color : 'none'};
    border-radius: 8px;
    align-items: center;
    width: 8em;
    height: 2em;
    font-size: 10px;
    `


}


