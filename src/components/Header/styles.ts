import styled from 'styled-components';
import colors from '../../styles/colors';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${colors.gradient};
  height: 100px;
`;

export const TituloH1 = styled.h1`
  font-size: 48px;
  color: ${colors.white};
  letter-spacing: 3px;
  text-transform: uppercase;

  @media (max-width: 767px) {
    font-size: 36px;
    letter-spacing: initial;
  }

  @media (max-width: 470px) {
    font-size: 28px;
  }
`;
