import styled from 'styled-components';
import { Bot } from '~/assets';

export const Item = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 10px;
`;

export const Profile = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  border: 1px solid #F2F6FD;
  font-size: 20px;
  margin-right: 10px;
  background: center / contain no-repeat url(${Bot});
`;

export const Wrapper = styled.div`
  width: 305px;
`;

export const Name = styled.div`
  margin: 5px 0px;
`;

export const Message = styled.div`
  background: #F6F6F6;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 5px;
  overflow-wrap: anywhere;
`;

export const NoData = styled.div`
  display: flex;
  justify-content: center;
`;

export const Options  = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
  font-weight: bold;
`;

export const Option  = styled.a`
  margin: 5px 0;
  text-decoration: none;
  color: #000;
`;

export const EmailTextarea = styled.textarea`
  width: 283px;
  height: 100px;
  padding: 10px;
  border: 1px solid;
  border-radius: 5px;
  resize: none;
`;