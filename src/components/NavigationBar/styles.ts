import styled from 'styled-components';
import colors from '../../styles/colors';

export const Nav = styled.nav`
  background-color: ${colors.primaryLight};
  padding: 30px 0;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 8px;

  li {
    width: min(100%, 200px);

    button {
      width: 100%;
      display: flex;
      align-items: center;
      gap: 8px;
    }
  }
`;
