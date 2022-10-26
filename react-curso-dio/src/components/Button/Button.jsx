import { ButtonContainer } from "./styles"

export function Button({ title, variant = "primary", onClick }) {
  return (
    <div>
      <ButtonContainer variant={variant} onClick={onClick}>
        {title}
      </ButtonContainer>
    </div>
  )
}
