import { useState } from 'react'
import * as S from './styled'

export default function Header() {
    const [isActiveMenu, setIsActiveMenu] = useState<boolean>(false)

    return (
        <>
            <S.Container>
                <S.Navbar>
                    <S.Logo />
                    <S.Arrow active={isActiveMenu} onClick={() => setIsActiveMenu(old => !old)} />
                    <S.NavItem>Sobre nós</S.NavItem>
                    <S.NavItem>Suporte</S.NavItem>
                </S.Navbar>
                <S.Actions>
                    <S.ActionButton variant='secondary'>Fazer login</S.ActionButton>
                    <S.ActionButton variant='primary'>Cadastre-se</S.ActionButton>
                </S.Actions>
            </S.Container>
            <S.Menu active={isActiveMenu}>
                <S.MenuItem>Sobre nós</S.MenuItem>
                <S.MenuItem>Suporte</S.MenuItem>
            </S.Menu>
        </>
        
    )
}