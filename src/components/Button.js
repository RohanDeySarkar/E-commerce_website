import styled from 'styled-components';

// same as css
export const ButtonContainer = styled.button
`
    text-transform: capitalize;
    font-size: 1.4rem;
    background: transparent;
    border: 0.05rem solid var(--lightblue);
    border-color: ${props => props.cart? "var(--mainYellow)" : "solid var(--lightblue)"};
    color: ${prop => prop.cart ? "var(--mainYellow)" : "var(--ligthblue)"};
    border-radius: 0.5rem;
    padding: 0.2rem 0.5rem;
    cursor: pointer;
    margin: 0.2rem 0.5rem 0.2rem 0;
    transition: all 0.5s ease-in-out;
    &:hover{
        background: ${prop => prop.cart ? "var(--mainYellow)" : "var(--ligthblue)"};
        color: var(--mainBlue);
    }
    &:focus{
        outline: none;
    }
`;
