import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 14%;
  z-index: 1;
  @media (max-width: 768px) {
    padding: 0 7%;
  }
`;

export const NavList = styled.ul`
  @media (max-width: 768px) {
    display: none;
  }
  display: flex;
  height: 40px;
  justify-content: space-between;
  align-items: center;
  width: 550px;
`;

export const NavListItem = styled.li`
  list-style: none;
  white-space: nowrap;
  color: #474747;
  font-family: 'Montserrat', sans-serif;
  font-size: 15px;
  &:hover {
    cursor: pointer;
  }
`;
