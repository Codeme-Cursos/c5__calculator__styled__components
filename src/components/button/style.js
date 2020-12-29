import styled from 'styled-components';

export const StyledButton = styled.div`
    & > button {
        background-color: ${({ colorCode, theme }) => theme.color[colorCode]};
        border: 0;
        outline: none;
        width: 40px;
        height: 40px;
        border-radius: ${({ theme }) => theme.corner.borderRadius};
        color: ${({ theme }) => theme.color.ligth};
        font-weight: 500;
        font-size: 18px;
        margin-bottom: 10px;
        box-shadow: ${({ selected }) => selected ? 'inset' : ''} 2px 2px 3px ${({ theme }) => theme.color.dark};
        &:active {
            box-shadow: inset 2px 2px 3px ${({ theme }) => theme.color.dark};
        }
    }
`