import { IconContainer, InputContainer, InputText } from "./styles"

export function Input({ leftIcon, name, ...rest }) {
  return (
    <InputContainer>
      {leftIcon ? <IconContainer>{leftIcon}</IconContainer> : null}
      <InputText {...rest} />
    </InputContainer>
  )
}
