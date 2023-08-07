import styled from 'styled-components/native';

import logo from '~/assets/logo-hor.png';

export const Container = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image.attrs({
  source: logo,
})`
  margin-top: 20px;
`;
