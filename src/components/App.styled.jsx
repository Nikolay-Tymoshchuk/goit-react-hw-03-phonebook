import styled from '@emotion/styled';

export const Container = styled.div`
  min-width: 350px;
  height: max-content;
  display: inline-flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  font-size: 40;
  margin-left: 2%;
  margin-top: 2%;
  color: var(--color-text-primary);
  border-radius: 10px;
  padding: 16px;
  box-shadow: 0 0 20px 15px rgba(0, 0, 0, 0.7);
  background-color: #000000;
  background-position: 85% bottom;
  background-size: 600%;
  background-image: radial-gradient(
    circle,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0) 69%,
    rgba(2, 183, 255, 0.5) 70%,
    rgba(255, 255, 255, 1) 72%,
    rgba(0, 0, 0, 0) 73%,
    rgba(0, 0, 0, 0) 100%
  ); ;
`;

export const Title = styled.h1`
  font-size: 40;
`;
