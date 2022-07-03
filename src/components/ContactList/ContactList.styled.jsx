import styled from '@emotion/styled/';
import { IoMdContact } from 'react-icons/io';

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: 12px;
`;

export const ContactItem = styled.li`
  position: relative;
  display: grid;
  grid-template-columns: 24px 40% 25% 20%;
  column-gap: 5px;
  align-items: center;
`;

export const Icon = styled(IoMdContact)`
  width: 24px;
  height: auto;
  color: var(--color-accent);
`;

export const DeleteButton = styled.button`
  background: inherit;
  border: 0;
  box-sizing: border-box;
  color: transparent;
  cursor: pointer;
  font-size: 10px;
  letter-spacing: 0.1;
  line-height: 20px;
  outline: none;
  overflow: hidden;
  padding: 0 0;
  position: relative;
  text-transform: uppercase;
  /* transform: translate(-50%, -50%); */
  transition: all 0.2s ease-in;
  width: 40px;
  z-index: 1;

  &::before,
  &::after {
    background-color: var(--color-accent);
    content: '';
    display: block;
    height: 1px;
    left: 0%;
    position: absolute;
    transform-origin: center left;
    transition: all 0.2s ease-in;
    width: 40px;
    z-index: -1;
  }

  &::before {
    top: 0;
    transform: rotate(45deg);
  }

  &::after {
    bottom: 0;
    transform: rotate(-45deg);
  }

  &:hover {
    color: #000;
  }

  &:hover::before,
  &:hover::after {
    height: 20px;
    transform: rotate(0deg);
  }
`;
