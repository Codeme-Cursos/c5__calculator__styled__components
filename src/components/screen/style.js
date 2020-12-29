import styled from 'styled-components';

export const StyledScreen = styled.div`
    width: 100%;
    overflow-y: auto;
    height: 50px;
    background-color: ${({ theme }) => theme.color.success};
    font-size: 30px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0 20px;
    border-radius: ${({theme})=> theme.corner.borderRadius};
`