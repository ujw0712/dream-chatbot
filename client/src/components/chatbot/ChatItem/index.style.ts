import styled from 'styled-components';
import { Bot } from '~/assets';

export const Item = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 10px;
`;

export const BotProfile = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  border: 1px solid #F2F6FD;
  font-size: 20px;
  margin-right: 10px;
  background: center / contain no-repeat url(${Bot});
`;

export const BotName = styled.div`
  font-size: 12px;
  margin: 5px 0px;
`;

export const BotMessage = styled.div`
  background: #F6F6F6;
  border-radius: 5px;
  min-height: 30px;
  display: flex;
  align-items: center;
  font-size: 12px;
  padding: 5px 10px;
  max-width: 600px;
  overflow-wrap: anywhere;
`;