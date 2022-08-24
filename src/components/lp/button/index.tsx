import * as S from './styled'

interface ButtonProps {
    variant: 'primary' | 'secondary'
    label: string
}

export default function Button({ variant, label }: ButtonProps) {
    return (
        <S.Component variant={variant}>{label}</S.Component>
    )
}