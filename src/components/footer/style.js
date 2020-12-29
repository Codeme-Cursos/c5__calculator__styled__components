import styled from 'styled-components';

export const StyledFooter = styled.footer`
    padding: 5px 0;
    text-align: center;
    background-color: ${({theme}) => theme.color.primary};
    color: ${({theme}) => theme.color.ligth};
`