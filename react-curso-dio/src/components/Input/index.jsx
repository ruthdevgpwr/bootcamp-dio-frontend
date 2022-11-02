import { ErrorText, IconContainer, InputContainer, InputText } from "./styles"
import { Controller } from "react-hook-form"

export function Input({ leftIcon, name, control, errorMessage, ...rest }) {
  return (
    <>
      <InputContainer>
        {leftIcon ? <IconContainer>{leftIcon}</IconContainer> : null}
        <Controller
          name={name}
          control={control}
          rules={{ required: true }}
          render={({ field }) => <InputText {...field} {...rest} />}
        />
      </InputContainer>
      {errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}
    </>
  )
}
