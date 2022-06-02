import { FC } from 'react';

import {
  MainContainer,
  ChatContainer,
  ChatHeader,
} from './index.style';

import Chat from '~/components/chatbot/Chat'

const MainPage: FC = () => {

  return (
    <MainContainer>
      {/*<div>Dream Chat Bot</div>*/}
      <ChatContainer>
        <ChatHeader>
          드림인사이트 개발팀 &gt; ADMAKER
        </ChatHeader>
        <Chat/>
      </ChatContainer>
    </MainContainer>
  );
};

export default MainPage;
