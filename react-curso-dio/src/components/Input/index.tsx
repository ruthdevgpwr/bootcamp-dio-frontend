import React from "react";
import { ErrorText, IconContainer, InputContainer, InputText } from "./styles";
import { Controller } from "react-hook-form";
import { IInput } from "./types";

export function Input({
  leftIcon,
  name,
  control,
  errorMessage,
  ...rest
}: IInput) {
  return (
    <>
      <InputContainer>
        {leftIcon ? <IconContainer>{leftIcon}</IconContainer> : null}
        <Controller
          name={name}
          control={control}
          rules={{ required: true }}
          render={({ field: { value, onChange } }) => (
            <InputText value={value} onChange={onChange} {...rest} />
          )}
        />
      </InputContainer>
      {errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}
    </>
  );
}
