import styled from 'styled-components';

export const StyledPanel = styled.div`
    margin-top: 20px;
    width: 100%;
    min-height: 350px;
    padding: 20px;
    background-color: ${({ theme }) => theme.color.secondary};
    border-radius: ${({theme})=> theme.corner.borderRadius};
`

export const StyledPanelRow = styled.div`
    display: flex;
    justify-content: space-around; 
`