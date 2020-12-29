import { StyledButton } from './style';

const Button = ({ onClick, text, colorCode }) => {
    return (
        <StyledButton colorCode={colorCode}>
            <button onClick={onClick} value={text}>{text}</button>
        </StyledButton>
    )
}

export default Button;
