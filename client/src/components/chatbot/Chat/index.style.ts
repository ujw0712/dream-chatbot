import styled from 'styled-components';

export const ChatWrap = styled.div`
  padding: 15px 15px 0px 15px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-y: scroll;
  
  &::-webkit-scrollbar {
    width:3px;
  }
  &::-webkit-scrollbar-thumb {
    background:#ee4123;
    border-radius:3px;
  }
  &::-webkit-scrollbar-track {
    background-color: #fff;
  }
`;

export const ChatItems = styled.div`
  display: flex;
  flex-direction: column;
  height: 70vh;
`;

export const ButtonContainer = styled.div`
  margin-left: 50px;
`;

export const NoData = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0 20px 0;
`;

export const Selected = styled.span`
  font-weight: bold;
  color: red;
`;