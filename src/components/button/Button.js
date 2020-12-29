import { StyledButton } from './style';

const Button = ({ onClick, text, colorCode, selected }) => {
    return (
        <StyledButton colorCode={colorCode} selected={`${selected}d` === text ? true : false}>
            <button onClick={onClick} value={text}>{text}</button>
        </StyledButton>
    )
}

export default Button;
