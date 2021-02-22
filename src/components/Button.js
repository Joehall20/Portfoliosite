import styled from 'styled-components'

/*Cart Button Styled-Components Setup/ style*/ 
export const ButtonStyled = styled.button`
    text-transform: uppercase;
    background-color: var(--teal);
    border-radius: 6px;
    color: var(--mainDark);
    font-weight: bold;
    font-size: 1.3rem;
    border: 0.2rem solid var(--mainDark);
    padding: 0.2rem 0.5rem;
    margin: 0.2rem 0.5rem 0.2rem 0;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover{
        background: var(--orange);
    }
`;