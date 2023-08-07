import styled from 'styled-components/native';

import logo from '~/assets/logo.png';
import Button from '~/components/Button';

export const Logo = styled.Image.attrs({
  source: logo,
})``;

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
`;

export const Form = styled.View`
  margin-top: 20px;
  align-self: stretch;
`;

export const FormInput = styled.TextInput`
  height: 44px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  margin-bottom: 10px;
  padding: 0 15px;
`;

export const SubmitButton = styled(Button)`
  align-self: stretch;
`;
