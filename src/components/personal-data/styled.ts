import styled from "styled-components"

export const Styles = {

    Wrapper : styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    flex-direction: column;
    `,

    Body : styled.div`
    display: flex;
    height: 100vh;
    flex-direction: column;
    gap: 3em;
    align-items: center;
    padding-top: 10em;
    padding-bottom: 16em;
    `,

    ProfileDiv : styled.div`
    display: flex;
    
    `,

    EditButton : styled.button<{isClicked : boolean}>`
    z-index: 3;
    width: 20px;
    height: 20px;
    position: absolute;
    margin-left: 7em;
    background-position: center;
    background-size: cover;
    border-radius: 10px;
    background-image: ${props => props.isClicked ? 'url(./src/assets/img/component-2.png)' : 'url(./src/assets/img/component-3.png)'};
    `,

    TextBold : styled.p`
    font-weight: 700;
    font-size: 12px;
    `,

    Text : styled.p`
    font-size: 12px;
    `


}