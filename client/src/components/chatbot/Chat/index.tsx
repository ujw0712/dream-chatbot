import { FC } from 'react';

import {
  ChatWrap,
  ChatItems,
} from './index.style';

import ChatItem from '~/components/chatbot/ChatItem'
// import ChatInput from '~/components/chatbot/ChatInput'

const Chat: FC = () => {

  return (
    <ChatWrap>
      <ChatItems>
        <ChatItem/>
      </ChatItems>
      {/*<ChatInput/>*/}
    </ChatWrap>
  );
};

export default Chat;
