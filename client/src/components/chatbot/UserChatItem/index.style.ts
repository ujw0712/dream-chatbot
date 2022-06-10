import styled from 'styled-components';

export const Item = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
`;

export const Message = styled.div`
  background: #ee4123;
  color: #fff;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 5px;
  overflow-wrap: anywhere;
  position: relative;
  
  &:after {
    content: "";
    position: absolute;
    top: 8px;
    right: -10px;
    border-left: 10px solid #ee4123;
    border-bottom: 8px solid transparent;
  }
`;
