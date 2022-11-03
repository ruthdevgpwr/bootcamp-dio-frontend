import React from "react";
import { ButtonContainer } from "./styles";
import { IButton } from "./types";

export function Button({ title, variant = "primary", onClick }: IButton) {
  return (
    <div>
      <ButtonContainer variant={variant} onClick={onClick}>
        {title}
      </ButtonContainer>
    </div>
  );
}
