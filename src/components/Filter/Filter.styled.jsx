import styled from '@emotion/styled/';

export const Field = styled.input`
  width: 79%;
  margin: 4% 0 8% 0;
  border-radius: 5px;
  height: 30px;
  border: none;
  font-size: 1em;

  &:focus {
    outline: 2px solid var(--color-accent);
  }
`;
