import * as S from './styled'

interface SectionProps {
    children: any
    background?: string
}

export default function Section({ background, children }: SectionProps) {
    return (
        <S.Container background={background}>
            {children}
        </S.Container>
    )
}