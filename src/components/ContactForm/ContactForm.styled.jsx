import styled from '@emotion/styled/';

export const Form = styled.form`
  width: 80%;
  display: flex;
  flex-direction: column;
`;

export const Field = styled.input`
  margin: 2% 0 6% 0;
  border-radius: 5px;
  height: 30px;
  border: none;
  font-size: 1em;

  &:focus {
    outline: 2px solid var(--color-accent);
  }
`;

export const Button = styled.button`
  margin-top: 10px;
  transform: scaleX(0.9);
  cursor: pointer;
  position: relative;
  color: #000;
  background-color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 1em;
  padding: 10px 15px;
  transition: 0.5s;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 5px;

  &:hover {
    border: 1px solid #fff;
    outline: none;
    letter-spacing: 0.25em;
    background: var(--color-accent);
    color: #fff;
    box-shadow: 0 0 20px #fff;
    transform: scaleX(1);
  }

  &::before {
    content: '';
    position: absolute;
    inset: 2px;
    background-color: inherit;
  }

  & span {
    position: relative;
    z-index: 1;
  }

  & i {
    position: absolute;
    inset: 0;
    display: block;

    &:before {
      content: '';
      position: absolute;
      left: 80%;
      top: -4px;
      width: 10px;
      height: 5px;
      border: 2px solid #000;
      background: #fff;
      transform: translateX(-50%);
      transition: 0.5s;
    }

    &:after {
      content: '';
      position: absolute;
      left: 20%;
      bottom: -4px;
      width: 10px;
      height: 5px;
      border: 2px solid #000;
      background: #fff;
      transform: translateX(-50%);
      transition: 0.5s;
    }
  }

  &:hover i:before {
    border-color: #fff;
    background: var(--color-accent);
    left: 20%;
    transform: scaleX(2);
  }

  &:hover i:after {
    border-color: #fff;
    background: var(--color-accent);
    left: 80%;
    transform: scaleX(2);
  }
`;
