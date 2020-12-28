import { StyledButton } from './style';

const Button = ({ handleClick, text, color }) => {
    return (
        <StyledButton color={color}>
            <button onClick={handleClick}>{text}</button>
        </StyledButton>
    )
}

export default Button;
