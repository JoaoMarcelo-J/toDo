import styled from "styled-components";

export const HomeContainer = styled.div`
  height: 100vh;
  background-color: var(--gray-600);
`;

export const Wrapper = styled.main`
  width: 100%;
  max-width: 1104px;
  margin: 0 auto;
  color: white;
  padding: 0 10px;
`;

export const InputsContainer = styled.div`
  display: flex;
  gap: 8px;

  transform: translateY(-35%);

  select {
    font-size: 14px;
    border-radius: 8px;
    color: var(--gray-200);
    background-color: var(--gray-400);
  }
`;

export const TodoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const TodosHeader = styled.header`
  margin-top: 64px;
  margin-bottom: 24px;
  display: flex;
  width: 100%;
  justify-content: space-between;

  span {
    display: flex;
    align-items: center;
    gap: 10px;
    color: var(--brand-blue);
    font-size: 14px;
    font-weight: bold;
  }

  strong {
    display: flex;
    align-items: center;
    gap: 10px;
    color: var(--brand-purple);
    font-size: 14px;
    font-weight: bold;
  }

  h4 {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--gray-400);
    border-radius: 8px;
    font-size: 12px;
    padding: 3px 8px;
    color: white;
  }
`;

export const notTodo = styled.div`
  display: flex;
  margin-top: 68px;
  font-size: 1.2rem;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: var(--gray-300);

  strong {
    font-weight: bold;
  }
`;
