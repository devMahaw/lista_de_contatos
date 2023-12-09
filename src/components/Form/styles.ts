import { styled } from 'styled-components';
import colors from '../../styles/colors';

export const FormContainer = styled.div`
  width: min(100% - 30px, 400px);
  margin: 40px auto;
  padding: 16px;
  background: ${colors.primaryLight};
  border-radius: 6px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  h2 {
    background: ${colors.primary};
    padding: 20px 0;
    font-size: 140%;
    text-align: center;
    color: ${colors.white};
    margin: -16px -16px 16px -16px;
    border-radius: 6px 6px 0 0;
  }
`;

export const Form = styled.form`
  background: ${colors.primaryLight};
  width: min(100% - 30px, 400px);
  margin: 0 auto;

  input {
    transition: all 0.3s ease-in-out;
    margin-bottom: 12px;
    border: 2px solid ${colors.primary};
    border-radius: 6px;
    color: ${colors.primary};

    &:focus {
      border-color: ${colors.sky};
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }
  }

  button {
    background: ${colors.primary};
    border-color: ${colors.primary};
    color: ${colors.white};
    width: 100%;
    margin: 8px 0;
  }
`;
