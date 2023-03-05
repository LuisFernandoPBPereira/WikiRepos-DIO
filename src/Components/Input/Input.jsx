import * as S from "./styled"

export function Input({onChange, placeholder, name, value}) {
  return (
    <S.Input onChange={onChange}
             placeholder={placeholder}
             name={name}
             value={value}
    />
  )
}
