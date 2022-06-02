import styled from 'styled-components';

type Size = 'sm' | 'md' | 'lg';

const fontSizeMap: { [key in Size]: string } = {
  sm: '14px',
  md: '18px',
  lg: '25px',
};

const widthMap: { [key in Size]: string } = {
  sm: '92px',
  md: '138px',
  lg: '183px',
};

const heightMap: { [key in Size]: string } = {
  sm: '27px',
  md: '41px',
  lg: '55px',
};

const Button = styled.button<{ size: Size }>`
  position: relative;
  // height: ${({ size }) => heightMap[size]};
  // width: ${({ size }) => widthMap[size]};
  // font-size: ${({ size }) => fontSizeMap[size]};
  font-size: 16px;
  cursor: pointer;
  background: #fff;
  border: 1px solid #000;
  color: #000;
  border-radius: 16px;
  padding: 10px;
  margin: 10px;
  &:hover {
    background: #000;
    color: #fff;
  }
`;

export default Button;
