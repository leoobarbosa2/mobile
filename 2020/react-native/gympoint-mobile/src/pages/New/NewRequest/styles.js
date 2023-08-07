import styled from 'styled-components/native';

import Button from '~/components/Button';

export const Container = styled.View`
  padding: 20px;
`;

export const Text = styled.TextInput.attrs({
  numberOfLines: 10,
  textAlignVertical: 'top',
})`
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  margin-top: 15px;
  background: #fff;
`;

export const SubmitButton = styled(Button)`
  margin-top: 10px;
`;
