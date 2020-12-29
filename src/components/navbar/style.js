import styled from 'styled-components';

export const StyledNavbar = styled.nav`
    text-align: center;
    background-color: ${({theme}) => theme.color.primary};
    color: ${({theme}) => theme.color.ligth};
`