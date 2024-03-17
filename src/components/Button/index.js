
import { ButtonContainer, CustomButton } from './styles';

const Button = ({label, onClick}) => {
  return(
    label !== "=" ? (
      <ButtonContainer onClick={onClick} type="button">
        {label}
      </ButtonContainer>
    ) : (
      <CustomButton onClick={onClick} type="button">
        {label}
      </CustomButton>
    )
  )
}
  
export default Button;