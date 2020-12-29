import styled from 'styled-components';

export const StyledCalculator = styled.div`
    background-color: ${({ theme }) => theme.color.dark};
    width: 400px;
    min-width: 280px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    border-radius: ${({theme})=> theme.corner.borderRadius};
    margin: 10px;
`