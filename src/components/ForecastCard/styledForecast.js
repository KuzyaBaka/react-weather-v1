import styled from "styled-components";

export const ForecastContainer = styled.section`
padding: 0 19px;
  max-width: 1200px;
  height: 240px;
  box-shadow: var(--shadow);
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--colors-ui-bg);
  border-radius: 0 0 20px 20px;
`;

export const FcCard = styled.div`

  background-color: var(--colors-bg-card);
  border-radius: 20px;
  width: 149px;
  height: 200px;
`;
