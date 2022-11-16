import * as S from './styled'

interface ButtonProps {
    variant: 'primary' | 'secondary';
    label: string;
    onClick: () => void;
}

export default function Button({ variant, label, onClick }: ButtonProps) {
    return (
        <S.Component variant={variant} onClick={onClick}>{label}</S.Component>
    )
}