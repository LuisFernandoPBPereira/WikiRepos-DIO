import * as S from "./styled"

export function Button({label, onClick}) {
  return (
    <S.Button onClick={onClick}>{label}</S.Button>
  )
}
