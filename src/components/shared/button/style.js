import styled from 'styled-components';

export const StyledButton = styled.div`
    & > button {
        background-color: ${({ color }) => color};
    }
`