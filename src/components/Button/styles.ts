import styled from "styled-components";

export const ButtonContainer = styled.div`
  button {
    display: flex;
    align-items: center;
    gap: 8px;
    border: none;
    border-radius: 8px;
    background-color: var(--brand-blue-dark);
    color: white;
    transition: all 0.2s ease-in-out;

    padding: 1rem;

    &:hover {
      background-color: var(--brand-blue);
    }
  }
`;
