import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  // flex-direction: row;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-self: center;
  width: 100%;
  height: 100vh;
`;

export const ChatContainer = styled.div`
  width: 400px;
  height: 80vh;
  border: 1px solid #000;
  border-radius: 15px;
  box-shadow: 5px 5px 5px -5px black;
`;

export const ChatHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  height: 60px;
  font-size: 24px;
  background-color: #000;
  color: #fff;
  border-bottom: 1px solid #000;
  border-radius: 15px 15px 0px 0px;
  // box-shadow: 0 5px 5px -5px black;
`;